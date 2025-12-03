import ExternalLinkButton from "./ExternalLinkButton";
import image1 from "../assets/games.png";
import image2 from "../assets/games2.png";

function IndexMainSection() {
  return (
    <div className="container mx-auto max-w-7xl pt-7 pb-7">
      <div className="p-8 my-5">
        <h1 className="text-3xl font-bold text-center mb-4">
          Ti piacciono i giochi da tavolo e sei alla ricerca di un ambiente e
          persone con cui giocarli? Vieni a trovarci!
        </h1>
        <p className="text-lg text-center mb-6 opacity-90">
          Che tu sia un giocatore inesperto e alle prime armi o un veterano alla
          ricerca di nuove sfide, nel tempio ludico trovarai tante persone con
          cui condividere la tua passione.
        </p>
        <h2 className="text-2xl font-semibold text-center py-3 mx-auto w-fit">
          Ma come funziona il tempio ludico?
        </h2>
      </div>
      <div className="flex flex-row justify-between space-x-6">
        <div className="transform hover:scale-101 transition-all duration-300 flex flex-col items-center p-6 bg-red-900 text-white rounded-lg shadow-lg w-full">
          <p className="font-semibold text-xl text-center mb-2">
            Raggiungici a una delle nostre serate
          </p>
          <p className="text-center">
            Cerca la serata che fa più per te e nel giorno che ti è più comodo.
          </p>
        </div>
        <div className="transform hover:scale-101 transition-all duration-300 flex flex-col items-center p-6 bg-red-900 text-white rounded-lg shadow-lg w-full">
          <p className="font-semibold text-xl text-center mb-2">
            Scegli il gioco che preferisci
          </p>
          <p className="text-center">
            Ad ogni serata sono presenti molti giochi e a spiegarti le regole ci
            pensiamo noi!
          </p>
        </div>
        <div className="transform hover:scale-101 transition-all duration-300 flex flex-col items-center p-6 bg-red-900 text-white rounded-lg shadow-lg w-full">
          <p className="font-semibold text-xl text-center mb-2">
            Trova i tuoi compagni di gioco
          </p>
          <p className="text-center">
            Quando hai scelto il gioco, aspetta che si uniscano altri
            partecipanti oppure unisciti a un tavolo già in partenza.
          </p>
        </div>
        <div className="transform hover:scale-101 transition-all duration-300 flex flex-col items-center p-6 bg-red-900 text-white rounded-lg shadow-lg w-full">
          <p className="font-semibold text-xl text-center mb-2">
            Fai timbrare la tua tessera
          </p>
          <p className="text-center">
            Ti verrà fornita gratuitamente al primo evento a cui parteciperai!
          </p>
        </div>
      </div>
      <div className="space-y-10 mt-10">
        <div className="flex flex-row my-5 bg-yellow-te rounded-2xl shadow-md overflow-hidden">
          <img
            src={image1}
            alt="Foto di una selezione di giochi da tavolo"
            className="w-1/2 h-64 object-cover"
          />
          <div className="flex flex-col justify-center p-6 w-1/2">
            <h2 className="text-xl mb-4 text-center">
              Come vedi è piuttosto semplice, quindi che aspetti? Visita la
              nostra pagina eventi per scoprire le prossime date e i luoghi
              d'incontro più vicini a te!
            </h2>
            <div className="flex justify-center items-center">
              <ExternalLinkButton />
            </div>
          </div>
        </div>
        <div className="flex flex-row my-5 bg-yellow-te rounded-2xl shadow-md overflow-hidden">
          <img
            src={image2}
            alt="Foto di un particolare di un gioco"
            className="w-1/2 h-64 object-cover"
          />
          <div className="flex flex-col justify-center p-6 w-1/2">
            <h2 className="text-xl mb-4 text-center">
              Come vedi è piuttosto semplice, quindi che aspetti? Visita la
              nostra pagina contatti per scoprire come raggiungerci o inviarci
              una richiesta!
            </h2>
            <div className="flex justify-center items-center">
              <ExternalLinkButton label="CONTATTI" to="/contatti" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexMainSection;
