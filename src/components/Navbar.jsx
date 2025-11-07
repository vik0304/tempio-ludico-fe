import logo from "../assets/itl_logo_tondo.png";

function Navbar() {
  return (
    <div className="flex flex-row justify-around w-screen p-4 bg-red-te">
      <div className="hover:cursor-pointer content-center">
        <p>Home</p>
      </div>
      <div className="hover:cursor-pointer content-center">
        <p>Eventi</p>
      </div>
      <div className="hover:cursor-pointer content-center">
        <p>Chi siamo</p>
      </div>
      <div className="hover:cursor-pointer content-center">
        <p>Contatti</p>
      </div>
      <div className="hover:cursor-pointer content-center">
        <img
          src={logo}
          alt="Logo circolare del tempio ludico"
          className="h-12"
        />
      </div>
      <div className="hover:cursor-pointer content-center">
        <p>Cerca</p>
      </div>
      <div className="hover:cursor-pointer content-center">
        <p>I nostri giochi</p>
      </div>
      <div className="hover:cursor-pointer content-center">Utente</div>
    </div>
  );
}

export default Navbar;
