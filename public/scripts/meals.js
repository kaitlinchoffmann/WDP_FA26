fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
.then(response => response.json())
.then(data => {
  let mealSection = document.getElementById("meals")
  console.log(data)     
  let mealNames = data.meals.filter(meal => meal.strMeal.includes("Apple"))
                            .map(meal => meal.strMeal)
  
   mealNames.forEach(mealName => {
        let li = document.createElement("li")
        li.innerText = mealName 
        mealSection.appendChild(li)
        // mealSection.innerHTML += `
        //     <li>${mealName}</li>
        // ` 
   })           
})

/*
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
.then(response => response.json())
.then(data => {
    console.log(data.meals[0].strMeal)
    let mealSection = document.getElementById("meals")
    mealSection.innerText = data.meals[0].strMeal
})
.catch(error => console.log(error))
*/

