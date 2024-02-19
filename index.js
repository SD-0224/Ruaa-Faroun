// let btn = document.getElementById("darkmode-btn");
// btn.onclick(changecolor);

let Data = [];
// deal with json
async function getData() {
  let res = await fetch("topics.json");
  Data = await res.json();
  console.log(Data[0].image);
  showData();
}
function goToCard(id){
  let curCourse = [];
  console.log("Hello");
  for (let i = 0; i < Data.length; i++) {
    if(Data[i].id === id){
      curCourse = Data[i];
    }
}

  let courseDet = document.createElement("section");
  courseDet.innerHTML = `<>`


}



function showData() {
  let cards = document.getElementById("cards");
  for (let i = 0; i < Data.length; i++) {
    let card = document.createElement("div");
    card.innerHTML = ` 
    <div class="img">
      <img src="Logos/${Data[i].image}" alt="html pic" onclick="goToCard(${Data[i].id})"/>
    </div>
    <div class="info">

      <p class="description">${Data[i].category}</p>
      <h6>${Data[i].topic}</h6>
      <div class="rating">
      <!-- filled -->
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <!-- half filled -->
      <ion-icon name="star-half-outline"></ion-icon>
      <!-- empty star -->
      <ion-icon name="star-outline"></ion-icon>

      </div>
      <p class="author-name">Author: ${Data[i].name}</p>
    </div>`;
    card.classList.add("card");
   
    cards.appendChild(card);
  }
}

function changecolor() {
  console.log("in");
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.addEventListener("load", getData());

document.getElementsByClassName("card").forEach(card => {
  console.log("hello");
    card.addEventListener("onclick", goToCard(0))
});