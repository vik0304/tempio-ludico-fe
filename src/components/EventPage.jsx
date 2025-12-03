import EventsList from "./EventsList";
import { useState, useEffect } from "react";
import Toast from "./Toast";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);

      const token =
        localStorage.getItem("token") || localStorage.getItem("authToken");

      if (!token) {
        throw new Error("Nessun token trovato. Effettua il login.");
      }

      const response = await fetch(
        "http://localhost:3001/event?page=0&size=10&orderBy=asc",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Errore nel caricamento degli eventi");
      }
      const data = await response.json();
      setEvents(data.content || []);
    } catch (err) {
      setError(err.message);
      console.error("Errore fetch eventi:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <div className="bg-red-900 py-16 px-6 text-center pt-35 mb-7">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-white drop-shadow-2xl leading-tight">
          Scopri qui tutte le prossime serate ludiche!
        </h1>
        <h2 className="mt-6 text-lg md:text-xl lg:text-xl font-medium text-white max-w-4xl mx-auto leading-relaxed">
          Scopri quando e dove ci troviamo e prenota* il gioco a cui vuoi
          giocare!
        </h2>
        <p className="mt-5 text-sm md:text-md text-amber-200 italic max-w-3xl mx-auto opacity-95">
          <span className="font-bold text-white">
            *La prenotazione non è obbligatoria
          </span>
          , ma utile se vuoi assicurarti di giocare ad un specifico gioco!
        </p>
      </div>
      {loading && <p>Caricamento eventi in corso...</p>}
      {error && <p style={{ color: "red" }}>Errore: {error}</p>}
      {!loading && !error && events.length === 0 && (
        <p>Nessun evento in programma al momento.</p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-8xl mx-auto px-4 py-8">
        {events.map((event) => (
          <EventsList key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
