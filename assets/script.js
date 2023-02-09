const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// declaration de la variable qui met la première slide à 0 (on commence toujours à 0 en coding)
let slideImageIndex = 0;
// declaration de la constante qui definie le nbr de slide
const slideNbr = slides.length;
// declaration de la constante qui va selectionné la fleche gauche
const leftArrow = document.querySelector(".arrow_left");
// declaration de la constante qui va selectionné la banner et la tagline
const banner = document.querySelector(".banner-img");
const title = document.querySelector(".tagline");
// ajout du eventlistener
leftArrow.addEventListener("click", function (e) {
  // ajout de prevent default pour éviter le comportement de la page (rafraichissement ou autres)
  e.preventDefault();
  console.log("vous avez cliquez sur la flèche gauche");
  /* L'opération slideImageIndex - 1 >= 0 check si slideImageIndex est supérieur ou égal à 1. 
  Si c'est le cas, slideImageIndex - 1 sera l'index de l'image précédente. 
  Si slideImageIndex est inférieur à 1, alors slideImageIndex - 1 sera inférieur à 0 
  et slideNbr - 1 sera utilisé à la place pour donner l'index de la dernière image du diaporama. */
  const prevImageIndex =
    slideImageIndex - 1 >= 0 ? slideImageIndex - 1 : slideNbr - 1;
  const prevSlide = slides[prevImageIndex];
  banner.setAttribute("src", "./assets/images/slideshow/" + prevSlide.image);
  title.innerHTML = prevSlide.tagLine;
  slideImageIndex = prevImageIndex;
  whiteDots();
});
// declaration de la constante qui va selectionné la fleche droite
const rightArrow = document.querySelector(".arrow_right");
// ajout du eventlistener
rightArrow.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("vous avez cliquez sur la flèche droite");
  // déclaration de la constante qui va definir les slides suivantes (nextimageindex egal à slide en cours + 1 tant qu'il y'a des slide et une fois arrivé au bout on repart à 0)
  const nextImageIndex =
    slideImageIndex + 1 < slides.length ? slideImageIndex + 1 : 0;
  // declaration de la const qui definie regroupe les slides et les slides suivantes
  const nextSlide = slides[nextImageIndex];
  // const qui va chercher les slides + nouvelle slide
  banner.setAttribute("src", "./assets/images/slideshow/" + nextSlide.image);
  // const qui dit que le titre = au tag des slide correspondante
  title.innerHTML = nextSlide.tagLine;
  // const qui regroupe la slide et la slide suivante
  slideImageIndex = nextImageIndex;
  // appel de la fonction
  whiteDots();
});

// declaration de la function qui va definir btn-selected sur la slide correspondante
function whiteDots() {
  // delaclaration de constante qui va chercher la class Dots
  const selectedDots = document.querySelector(".dots");
  // declaration de la variable qui va definir ce quil y'a a l'interieur des dots (let pcq ça peut se modifier)
  let selectedDotsHtmlContent = "";
  // petite boucle pour remplir chaque dots en blanc
  for (let i = 0; i < slideNbr; i++) {
    // declaration de la variable qui correspond à dot (on utlise pas le . cette fois)
    let classDot = "dot";
    // boleen si i est parfaitement = à slideimageindex alors dot (classdot) ajoute la dot_selected
    if (i === slideImageIndex) {
      classDot += " dot_selected";
    }
    // concatenation du content (ce qu'il y'a a l'interieur)
    selectedDotsHtmlContent += '<div class="' + classDot + '"></div>';
  }
  // et du coup le innerhtml de dots correspond a la concatenation de html content
  selectedDots.innerHTML = selectedDotsHtmlContent;
}
// appel de la fonction
whiteDots();
