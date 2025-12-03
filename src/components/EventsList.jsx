import thumbnail from "../assets/bannerTL.jpg";
import BookingModal from "./BookingModal";
import { useState } from "react";
import Toast from "./Toast";

const EventList = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const openModal = () => {
    setSelectedEvent(event); // ← imposta l'evento corrente
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleBookingSuccess = (message) => {
    closeModal();
    setToastMessage(message);
    setShowToast(true);
  };
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.toLocaleString("it-IT", { month: "long" });
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${month} • ${hours}:${minutes}`;
  };

  return (
    <div className="bg-yellow-te rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full">
      <div className="w-full md:w-48 lg:w-56 shrink-0">
        <img
          src={thumbnail}
          alt="Locandina serata ludica"
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between bg-yellow-50">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-1">
            {formatDate(event.dateAndTime)}
          </h3>
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-2 line-clamp-2">
            {event.location.name}
          </h1>
          <p className="text-gray-600 flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-amber-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="line-clamp-1">
              {event.location.street}, {event.location.city}
            </span>
          </p>
        </div>

        <div className="mt-4 md:mt-6">
          <button
            onClick={openModal}
            className="w-full px-6 py-3 bg-red-900 text-white font-bold text-base md:text-lg rounded-xl hover:bg-red-800 hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-md"
          >
            Prenotati ora
          </button>
        </div>
        {/* Modale */}
        {selectedEvent && (
          <BookingModal
            event={selectedEvent}
            isOpen={isModalOpen}
            onClose={closeModal}
            onSuccess={handleBookingSuccess} // ← nuova prop!
          />
        )}
        {/* Toast qui fuori → sempre visibile! */}
        {showToast && (
          <Toast message={toastMessage} onClose={() => setShowToast(false)} />
        )}
      </div>
    </div>
  );
};

export default EventList;
