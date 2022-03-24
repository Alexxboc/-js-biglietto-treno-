/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65. */

// Chiedere all'utente il numero di chilometri da percorrere
    const km_da_percorrere = parseInt(prompt("Quanti chilometri devi percorrere?"));
    console.log(`Hai scelto di percorrere ${km_da_percorrere} km`)

// Verica che l'utente inserisca un valore numerico

    if (isNaN(km_da_percorrere)) {
    alert(`Scrivi un valore numerico`)
}

// Calcolare il prezzo del biglietto per chilometro

    const prezzo_per_km = km_da_percorrere * 0.21;
    console.log(prezzo_per_km);

// Chiedere l'età all'utente
    const age = parseInt(prompt(`Quanti anni hai?`));
    console.log(`La tua età è di ${age} anni`);

// Verifica che l'utente inserisca un valore numerico
    if (isNaN(age)) {
        alert(`Scrivi un valore numerico`)
    }

// Trasformare gli sconti da valori percentuali a valori decimali

    const sconto_under = 0.2;
    const sconto_over = 0.4;

// Calcoloare prezzo finale 

    if (age < 18) {
        var prezzo_finale = prezzo_per_km - (prezzo_per_km * sconto_under);
        
    } else if (age >= 65) {
        var prezzo_finale = prezzo_per_km - (prezzo_per_km * sconto_over);
        
    } else {
        var prezzo_finale = prezzo_per_km;
    }

// Arrotonda il prezzo finale con due cifre decimali
    
   var arrotonda_prezzo_finale = prezzo_finale.toFixed(2);

       
// Comunica il prezzo finale
    
    console.log(`Il prezzo del tuo biglietto è di ${arrotonda_prezzo_finale} €`)

    

// Calcolare sconto per over 65

// Comunicare prezzo finale in forma umana

