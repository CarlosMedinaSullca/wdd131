myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fetuccini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Finishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ]
}

/*let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent= myInfo.favoriteFoods [0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent= myInfo.favoriteFoods [1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent= myInfo.favoriteFoods [2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent= myInfo.favoriteFoods [3];

document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);*/

// with .forEach

/*const foodsElement = document.querySelector ('#favorite-foods');
function createAndAppendFoodItem(food) {
    let favoriteFood= document. createElement('li');
    favoriteFood.textContent= food;
    foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);*/

// with .map
/*const foodsElement = document.querySelector ('#favorite-foods');
function mapFoodItem(food) {
    let favoriteFood= document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
}
// this function could also be written this way using a template literal:

function mapFoodItem(food) {
    return `<li>${food}</li>`;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);

//We need to flatten the array of strings into one big string. .join does this.

foodsElement.innerHTML = foodListElements.join('');*/

// The mamp example could be simplified as below:
/*const foodElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// We need to flatten the array of strings into one big string. .join does this.
foodListElements.innerHTML = foodListElements.join("");*/

// OR we could in fact simplify this down to one line!
/*document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
.map((food) => `<li>${food}</li>`)
.join("");*/

/*
Activity 3
What if we needed to output the contents of multiple different Arrays? Can you make what we did above more re-usable?

Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
Create a function that will take a place string and return that string embedded in some html. The place is a bit more complex. We have the location and the length. You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)
Create a function that will take a list, and a callback function to produce an HTML template. The function should transform our list by looping over it calling the template function once for each item in the list. The function should return all of the HTML strings flattened into one long string.
Call the function above once for the placesLived list and again for the favoriteFoods list. Set the innerHTML of the appropriate HTML element to the results of the function call.
*/

//reusable!
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

// requires a place string
// returns that string embedded in HTML markup

function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

// requires a place string
// returns that string embedded in HTML markup

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);

placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);


