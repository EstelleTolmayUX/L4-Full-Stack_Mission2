console.log("🚀It's Mission 2 Time");

// ---------------- -----------------🎠Product Carousel / Gallery  -------------------------------------------------------->
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
// call update gallery
//array has a length of 6
//last valid image is at 5
function nextImage() {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  updateGallery();
}

// to change current index to the previous one
// if at beginning of gallery, change to end

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

// ------------------------------------💅Build PRODUCT GRID SECTION---------------------------------
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

//2.------------- Render Grid Section from Array of Objects (products)-------------------
const productGrid = document.getElementById("productGrid");
console.log("Got productGrid container (target div):", productGrid);

//----------------------------Function to render the products-------------------------------
// function renderProducts() {console.log("starting to render my product cards:")
// renderProducts();}

//3. Loop over each product and insert/ build into HTML = .innerHTML
// Loop over each product and insert += each product card after whats already there as raw HTML inside the grid
// for each product (loop) in nailProducts array, using arrow function, log its name and i; index = srt @ 0
nailProducts.forEach((product, index) => {
  console.log(`Rendering product ${index + 1}:`, product);

  productGrid.innerHTML += `
  <div class="product-card">
  <img src="${product.image}" alt="${product.name}" />
  <h3 class="product-name">${product.name}</h3>
  <p class="price">$${product.price.toFixed(2)}</p>
  <button class="add-to-cart-btn" data-index="${index}">Add to Cart</button>
  </div>`;
});

//4. add event listeners to all "add-to-cart-btn"
console.log("Start looking for all the add-to-cart-btns");

// setTimeout if btns r not created in time 💬 Wait until after the browser has finished adding all the buttons, then run this part.
setTimeout(() => {
  // select all btns with class "add-to-cart-btn"
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  console.log("Found buttons", addToCartButtons.length);

  // Loop through each button
  addToCartButtons.forEach((button, index) => {
    console.log(`setting up listener for product index ${index}`);

    //👂🖱️Add a click event listener to ea btn
    button.addEventListener("click", () => {
      console.log(`🛒add to cart clicked for from array of products: ${nailProducts[index].name}`);
      //💡this is where you will later add cart logic!
    });
  });
}, 0);
