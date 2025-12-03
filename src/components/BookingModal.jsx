import { useState, useEffect } from "react";

const BookingModal = ({ event, isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    playersNumber: 1,
    time: "20:45",
    gameId: "",
  });

  const [games, setGames] = useState([]);
  const [loadingGames, setLoadingGames] = useState(false);
  const [gamesError, setGamesError] = useState(false);

  const generateTimeOptions = () => {
    const times = [];
    const startHour = 20;
    const startMinute = 45;
    const endHour = 23;
    const endMinute = 30;

    let current = new Date();
    current.setHours(startHour, startMinute, 0, 0);

    const end = new Date();
    end.setHours(endHour, endMinute, 0, 0);

    while (current <= end) {
      const hours = current.getHours().toString().padStart(2, "0");
      const minutes = current.getMinutes().toString().padStart(2, "0");
      times.push(`${hours}:${minutes}`);
      current.setMinutes(current.getMinutes() + 15);
    }

    return times;
  };

  useEffect(() => {
    if (!isOpen) {
      setGames([]);
      return;
    }

    const fetchGames = async () => {
      setLoadingGames(true);
      setGamesError(false);

      const token =
        localStorage.getItem("token") || localStorage.getItem("authToken");
      if (!token) {
        setGamesError(true);
        setLoadingGames(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3001/game", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Errore caricamento giochi");

        const data = await response.json();

        const gamesArray = Object.entries(data).map(([name, uuid]) => ({
          name,
          uuid,
        }));

        gamesArray.sort((a, b) => a.name.localeCompare(b.name));

        setGames(gamesArray);
      } catch (err) {
        console.error("Errore fetch giochi:", err);
        setGamesError(true);
      } finally {
        setLoadingGames(false);
      }
    };

    fetchGames();
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token =
      localStorage.getItem("token") || localStorage.getItem("authToken");

    const payload = {
      eventId: event.id,
      playersNumber: Number(formData.playersNumber),
      time: formData.time + ":00",
      gameId: formData.gameId || null,
    };

    try {
      const response = await fetch("http://localhost:3001/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        onClose();
        if (onSuccess) {
          onSuccess("Prenotazione confermata! Ti aspettiamo!");
        }
        setFormData({ playersNumber: 1, time: "20:45", gameId: "" });
      } else {
        const error = await response.text();
        alert("Errore prenotazione: " + error);
      }
    } catch (err) {
      alert("Errore di rete. Riprova." + err);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay + Modale */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
          {/* Header */}
          <div className="bg-red-900 text-white p-6 text-center">
            <h2 className="text-2xl font-bold">Prenota il tuo posto</h2>
            <p className="mt-2 text-amber-100 text-sm">
              {event?.location?.name} •{" "}
              {new Date(event.dateAndTime).toLocaleDateString("it-IT", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}{" "}
              alle{" "}
              {new Date(event.dateAndTime).toLocaleTimeString("it-IT", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Numero persone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quante persone prenoti? *
              </label>
              <select
                name="playersNumber"
                value={formData.playersNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "persona" : "persone"}
                  </option>
                ))}
              </select>
            </div>

            {/* Orario arrivo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Orario di arrivo *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none transition"
              >
                {generateTimeOptions().map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown giochi */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gioco preferito (opzionale)
              </label>
              <select
                name="gameId"
                value={formData.gameId}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none"
              >
                <option value="">Nessuna preferenza</option>
                {loadingGames && (
                  <option disabled>Caricamento giochi...</option>
                )}
                {gamesError && (
                  <option disabled>Errore caricamento giochi</option>
                )}
                {!loadingGames &&
                  !gamesError &&
                  games.map((game) => (
                    <option key={game.uuid} value={game.uuid}>
                      {game.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Pulsanti */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition"
              >
                Annulla
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-red-900 text-white font-bold rounded-lg hover:bg-red-800 transform hover:scale-105 transition shadow-lg"
              >
                Conferma Prenotazione
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
