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
  console.log(containerTissu);

optionsTissu.forEach((option) => {
  const BoutonRadioCouleur = document.createElement("input");
  BoutonRadioCouleur.type = "radio";
  BoutonRadioCouleur.value = option.couleur;
  BoutonRadioCouleur.classList.add("ColorSelector")
  console.log(BoutonRadioCouleur);

 
  containerTissu.appendChild(BoutonRadioCouleur);

});

