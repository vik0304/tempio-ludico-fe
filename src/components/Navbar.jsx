import logo from "../assets/itl_logo_tondo.png";

function Navbar() {
  return (
    <div className="flex flex-row justify-between min-w-full p-4 bg-red-900">
      <div className="flex flex-row justify-between">
        <div className="hover:cursor-pointer content-center mx-3 text-white">
          <p>Home</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3 text-white">
          <p>Eventi</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3 text-white">
          <p>Chi siamo</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3 text-white">
          <p>Contatti</p>
        </div>
      </div>
      <div className="hover:cursor-pointer content-center">
        <img
          src={logo}
          alt="Logo circolare del tempio ludico"
          className="h-12"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="hover:cursor-pointer content-center mx-3 text-white">
          <p>Cerca</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3 text-white">
          <p>I nostri giochi</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3 text-white">
          Utente
        </div>
      </div>
    </div>
  );
}

export default Navbar;
