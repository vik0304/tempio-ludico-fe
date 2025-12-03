import { useState } from "react";
import logo from "../assets/itl_logo_tondo.png";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = {
      identifier: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login fallito");
      }
      console.log("Login successful:", data);
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 100);
      } else {
        setError("Token non ricevuto dal server");
      }
    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
      name: formData.get("nome"),
      surname: formData.get("cognome"),
      dateOfBirth: formData.get("dataNascita"),
    };

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registrazione fallita");
      }
      console.log("Registration successful:", data);
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 100);
      } else {
        setError("Token non ricevuto dal server");
      }
    } catch (err) {
      setError(err.message);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-red-900 flex flex-col items-center justify-center">
      <img src={logo} alt="Logo tempio ludico" className="h-22 mb-3" />
      <div className="min-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="flex space-x-4 border-b-2 border-gray-200 mb-4">
          <button
            onClick={() => handleTabClick("login")}
            className={`w-full py-2 text-center cursor-pointer transition-colors ${
              activeTab === "login"
                ? "text-red-900 border-b-2 border-red-900"
                : "text-gray-500 hover:text-red-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabClick("register")}
            className={`w-full py-2 text-center cursor-pointer transition-colors ${
              activeTab === "register"
                ? "text-red-900 border-b-2 border-red-900"
                : "text-gray-500 hover:text-red-700"
            }`}
          >
            Register
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {activeTab === "login" ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-red-900 text-white rounded-md cursor-pointer hover:bg-red-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Caricamento..." : "Login"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="email-register"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email-register"
                name="email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password-register"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password-register"
                name="password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cognome"
                className="block text-sm font-medium text-gray-700"
              >
                Cognome
              </label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dataNascita"
                className="block text-sm font-medium text-gray-700"
              >
                Data di Nascita
              </label>
              <input
                type="date"
                id="dataNascita"
                name="dataNascita"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-red-900 text-white rounded-md cursor-pointer hover:bg-red-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Caricamento..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Authentication;
