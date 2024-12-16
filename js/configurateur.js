const optionsTissu = [
  {
    couleur: "Jaune",
    code: "#e2d047",
    image: "./images/option-1-jaune.png",
    price: 12.3,
  },
  {
    couleur: "Orange",
    code: "#f1722f",
    image: "./images/option-1-orange.png",
    price: 12.0,
  },
  {
    couleur: "Violet",
    code: "#bd3ad8",
    image: "./images/option-1-violet.png",
    price: 12.1,
  },
];
const optionsPoche = [
  {
    couleur: "Bleu",
    code: "#11119e",
    image: "./images/option-2-bleu.png",
    price: 8.3,
  },
  {
    couleur: "Fuchsia",
    code: "#991157",
    image: "./images/option-2-fuchsia.png",
    price: 8.5,
  },
  {
    couleur: "Rouge",
    code: "#d31431",
    image: "./images/option-2-rouge.png",
    price: 8.1,
  },
  {
    couleur: "vert",
    code: "#a1cc16",
    image: "./images/option-2-vert.png",
    price: 8.75,
  },
];
const couleurText = [
  { couleur: "Blanc", code: "#FFFFFF" },
  { couleur: "Noir", code: "#000000" },
  { couleur: "Bleu", code: "#11119e" },
  { couleur: "Fuchsia", code: "#991157" },
  { couleur: "Rouge", code: "#d31431" },
  { couleur: "vert", code: "#a1cc16" },
  { couleur: "Jaune", code: "#e2d047" },
  { couleur: "Orange", code: "#f1722f" },
];
let selectedTissu = "Violet";
let selectedPoche = "Rouge";
let customText = "Votre texte ici";
let selectedTextColor = "Noir";
let textOption = true;
const prixLettre = 1.8;

window.addEventListener("load", () => {});

const containerTissu = document.getElementById("tissu");
containerTissu.classList.add("ColorSelector");
const containerPoche = document.getElementById("optionPoche");
containerPoche.classList.add("ColorSelector");
const containerTexte = document.getElementById("textColorOption");

optionsTissu.forEach((option) => {
  const BoutonRadioCouleur = document.createElement("input");
  BoutonRadioCouleur.type = "radio";
  BoutonRadioCouleur.name = "tissu";
  BoutonRadioCouleur.value = option.couleur;
  BoutonRadioCouleur.id = `tissu-${option.couleur}`;
  BoutonRadioCouleur.classList.add("ColorRound");
  console.log(BoutonRadioCouleur);

  const label = document.createElement("label");
  label.style.backgroundColor = optionsTissu.image ;
  console.log(label);

  containerTissu.appendChild(BoutonRadioCouleur);
  containerTissu.appendChild(label);
});

// optionsPoche.forEach((option) => {
//   const BoutonRadioCouleurPoche = document.createElement("input");
//   BoutonRadioCouleurPoche.type = "radio";
//   BoutonRadioCouleurPoche.name = "couleurPoche";
//   BoutonRadioCouleurPoche.value = option.couleur;
//   BoutonRadioCouleurPoche.id = `couleurPoche-${option.couleur}`;
//   BoutonRadioCouleurPoche.classList.add("ColorRound");
//   const label = document.createElement("label");
//   label.htmlFor = `poche-${option.couleur}`;
//   label.style.display = "inline-block";
//   label.style.width = "40px";
//   label.style.height = "40px";
//   label.style.borderRadius = "50%"; // Cercle
//   label.style.backgroundColor = option.code;
//   label.style.margin = "10px";
//   label.style.cursor = "pointer";
//   label.style.border = "2px solid #7c7c7c";

//   containerPoche.appendChild(BoutonRadioCouleurPoche);
//   containerPoche.appendChild(label);
// });


// couleurText.forEach((option) => {
//   const BoutonRadioCouleurTexte = document.createElement("input");
//   BoutonRadioCouleurTexte.type = "radio";
//   BoutonRadioCouleurTexte.name = "couleurPoche";
//   BoutonRadioCouleurTexte.value = option.couleur;
//   BoutonRadioCouleurTexte.id = `couleurTexte-${option.couleur}`;
//   BoutonRadioCouleurTexte.classList.add("ColorRound");
//   const label = document.createElement("label");
//   label.htmlFor = `tissu-${option.couleur}`;
//   label.style.display = "inline-block";
//   label.style.width = "40px";
//   label.style.height = "40px";
//   label.style.borderRadius = "50%"; // Cercle
//   label.style.backgroundColor = option.code;
//   label.style.margin = "10px";
//   label.style.cursor = "pointer";
//   label.style.border = "2px solid #7c7c7c";

//   containerTexte.appendChild(BoutonRadioCouleurTexte);
//   containerTexte.appendChild(label);
// });
