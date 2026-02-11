//raccolta dati
const whiteLampEl = document.getElementById('off');
const btnEl = document.getElementById('btn');

//aggiungo evento per far si che al click venga sostituita l'immagine della lampadina spenta con quella accesa
btnEl.addEventListener('click', function(){
  console.log('stai cliccando');
  whiteLampEl.src = "../img/yellow_lamp.png";
})