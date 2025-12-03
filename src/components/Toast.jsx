import { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500); // 4.5 secondi

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] animate-in slide-in-from-bottom duration-500">
      <div className="bg-green-700 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold text-lg">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
