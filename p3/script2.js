//fetching data with api

let food = document.querySelector(".food");
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let british = document.querySelector("#british");
let reshian = document.querySelector("#reshian");
let recipe;

const fetchdata = async (area) => {
  const api =
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}
`);
  const data = await api.json();
  return data.meals;
  console.log("my api res", data.meals);
};

let showdata = async () => {
  recipe = await fetchdata("indian");
  console.log(recipe);
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

showdata();
