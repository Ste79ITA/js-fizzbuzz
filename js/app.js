// inizializza variabile con selettore nel DOM dell'elemento avente classe grid
let gridDOMElement = document.querySelector('.grid');

//Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  // inizializza la variabile con l'ordine di creare un nuovo elemento
  let boxDOMElement = document.createElement('div');

  // aggiunge la classe all' elemento creato
  boxDOMElement.classList.add('box');

  //   Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log('FizzBuzz');

    boxDOMElement.innerHTML = 'FizzBuzz';
    boxDOMElement.style.backgroundColor = '#f0466f';
    gridDOMElement.append(boxDOMElement);
    //per i multipli di 3 stampi “Fizz” al posto del numero
  } else if (i % 3 === 0) {
    // console.log('Fizz');

    // assegna la stringa all' inner html
    boxDOMElement.innerHTML = 'Fizz';

    // assegna lo stile all elemento
    boxDOMElement.style.backgroundColor = '#0bd6a1';

    // "appende" l'elemento completato all'interno dell' elemento grid, nel DOM
    gridDOMElement.append(boxDOMElement);
  }
  //   per i multipli di 5 stampi “Buzz”.
  else if (i % 5 === 0) {
    // console.log('Buzz');

    boxDOMElement.innerHTML = 'Buzz';
    boxDOMElement.style.backgroundColor = '#ffd166';
    gridDOMElement.append(boxDOMElement);
  } else {
    // console.log(i);

    boxDOMElement.classList.add('box');
    boxDOMElement.innerHTML = i;
    gridDOMElement.append(boxDOMElement);
  }
}
