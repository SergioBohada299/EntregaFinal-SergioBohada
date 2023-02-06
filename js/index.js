const nombre = JSON.parse(localStorage.getItem("nombre"));
console.log(nombre);
const cultivoVal = JSON.parse(localStorage.getItem("cultivo"));
console.log(cultivoVal);
const hc = JSON.parse(localStorage.getItem("hc"));
console.log(hc);

/* Acceder a base de datos de cultivo, asignar cultivo segun lo dado en localStorage - Buscar cultivo correcto*/
let cult;
async function getCult() {
  const res = await fetch("../json/cultivos.json");
  cult = await res.json();
  let cultObj = cult.find((item) => item.cultivo === cultivoVal);
  console.log(cultObj);

  const cultName = document.createElement("p");
  let cultNameTxt = document.createTextNode("Cultivo escogido: " + cultObj.cultivo);
  cultName.appendChild(cultNameTxt);
  let divRes = document.getElementById("response-div");
  divRes.appendChild(cultName);

  const cultDes = document.createElement("p");
  let cultDesTxt = document.createTextNode("Descripción del cultivo: " + cultObj.des);
  cultDes.appendChild(cultDesTxt);
  divRes.appendChild(cultDes);

  const cultDen = document.createElement("p");
  let cultDenTxt = document.createTextNode("Toneladas posibles: " + calHec(cultObj));
  cultDen.appendChild(cultDenTxt);
  divRes.appendChild(cultDen);
}

getCult();

console.log(cult);

/* Función para calcular hectareas de cultivo */

function calHec(cultivo) {
  let res;
  return (res = hc * cultivo.densidad);
}

/* Bienvenida */

const bn = document.createElement("p");
bn.classList.add("bn-text");
let bnText = document.createTextNode("Bienvenido: " + nombre);
bn.appendChild(bnText);
let divBn = document.getElementById("bienvenida");
divBn.appendChild(bn);
