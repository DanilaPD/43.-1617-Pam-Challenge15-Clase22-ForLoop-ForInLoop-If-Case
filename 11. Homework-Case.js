const humedad = 80;

switch (true) {
  case humedad < 50:
    console.log(
      "Con menos de 50% de humedad, el ambiente está bastante lindo."
    );
    break;
  case humedad >= 50 && humedad < 60:
    console.log("Hay entre 50% y 60% de humedad, el clima está ideal.");
    break;
  case humedad >= 60 && humedad < 70:
    console.log("Hay entre 60% y 70% de humedad, no está tan mal.");
    break;
  case humedad >= 70 && humedad <= 80:
    console.log(
      "Hay entre un 70% y 80% de humedad, está pesadísimo y mi pelo lo sabe. Y además les cuento que aparte se re va a largar a llover."
    );
    break;
  default:
    console.log("Yo por acá no paso.");
    break;
}
