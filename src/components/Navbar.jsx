import logo from "../assets/itl_logo_tondo.png";

function Navbar() {
  return (
    <div className="flex flex-row justify-between w-screen p-4 bg-red-te">
      <div className="flex flex-row justify-between">
        <div className="hover:cursor-pointer content-center mx-3">
          <p>Home</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3">
          <p>Eventi</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3">
          <p>Chi siamo</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3">
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
        <div className="hover:cursor-pointer content-center mx-3">
          <p>Cerca</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3">
          <p>I nostri giochi</p>
        </div>
        <div className="hover:cursor-pointer content-center mx-3">Utente</div>
      </div>
    </div>
  );
}

export default Navbar;
