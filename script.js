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

//*Fix: Add checks (if) before adding event listeners:
if (leftArrow && rightArrow && selectedImage && imageName) {
  leftArrow.addEventListener("click", prevImage); // add functions to elements by adding event listeners or directly in the html
  rightArrow.addEventListener("click", nextImage);
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => selectThumbnail(index));
  });
  //*After event listeners for arrows and thumbnails call updateGallery
  updateGallery();
}
// ------------------------------------💅BUILD PRODUCT GRID SECTION---------------------------------//
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

// ------------------------------------BUILD SHOPPING BAG in reusable function----------------------------------//
let shoppingBag = []; //empty until user clicks add-to-bag

function addToBag(product) {
  shoppingBag.push(product); //product .push()ed into array
  console.log("🛍️ Shopping Bag updated:", shoppingBag);

  const bagCount = document.querySelector(".bag-count"); //*querySelector: find element w class bag-count
  if (bagCount) {
    bagCount.innerText = shoppingBag.length; // (inside .bag-count) updates in real-time
  }
}
// ------------------------------------💅BUILD PRODUCT GRID SECTION WITH PRODUCT CARDS ------------------------------------//
function renderProducts() {
  const productGrid = document.getElementById("productGrid"); //*getElementById: find the grid container on the page where all your product cards will go.
  if (!productGrid) return; // RUN THIS CHECK
  // Clear existing content to prevent duplicate elements
  productGrid.innerHTML = ""; // Still needed to clear previous content

  // Render all products using createElement
  // 🔹Loop over my nailProducts array using .forEach()
  // product is each item (an object), and index is its position (0, 1, 2...)
  nailProducts.forEach((product, index) => {
    // Create product card container using the DOM
    const productCard = document.createElement("div"); //Create a <div> element
    productCard.className = "product-card"; // Give it the class product-card so it can be styled with CSS

    // Create image
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    // Create product name
    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = product.name; //textContent Sets the visible text inside a tag

    // Create price
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = product.price.toFixed(2); //textContent Sets the visible text inside a tag

    // Create Add to Bag button
    const button = document.createElement("button");
    button.className = "add-to-bag-btn";
    button.dataset.index = index;
    button.textContent = "Add to Bag"; //textContent Sets the visible text inside a tag

    // Append elements to product card; meaning add all the elements (img, name, price, button) inside the product card
    productCard.append(img, name, price, button);

    // Append product card to grid;meaning add the entire productCard to the main grid on the page.
    productGrid.append(productCard);
  });

  // Attach event listeners to all "Add to Bag" buttons
  const addToBagButtons = document.querySelectorAll(".add-to-bag-btn");

  addToBagButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      //* Add a click event listener

      const index = event.target.dataset.index; // When clicked, read the data-index (which tells you which product it is)
      const product = nailProducts[index]; //Use that index to get the right product from nailProducts array

      console.log(`Clicked: ${product.name}`);

      addToBag(product); // Call my addToBag() function to handle the logic
    });
  });
}

// Call function right away so the grid loads when the page opens
renderProducts();

//-----------------------------------------------HOMEPAGE TRENDING PRODUCTS-----------------------------------------------------------------------------------------------------------------------------------------
// innerHTML Example (Trending Products):
const trendingProducts = [
  {
    name: "Supercute Color",
    price: 12.99,
    image: "./Images/supercute_color_trending1.jpeg",
    description: `A semi-sheer lavender shimmer gel nail polish that’s cuteness overload.`,
  },

  {
    name: "Supercute Bows",
    price: 10.99,
    image: "./Images/supercute-bows_trending2.jpeg",
    description: `Flex your linework with this bow-tiful gel design..`,
  },

  {
    name: "Within Peach",
    price: 16.99,
    image: "./Images/within_peach_trending3.jpeg",
    description: `A ripe orange nail polish with a juicy shine. Isn't it a peach?`,
  },
];

//Render trending section using innerHTML
function renderTrendingProducts() {
  const trendingGrid = document.getElementById("trendingGrid");
  if (!trendingGrid) return; //wrap function call in a check bcz there is no <div id="trendingGrid"> in shop.html. so throwing errors

  trendingGrid.innerHTML = ""; // clear before re-render

  trendingProducts.forEach((product) => {
    trendingGrid.innerHTML += ` 
    <div class="product-card">
    <img src="${product.image}" alt="${product.name}" />
        <h3 class="product-name">${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p class="description">${product.description}</p>
      </div>
    `;
  });
}

//call function
renderTrendingProducts();
