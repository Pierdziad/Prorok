
const tekst = ['<b> -Pani Susan Hickinbottom, 62 lata:</b>"A spierdalaj dzieciaku przecież zakupy niosę."<br><b>-Pan Michelle Lovemore, 28 lat:</b> "Nie wiem, jednak wiem coś innego, mój sąsiad jest wilkołakiem."<br><b>-Pan Philip Szczesniak, 34 lata:</b> "Chcę mieć duży dom, pełen cudzych żon, słyszysz? No nic, cały dom w marmurze, cały dom w marmurze."', '<b>-Pani Alex River Pond, lat 41:</b>"Ja do tego pierdolnika już dzieci nie wyślę!"<br><b>-Pan A.Z. Fell, 51 lat:</b>"Wielce zatrważająca sprawa, nie wiem co o tym myśleć. To naprawdę wielki cud że nikomu nic się nie stało."<br><b>-Pan Gregory Brown (nietrzeźwy), lat 95:</b>"Auazada madai rezets lasyduz, ping pong, lippy tappy too taa"', 'example 4'];
let counter = 0;
const guz1 ='<div id="pupcik"><input onclick="guzik2()" type="image" class="img_prawo" src="wypdyr.png" width="100%" height="100%"/></div>'
const guz2 ='<div id="pupcik"><input onclick="guzik1()" type="image" class="gif_prawo" src="szablon_1.gif" width="100%" height="100%"/></div>'
setInterval(zmiana, 30000);

function zmiana() {
  document.getElementById("dupa").setAttribute("class", "tekst-fade");

  setTimeout(() => 
    {document.getElementById("dupa").innerHTML = tekst[counter];
    document.getElementById("dupa").setAttribute("class", "tekst-show");},1000)

  counter++;
  if (counter >= tekst.length) {
    counter = 0;
  }
}
function guzik1(){
  document.getElementById("pupcik").innerHTML = guz1;
}
function guzik2(){
  document.getElementById("pupcik").innerHTML = guz2;
}