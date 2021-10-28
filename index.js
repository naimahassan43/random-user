const gallery = document.querySelector("#gallery");
const searchContainer = document.querySelector(".search-container");
//fetch data from server

const getData = async () => {
  const res = await fetch(`https://randomuser.me/api/?results=12`);

  return await res.json();
};
getData().then((data) => {
  let users = data.results;
  console.log(users);
});
