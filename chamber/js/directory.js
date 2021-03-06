
const requestURL = "https://TheDustinBaird.github.io/wdd230/chamber/data.json"
const cards = document.querySelector('div.cards');
const listButton = document.querySelector("#listbtn");
const cardButton = document.querySelector("#cardbtn");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
  let card = document.createElement('section');


  let image = document.createElement('img');
  image.src = business.imgfile;
  image.setAttribute('alt', business.name);
  
  let h2 = document.createElement('h2');
  h2.textContent = business.name;
 
  let address = document.createElement('p');
  address.textContent = business.address;
  
  let phone = document.createElement('p');
  phone.textContent = business.phone;
  
  let website = document.createElement('p');
  website.textContent = business.website;
  
  card.appendChild(h2)
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  cards.appendChild(card);

}

listButton.addEventListener("click", ()=> {
    cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "card-view")
});