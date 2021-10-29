const gallery = document.querySelector("#gallery");
const searchContainer = document.querySelector(".search-container");

//fetch data from server
const getData = async () => {
  const res = await fetch(`https://randomuser.me/api/?results=12`);
  return await res.json();
};
getData().then((data) => {
  let users = data.results;
  showUsers(users);
  showModalUser(users);
});

//Show Users functions
function showUsers(users) {
  users.forEach((user) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    const cardImgDiv = document.createElement("div");
    cardImgDiv.className = "card-img-container";
    const cardImg = document.createElement("img");
    cardImg.className = "card-img";
    cardImg.src = `${user.picture.medium}`;
    cardImg.alt = `${user.name.first} ${user.name.last}`;
    const cardInfoDiv = document.createElement("div");
    cardInfoDiv.className = "card-info-container";
    const name = document.createElement("h3");
    name.className = "card-name";
    name.id = "name";
    name.innerText = `${user.name.first} ${user.name.last}`;
    const emailP = document.createElement("p");
    emailP.className = "card-text";
    emailP.innerText = `${user.email}`;
    const locationP = document.createElement("p");
    locationP.className = "card-text cap";
    locationP.innerText = `${user.location.city}, ${user.location.state}`;
    // Append Child
    cardImgDiv.append(cardImg, cardInfoDiv);
    cardInfoDiv.append(name, emailP, locationP);

    cardDiv.append(cardImgDiv, cardInfoDiv);

    gallery.append(cardDiv);
  });
}

//create Search form
const form = document.createElement("form");
form.id = "form-search";
form.action = "#";
form.method = "GET";

const searchInput = document.createElement("input");
searchInput.type = "search";
searchInput.id = "search-input";
searchInput.className = "search-input";
searchInput.placeholder = "Search...";

const submitInput = document.createElement("input");
submitInput.value = `Search`;
submitInput.type = "submit";
submitInput.id = "search-submit";
submitInput.className = "search-submit";

form.append(searchInput, submitInput);
searchContainer.append(form);

// Filter the user
searchContainer.addEventListener("keyup", function (e) {
  const keyword = e.target.value.toLowerCase();
  const cardUsers = document.querySelectorAll(".card");

  for (let cardUser of cardUsers) {
    const userName = cardUser.children[1].children[0].innerText.toLowerCase();
    const userEmail = cardUser.children[1].children[1].innerText.toLowerCase();

    if (userName.includes(keyword) || userEmail.includes(keyword)) {
      cardUser.style.display = "block";
    } else {
      cardUser.style.display = "none";
    }
  }
});

document.querySelector("#form-search").addEventListener("submit", (e) => {
  e.preventDefault();
});

/*********Modal Function**********/
function showModalUser(users) {
  users.forEach((user) => {
    // Create Modal Content
    const modalContDiv = document.createElement("div");
    modalContDiv.className = "modal-container";
    //modal
    const modalDiv = document.createElement("div");
    modalDiv.className = "modal";
    //button
    const closeBtn = document.createElement("button");
    closeBtn.id = "modal-close-btn";
    closeBtn.className = "modal-close-btn";
    const strong = document.createElement("strong");
    strong.innerText = "X";
    // modal-info-container
    const modalInfoDiv = document.createElement("div");
    modalInfoDiv.className = "modal-info-container";

    const modalImg = document.createElement("img");
    modalImg.className = "modal-img";
    modalImg.src = `${user.picture.medium}`;
    modalImg.alt = `${user.name.first} ${user.name.last}`;

    const modalName = document.createElement("h3");
    modalName.className = "modal-name cap";
    modalName.id = "name";
    modalName.innerText = `${user.name.first} ${user.name.last}`;

    const modalEmailP = document.createElement("p");
    modalEmailP.className = "modal-text";
    modalEmailP.innerText = `${user.email}`;

    const modalCityP = document.createElement("p");
    modalCityP.className = "card-text cap";
    modalCityP.innerText = `${user.location.city}`;

    const hr = document.createElement("hr");

    const modalPhnP = document.createElement("p");
    modalPhnP.className = "modal-text";
    modalPhnP.innerText = `${user.cell}`;
    const modalAdrsP = document.createElement("p");
    modalAdrsP.className = "modal-text";
    modalAdrsP.innerText = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, OR ${user.location.postcode}`;

    //Append child
    modalContDiv.append(modalDiv);
    modalDiv.append(closeBtn, modalInfoDiv);
    closeBtn.append(strong);
    modalInfoDiv.append(
      modalImg,
      modalName,
      modalEmailP,
      modalCityP,
      hr,
      modalPhnP,
      modalAdrsP
    );
  });
}

// Event listeners

// const previewCards = document.querySelector(".gallery");
// console.log(previewCards);
// const modal = document.querySelector(".modal");
// const close = document.querySelector(".modal-close-btn");

// previewCards.forEach((previewCard) => {
//   previewCard.addEventListener("click", () => {
//     modal.classList.add("open");
//   });
// });

// close.addEventListener("click", () => {
//   close.classList.remove("open");
// });
