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
const containerPoche = document.getElementById("optionPoche");
const containerTexte = document.getElementById("textColorOptions");
const totalPrice = document.querySelector(".price");
let prixTissu = 0;
let prixPoche = 0;
let prixTexte = 0;
let texteTissu = document.getElementById("displayTissu");
let textePoche = document.getElementById("displayPoche");
let imageTissu = document.getElementById("optionTissuImage");
let imagePoche = document.getElementById("optionPocheImage");
const textTablier = document.getElementById("customText");
const TextePerso = document.querySelector(".textePerso");

optionsTissu.forEach((option) => {
  const BoutonCouleur = document.createElement("div");
  BoutonCouleur.id = `tissu-${option.couleur}`;
  BoutonCouleur.classList.add("ColorRound", "tissu");
  BoutonCouleur.style.backgroundColor = option.code;
  if (option.couleur === selectedTissu) {
    BoutonCouleur.classList.add("selectedColor");
    texteTissu.textContent = option.couleur;
    prixTissu = option.price;
    imageTissu.src = option.image;
    updateTotalPrice();
  }
  BoutonCouleur.addEventListener("click", () => {
    document.querySelectorAll(".tissu").forEach((button) => {
      button.classList.remove("selectedColor");
      texteTissu.textContent = option.couleur;
    });
    BoutonCouleur.classList.add("selectedColor");
    prixTissu = option.price;
    imageTissu.src = option.image;

    updateTotalPrice();
  });

  containerTissu.appendChild(BoutonCouleur);
});

optionsPoche.forEach((option) => {
  const BoutonCouleur = document.createElement("div");
  BoutonCouleur.id = `poche${option.couleur}`;
  BoutonCouleur.classList.add("ColorRound", "poche");
  BoutonCouleur.style.backgroundColor = option.code;
  if (option.couleur === selectedPoche) {
    BoutonCouleur.classList.add("selectedColor");
    textePoche.textContent = option.couleur;
    prixPoche = option.price;
    imagePoche.src = option.image;
    updateTotalPrice();
  }
  BoutonCouleur.addEventListener("click", () => {
    document.querySelectorAll(".poche").forEach((button) => {
      button.classList.remove("selectedColor");
      textePoche.textContent = option.couleur;
    });
    BoutonCouleur.classList.add("selectedColor");
    prixPoche = option.price;
    imagePoche.src = option.image;
    updateTotalPrice();
  });

  containerPoche.appendChild(BoutonCouleur);
});
couleurText.forEach((option) => {
  const BoutonCouleurText = document.createElement("div");
  BoutonCouleurText.id = `texte${option.couleur}`;
  BoutonCouleurText.classList.add("ColorRound", "texte");
  BoutonCouleurText.style.backgroundColor = option.code;
  if (option.couleur === selectedTextColor) {
    BoutonCouleurText.classList.add("selectedColor");
  }

  BoutonCouleurText.addEventListener("click", () => {
    document.querySelectorAll(".texte").forEach((button) => {
      button.classList.remove("selectedColor");
    });
    BoutonCouleurText.classList.add("selectedColor");
  });
  textTablier.addEventListener("input", () => {
    customText = textTablier.value;
    TextePerso.textContent = customText;
    const texteSansEspaces = customText.replace(/\s+/g, '');
    prixTexte = texteSansEspaces.length * prixLettre;
    updateTotalPrice();
  });

  containerTexte.appendChild(BoutonCouleurText);
});

function updateTotalPrice() {
  const total = prixTissu + prixPoche + prixTexte;
  totalPrice.textContent = total.toFixed(2) + "€";
}
