import logo from "../assets/itl_logo_tondo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // ← Risolve il problema del colore attivo

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-row justify-between min-w-full p-4 bg-red-900 fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-row justify-between items-center gap-8">
        <Link
          to="/"
          className={`relative px-6 py-2 rounded-full text-lg transition-all duration-300
            ${
              isActive("/")
                ? "text-red-900 bg-yellow-te shadow-lg"
                : "text-white hover:text-yellow-200"
            }`}
        >
          Home
          {isActive("/") && (
            <span className="absolute inset-0 rounded-full bg-yellow-te -z-10" />
          )}
        </Link>

        <Link
          to="/eventi"
          className={`relative px-6 py-2 rounded-full text-lg transition-all duration-300
            ${
              isActive("/eventi")
                ? "text-red-900 bg-yellow-te shadow-lg"
                : "text-white hover:text-yellow-200"
            }`}
        >
          Eventi
          {isActive("/eventi") && (
            <span className="absolute inset-0 rounded-full bg-yellow-te -z-10" />
          )}
        </Link>

        <Link
          to="/chi-siamo"
          className={`hidden relative px-6 py-2 rounded-full text-lg transition-all duration-300
            ${
              isActive("/chi-siamo")
                ? "text-red-900 bg-yellow-te shadow-lg"
                : "text-white hover:text-yellow-200"
            }`}
        >
          Chi siamo
          {isActive("/chi-siamo") && (
            <span className="absolute inset-0 rounded-full bg-yellow-te -z-10" />
          )}
        </Link>

        <Link
          to="/contatti"
          className={`relative px-6 py-2 rounded-full text-lg transition-all duration-300
            ${
              isActive("/contatti")
                ? "text-red-900 bg-yellow-te shadow-lg"
                : "text-white hover:text-yellow-200"
            }`}
        >
          Contatti
          {isActive("/contatti") && (
            <span className="absolute inset-0 rounded-full bg-yellow-te -z-10" />
          )}
        </Link>
      </div>

      {/* Logo al centro */}
      <div className="hover:cursor-pointer">
        <img
          src={logo}
          alt="Logo circolare del tempio ludico"
          className="h-12"
        />
      </div>

      {/* Destra */}
      <div className="flex flex-row justify-between items-center gap-8">
        <Link
          to="/cerca"
          className={`hidden relative px-6 py-2 rounded-full text-lg transition-all duration-300
            ${
              isActive("/cerca")
                ? "text-red-900 bg-yellow-te shadow-lg"
                : "text-white hover:text-yellow-200"
            }`}
        >
          Cerca
          {isActive("/cerca") && (
            <span className="absolute inset-0 rounded-full bg-yellow-te -z-10" />
          )}
        </Link>

        <Link
          to="/giochi"
          className={`relative px-6 py-2 rounded-full text-lg transition-all duration-300
            ${
              isActive("/giochi")
                ? "text-red-900 bg-yellow-te shadow-lg"
                : "text-white hover:text-yellow-200"
            }`}
        >
          I nostri giochi
          {isActive("/giochi") && (
            <span className="absolute inset-0 rounded-full bg-yellow-te -z-10" />
          )}
        </Link>

        <Link
          to="/utente"
          className={`relative px-6 py-2 rounded-full text-lg transition-all duration-300
            ${
              isActive("/utente")
                ? "text-red-900 bg-yellow-te shadow-lg"
                : "text-white hover:text-yellow-200"
            }`}
        >
          Viktor
          {isActive("/utente") && (
            <span className="absolute inset-0 rounded-full bg-yellow-te -z-10" />
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
