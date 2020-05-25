console.log("Hallo, console?");

//SLIDE4
//De functie die de juiste info toont wanneer er op de buttons gedrukt wordt

let buttons=document.getElementsByTagName("button");
let teller = 0;
while (teller<buttons.length) {
  buttons[teller].addEventListener("click", toonInfoGroepen);
  teller++;
}

//Voor als de slides wisselen
let infoGroepen = document.getElementById("infogroepen");

function toonInfoGroepen(){
  console.log("toonInfoGroepen werkt!");
  let dataInfo = this.getAttribute("data-info");
  infoGroepen.innerHTML=dataInfo;
  //De kleuren voor de paragraaf
  if (this.innerHTML==="Ribbels") {
    infoGroepen.style.backgroundColor="purple";
    infoGroepen.style.color="white";
  } else if (this.innerHTML==="Speelclub") {
    infoGroepen.style.backgroundColor="yellow";
    infoGroepen.style.color="black";
  } else if (this.innerHTML==="Kwiks") {
    infoGroepen.style.backgroundColor="green";
    infoGroepen.style.color="white";
  } else if (this.innerHTML==="Tippers") {
    infoGroepen.style.backgroundColor="red";
    infoGroepen.style.color="white";
  } else if (this.innerHTML==="Tiptiens") {
    infoGroepen.style.backgroundColor="blue";
    infoGroepen.style.color="white";
  } else if (this.innerHTML==="Aspiranten") {
    infoGroepen.style.backgroundColor="orange";
    infoGroepen.style.color="black";
  } else if (this.innerHMTL!="Ribbels" && this.innerHMTL!="Speelclub" && this.innerHMTL!="Kwiks" && this.innerHMTL!="Tippers" && this.innerHMTL!="Tiptiens" && this.innerHMTL!="Aspiranten") {
    infoGroepen.innerHTML="Druk op de groepen voor meer info!";
    infoGroepen.style.backgroundColor="white";
    infoGroepen.style.color="black";
  }
}
