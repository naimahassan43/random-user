const gallery = document.querySelector("#gallery");
const searchContainer = document.querySelector(".search-container");
//fetch data from server

const getData = async () => {
  const res = await fetch(`https://randomuser.me/api/?results=12`);

  return await res.json();
};
getData().then((data) => {
  let users = data.results;
  // console.log(users);
  showUsers(users);
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
