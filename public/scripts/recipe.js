// let num = 5
// const userName = "Billy"

// console.log(userName + " is " + num + " years old")
// console.log(`${userName} is ${num} years old`)

// 1. Let's create a Recipe object literal with a name, preptime, and 
// true/false on if it's vegetarian
const recipe = {
    recipeName: "Banana Bread",
    preptime: 60,
    vegetarian: true
}
// recipe.preptime = 50
// console.log(recipe.preptime)

// recipe.description = "Yummy bread!"
// console.log(recipe)

// Below, is an array of recipe object literals. 
// Normally, we would get this from a database:
const recipes = [
    {
        name: "Chicken Alfredo",
        prepTime: 40,
        vegetarian: false
    },
    {
        name: "Vegetable Stir Fry",
        prepTime: 20,
        vegetarian: true
    },
    {
        name: "Grilled Salmon",
        prepTime: 35,
        vegetarian: false
    },
    {
        name: "Caprese Sandwich",
        prepTime: 10,
        vegetarian: true
    },
    {
        name: "Chicken Tacos",
        prepTime: 25,
        vegetarian: false
    }
];

// console.log(recipes);
// 2. How can I print out the second object literal above?
console.log(recipes[1])

// 3. How can I print out the name of the second object literal above?
console.log(recipes[1].name)

// 4. How can I change the name of the third object literal to Fried Salmon?
recipes[2].name = "Fried Salmon"
console.log(recipes[2])

// 5. What if we only want an array containing the names of the recipes?
let recipeNames = recipes.map(recipe => recipe.name)
console.log(recipeNames)

// 6. What if someone only has 30 minutes to cook dinner?
let quickRecipes = recipes.filter(recipe => recipe.prepTime <= 30)
console.log(quickRecipes)

// 7. How can we combine both?
let updatedQuickRecipes = recipes.filter(recipe => recipe.prepTime <= 30)
                                 .map(recipe => recipe.name)
console.log(updatedQuickRecipes)                                 


