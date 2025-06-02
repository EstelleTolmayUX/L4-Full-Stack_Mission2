console.log("🚀It's Mission 2 Time");

// ---------------- -----------------🎠BUILD PRODUCT CAROUSEL-------------------------------------------------------->
const images = [
  { src: "./Images/shes-a-bad-muffuletta.jpeg", name: "She's a Bad Muffuletta!" },
  { src: "./Images/prideful_peach.jpeg", name: "Prideful Peach" },
  { src: "./Images/suzis_pedicure_throne.jpeg", name: "Suzi's Pedicure Throne" },
  { src: "./Images/vogue_en_violet.jpeg", name: "Vogue en Violet" },
  { src: "./Images/indigo_off.jpeg", name: "Indigo off" },
  { src: "./Images/glitter.jpeg", name: "gLITter" },
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
// if at end of gallery, start from beginning again
//array has a length of 6
//last valid image is at 5
function nextImage() {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  updateGallery(); // call update gallery
}

// to change current index to the previous one
// if at beginning of gallery, THEN change to end
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateGallery(); // call update gallery
}

// change current index to selected thumbnail index
function selectThumbnail(index) {
  console.log("thumbnail btn selected", currentIndex);
  currentIndex = index;
  updateGallery(); // call updateGallery
}

// add functions to elements by adding event listeners or directly in the html
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => selectThumbnail(index));
});

// ------------------------------------💅BUILD PRODUCT GRID SECTION---------------------------------
//1. I'm using array of objects for products:
const nailProducts = [
  {
    name: "She's a Bad Muffuletta!",
    price: 16.99,
    image: "./Images/shes-a-bad-muffuletta.jpeg",
    description: "Spicy red with a glossy finish",
  },

  {
    name: "Prideful Peach",
    price: 11.49,
    image: "./Images/prideful_peach.jpeg",
    description: "Soft peachy nude for everyday glow.",
  },

  {
    name: "Suzi's Pedicure Throne",
    price: 13.99,
    image: "./Images/suzis_pedicure_throne.jpeg",
    description: "Royal purple shimmer for bold style.",
  },

  {
    name: "Vogue en Violet",
    price: 11.49,
    image: "./Images/vogue_en_violet.jpeg",
    description: "Elegant violet for classy nights.",
  },

  {
    name: "Indigo Off",
    price: 16.99,
    image: "./Images/indigo_off.jpeg",
    description: "Deep indigo that dries fast and smooth.",
  },

  {
    name: "gLITter",
    price: 11.49,
    image: "./Images/glitter.jpeg",
    description: "Soft peachy nude for everyday glow.",
  },
];
console.log("Product Array ready (confirms data is loaded):", nailProducts);

// ---------------------------------------BUILD SHOPPING BAG in reusable function----------------------------------------------
let shoppingBag = []; //empty until user clicks add-to-bag

function addToBag(product) {
  shoppingBag.push(product); //product .push()ed into array
  console.log("🛍️ Shopping Bag updated:", shoppingBag);

  const bagCount = document.querySelector(".bag-count"); //find element w class bag-count
  if (bagCount) {
    bagCount.innerText = shoppingBag.length; // (inside .bag-count) updates in real-time
  }
}
// ------------------------------------💅BUILD PRODUCT GRID SECTION---------------------------------
function renderProducts() {
  const productGrid = document.getElementById("productGrid");

  // Clear existing content to prevent duplicate elements
  productGrid.innerHTML = ""; // Still needed to clear previous content

  // Render all products using createElement
  nailProducts.forEach((product, index) => {
    // Create product card container
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Create image
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    // Create product name
    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = product.name;

    // Create price
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = product.price.toFixed(2);

    // Create Add to Bag button
    const button = document.createElement("button");
    button.className = "add-to-bag-btn";
    button.dataset.index = index;
    button.textContent = "Add to Bag";

    // Append elements to product card
    productCard.append(img, name, price, button);

    // Append product card to grid
    productGrid.append(productCard);
  });

  // Attach event listeners to all "Add to Bag" buttons
  const addToBagButtons = document.querySelectorAll(".add-to-bag-btn");
  addToBagButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      const product = nailProducts[index];
      console.log(`Clicked: ${product.name}`);
      addToBag(product);
    });
  });
}

// Call once DOM is ready
renderProducts();
