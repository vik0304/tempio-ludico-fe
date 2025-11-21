import logo from "../assets/itl_logo_tondo.png";

function Footer() {
  const time = new Date().getFullYear();

  return (
    <div className="pt-5 mt-5 flex flex-row justify-around border-t border-solid border-red-te ">
      <div>
        <img src={logo} alt="Logo tondo tempio ludico" className="w-35" />
      </div>
      <div className="flex flex-col items-center">
        <h1>Tempio Ludico &copy; {time}</h1>
        <p>Contatti:</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>Icone social</p>
      </div>
    </div>
  );
}

export default Footer;
