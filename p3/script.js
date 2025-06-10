let food = document.querySelector(".food");
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let british = document.querySelector("#british");
let reshian = document.querySelector("#reshian");
let recipe;

const fetchdata = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();
  recipe = data.meals;

  console.log("my api res", data.meals);

  showrecepoe(recipe);
};
fetchdata("indian");

//fetching data with input by name mane

const searchrecepie = async () => {
  let input = document.querySelector("#input");

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputvalue = input.value;

      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`
      );
      const data = await api.json();
      recipe = data.meals;
      showrecepoe(recipe);
      //console.log(inputvalue);
    }
  });
};

searchrecepie();

let showrecepoe = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meal) =>
        `
    <div class="imgcontainer">
       <div>
         <img src=${meal.strMealThumb} alt="images" class="imgs"/>
       </div>
       <h5 class="title">${meal.strMeal}</h5>
    </div>
  `
    )
    .join("");
};

indian.addEventListener("click", () => {
  console.log("ckikss");
  fetchdata("indian");
});

canadian.addEventListener("click", () => {
  console.log("ckikss");
  fetchdata("canadian");
});

thai.addEventListener("click", () => {
  console.log("ckikss");
  fetchdata("thai");
});

british.addEventListener("click", () => {
  console.log("ckikss");
  fetchdata("british");
});

reshian.addEventListener("click", () => {
  console.log("ckikss");
  fetchdata("russian");
});

american.addEventListener("click", () => {
  console.log("ckikss");
  fetchdata("american");
});
