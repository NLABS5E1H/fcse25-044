//index scripts//

/*vvv hamburger menu vv */
const navEl = document.querySelector("nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
 navEl.classList.toggle("nav--open");
 hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", () => {
 navEl.classList.remove("nav--open");
 hamburgerEl.classList.remove("hamburger--open");
});
/*^^^ hamburger menu ^^^*/

/*vvv slideshow vvv*/

//OLD SLIDE SHOW JS UPDATED TO CHANGE BACKGROUND COLOUR AND LINK OTHER PAGES
/*let slideshowArr = [
    "key_art/banner_flt.png",
    "key_art/reaper.png",
    "key_art/redcon.png",
    "key_art/ritual.png",
];

let slideshowContent = document.getElementById("_content-img");
let currentSlideIndex = 0;
let isPaused = false;

slideshowContent.addEventListener("mouseenter", () => isPaused = true);
slideshowContent.addEventListener("mouseleave", () => isPaused = false);

//insures this function is called upon loading the page.
createSlideshow();

//function that checks for the mouse-over condition and either continues the slideshow or pauses it.
function createSlideshow() {
 if(!isPaused) {
   if(currentSlideIndex >= slideshowArr.length) {
    currentSlideIndex = 0;
 }

 slideshowContent.src = slideshowArr[currentSlideIndex];
  currentSlideIndex++;
 }
 setTimeout(function() {
    createSlideshow();
 }, 2500);
}*/


const slideshowArr = [
    {
        image: "key_art/banner_flt.png",
        link: "flyingtank.html",
        color: "linear-gradient(90deg, #FF1B6B, #45CAFF)"
    },

    {
        image: "key_art/reaper.png",
        link: "reaper.html",
        color: "linear-gradient(to right, #141e30, #243b55)"
    },

    {
        image: "key_art/redcon.png",
        link: "redcon.html",
        color: "linear-gradient(90deg, hsla(192, 20%, 49%, 1) 0%, hsla(23, 91%, 54%, 1) 100%)"
    },

    {
        image: "key_art/ritual.png",
        link: "ritual.html",
        color: "linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)"
    }
];

const slideshowContent =
    document.getElementById("_content-img");
const slideshowLink =
    document.getElementById("slide-link");
let currentSlideIndex = 0;

let isPaused = false;

//calls function on load

updateSlide();

/* ckecks for mouse-over conditions and pauses or resumes based on that */
slideshowContent.addEventListener("mouseenter", () => {
    isPaused = true;
    document.body.style.background =
        slideshowArr[currentSlideIndex].color;
});

slideshowContent.addEventListener("mouseleave", () => {
    isPaused = false;
    document.body.style.background = "";
});

/* checks pause condition, increments index if false and equates to 0 if true */

function createSlideshow() {
    if (!isPaused) {
        currentSlideIndex++;

        if (currentSlideIndex >= slideshowArr.length) {
            currentSlideIndex = 0;
        }

        updateSlide();
    }

    setTimeout(createSlideshow, 2500);
}

//updates the current slide

function updateSlide() {
    slideshowContent.src =
        slideshowArr[currentSlideIndex].image;

    slideshowLink.href =
        slideshowArr[currentSlideIndex].link;
}

//insures this function is called upon loading the page.
createSlideshow();

/*^^^ slideshow ^^^*/

/*vvv news article vvv*/
document.getElementById("article1")
.addEventListener("click", () => {

    window.location.href = "news.html";

});
/*^^^ news article ^^^*/

