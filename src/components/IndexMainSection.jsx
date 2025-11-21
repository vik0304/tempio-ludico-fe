import ExternalLinkButton from "./ExternalLinkButton";

function IndexMainSection() {
  return (
    <div>
      <h1>
        Ti piacciono i giochi da tavolo e sei alla ricerca di un ambiente e
        persone con cui giocarli? Vieni a trovarci!
      </h1>
      <p>
        Che tu sia un giocatore inesperto e alle prime armi o un veterano alla
        ricerca di nuove sfide, nel tempio ludico trovarai tante persone con cui
        condividere la tua passione.
      </p>
      <h1>Ma come funziona il tempio ludico?</h1>
      <div className="flex flex-row justify-between">
        <div className="p-3 bg-red-900">
          <p className="text-white">
            1. Raggiungici ad una delle nostre serate.
          </p>
        </div>
        <div className="p-3 bg-red-900">
          <p className="text-white">2. Scegli il gioco che preferisci.</p>
        </div>
        <div className="p-3 bg-red-900">
          <p className="text-white">3. Trova i tuoi compagni di gioco.</p>
        </div>
        <div className="p-3 bg-red-900">
          <p className="text-white">4. Fai timbrare la tua tessera.</p>
        </div>
      </div>
      <h2>
        Come vedi è piuttosto semplice, quindi che aspetti? Visita la nostra
        pagina eventi per scoprire le prossime date e i luoghi d'incontro più
        vicini a te!
      </h2>
      <ExternalLinkButton />
    </div>
  );
}

export default IndexMainSection;
