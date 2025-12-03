import logo from "../assets/bigWhiteLogo.png";

function IndexHero() {
  return (
    <div className="bg-red-900 min-w-full flex flex-col items-center justify-center py-15 mt-15 ">
      <img src={logo} alt="Tempio Ludico logo esteso" className="w-180" />
      <h1 className="mt-5 text-2xl text-white">
        Il nostro culto? Il gioco da tavolo.
      </h1>
    </div>
  );
}

export default IndexHero;
