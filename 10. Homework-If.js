let a = 40;

if (a < 20) {
  console.log("Está fresco, ponete una bufanda.");
} else if (a > 20) {
  console.log("Está lindo, ponete un sombrero.");
} else {
  console.log("Con estos 20°, yo ya me meto a la pile.");
}

//***

let temp = 23;

if (temp < 20) {
  console.log("Llevar bufanda");
}
if (temp >= 20) {
  if (temp > 30) {
    console.log("Llevar sombrero.");
  } else {
    console.log("Llevar paraguas.");
  }
}
