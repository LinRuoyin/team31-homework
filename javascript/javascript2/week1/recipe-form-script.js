document.querySelector("#home-page").addEventListener('click',function(){
  window.location.href = "home-page.html";
})




function addIngredient(){
const IngredientList = document.querySelector(".ingredient-list")

const addDiv = document.createElement("div")
addDiv.classList.add("ingredient-item")

const ingredientNameInput= document.createElement("input")
ingredientNameInput.type = 'text'
ingredientNameInput.classList.add("ingredient-name")
ingredientNameInput.placeholder="Ingredient"
ingredientNameInput.required = true

const amountInput = document.createElement("input")
amountInput.type = 'text'
amountInput.classList.add("ingredient-amount")
amountInput.placeholder = "Amount";
amountInput.required = true;

addDiv.appendChild(ingredientNameInput)
addDiv.appendChild(amountInput)
IngredientList.appendChild(addDiv)

}


document.querySelector(".add-ingredient-button").addEventListener('click',addIngredient)