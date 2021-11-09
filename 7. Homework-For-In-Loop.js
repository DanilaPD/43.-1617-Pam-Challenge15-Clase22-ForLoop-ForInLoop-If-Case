let animales = {
  África: "avestruz",
  América: "mapache",
  Oceanía: "koala",
  Europa: "jabalí",
  Asia: "rinoceronte",
};

for (const animal in animales) {
  console.log(`El ${animales[animal]} vive en ${animal}.`);
}
