document.getElementById("calcola").addEventListener("click", function () {
  const polsoValue = document.getElementById("polso").value;

  // Converti il valore in numero per fare dei calcoli
  const polsoCirc = parseFloat(polsoValue);
  if (polsoValue === "" || isNaN(polsoValue)) {
    // Se vuoto o non valido, mostra un messaggio di errore
    document.getElementById("result").textContent =
      "Per favore inserisci un valore valido per la circonferenza del polso.";
    return; // Blocca l'esecuzione dei calcoli
  }

  //   const risultato = (polsoCirc + polsoCirc * 0.1).toFixed(2);
  const lunghezzaBracciale = polsoCirc + 3.5;
  const lunghezzaTelaio = polsoCirc + 3.5;
  const cmdicorda = 14 * polsoCirc;

  // Mostra il risultato nel paragrafo con id "result"
  document.getElementById(
    "result"
  ).textContent = `La lunghezza della corda paracord necessaria a produrre il bracciale è di: ${cmdicorda} CM, il bracciale misurerà ${lunghezzaBracciale} CM, mentre il telaio sarà fissato ad un altezza di ${lunghezzaTelaio} CM.
  
  `;
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registrato con successo:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Registrazione del Service Worker fallita:", error);
      });
  });
}
