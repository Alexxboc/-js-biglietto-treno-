/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65. */

// Chiedere all'utente il numero di chilometri da percorrere
    const km_da_percorrere = prompt("Quanti chilometri devi percorrere?");
    console.log(`Hai scelto ${km_da_percorrere}`)

// Verica che l'utente inserisca un valore numerico
if (isNaN(km_da_percorrere)) {
    alert(`Scrivi un valore numerico`)
}
// Calcolare il prezzo del biglietto per chilometro
    const prezzo_per_km = km_da_percorrere * 0.21;
    console.log(prezzo_per_km);
// Calcoloare sconto per minorenni

// Calcolare sconto per over 65

// Comunicare prezzo finale in forma umana

