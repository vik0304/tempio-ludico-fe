const Contatti = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-red-900 py-16 px-6 text-center text-white mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl leading-tight">
          Contattaci per unirti al divertimento!
        </h1>
        <p className="mt-6 text-xl md:text-xl text-white max-w-xl mx-auto">
          Hai domande sulle serate, sui giochi o vuoi proporre un titolo?
          Scrivici pure!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-yellow-te rounded-md p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
              Invia un messaggio
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Il tuo nome *
                </label>
                <input
                  type="text"
                  placeholder="Mario Rossi"
                  className="w-full px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none transition bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  La tua email *
                </label>
                <input
                  type="email"
                  placeholder="mario@email.com"
                  className="w-full px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none transition bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Il tuo messaggio *
                </label>
                <textarea
                  rows="6"
                  placeholder="Ciao! Vorrei sapere quando è la prossima serata con Catan..."
                  className="w-full px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none transition bg-white"
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full py-3 bg-red-900 text-white font-bold text-xl rounded-xl hover:bg-red-800 transform transition-all duration-300 shadow-xl cursor-not-allowed opacity-80"
              >
                Invia Messaggio
              </button>
            </form>
          </div>

          <div className="space-y-4 py-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-900 mb-4">
                Unisciti alla community!
              </h2>
              <p className="text-lg text-gray-700">
                Il modo più veloce per restare aggiornato è seguirci su
                Instagram e unirti al gruppo WhatsApp!
              </p>
            </div>

            {/* Card Instagram */}
            <div className="bg-yellow-te text-gray-700 p-8 rounded-md shadow-xl">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 bg-white bg-opacity-25 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Instagram</h3>
                  <p className="opacity-90">
                    Foto, reel e aggiornamenti in tempo reale
                  </p>
                </div>
              </div>
              <a
                href="https://instagram.com/iltempioludico"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 bg-white text-red-900 font-bold text-lg rounded-xl hover:bg-red-900 hover:text-white transition"
              >
                Segui @iltempioludico
              </a>
            </div>

            {/* Card WhatsApp */}
            <div className="bg-yellow-te text-gray-700 p-8 rounded-md shadow-xl">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 bg-white bg-opacity-25 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.091 1.758-.721 2.006-1.418.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.165c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .016 5.478.016 12.246c0 2.127.576 4.21 1.667 6.029l-.253 4.582 4.695-1.228a11.817 11.817 0 005.63 1.437c6.554 0 11.89-5.478 11.89-12.246S18.604.003 12.05.003" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WhatsApp</h3>
                  <p className="opacity-90">
                    Gruppo attivo per coordinare i giochi
                  </p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/TUO_LINK" // ← Sostituisci
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 bg-white text-red-900 font-bold text-lg rounded-xl hover:bg-red-900 hover:text-white transition"
              >
                Entra nel gruppo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 p-6 text-center ">
        <p className="text-gray-800 font-semibold text-lg">
          O scrivici direttamente:
        </p>
        <a
          href="mailto:iltempioludico@gmail.com"
          className="text-red-900 text-xl font-bold underline hover:text-red-700 transition"
        >
          iltempioludico@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contatti;
