console.log("It's Mission 2 Time");

const images = [
  { src: "./Images/shes-a-bad-muffuletta.jpeg", name: "She's a Bad Muffuletta!" },
  { src: "./Images/prideful_peach.jpeg", name: "Prideful Peach" },
  { src: "./Images/suzis_pedicure_throne.jpeg", name: "Suzi's Pedicure Throne" },
  { src: "./Images/vogue_en_violet.jpeg", name: "Vogue en Violet" },
  { src: "./Images/indigo_off.jpeg", name: "Indigo off" },
  { src: "./Images/glitter.jpeg", name: "Glitter" },
];

let currentIndex = 0;

// get elements by id for selected-Image, image-name, left-arrow and right arrow
// get elements by query selector all for .thumbnail
const selectedImage = document.getElementById("selected-image"); //these methods returns 1 thing
const imageName = document.getElementById("image-name");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const thumbnails = document.querySelectorAll(".thumbnail"); //returns an array of the things that have that class name

// to update the selected image and the displayed image name
function updateGallery() {
  console.log("updating gallery");
  console.log(currentIndex);
  selectedImage.src = images[currentIndex].src;
  imageName.innerHTML = images[currentIndex].name;
}

// to change current index to the next one
// if at end of gallery, start from begining again
// call update gallery
//array has a length of 10
//last valid image is at 9
function nextImage() {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  updateGallery();
}

// to change current index to the prevous one
// if at begining of gallery, change to end
// call update gallery
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  updateGallery();
}

// change current index to selected thumbnail index
// call updateGallery
function selectThumbnail(index) {
  console.log("thumbnail btn selected", currentIndex);
  currentIndex = index;
  updateGallery();
}

// add functions to elements by adding event listeners or directly in the html
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => selectThumbnail(index));
});
