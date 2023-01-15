import { fruitNames } from "./indexApi.js";
// import {} from './myscript.js';
import { buttonGlow } from "./indexApi.js";
window.buttonGlow=buttonGlow;

function createDOMElement(DOM){
    // Create column tag
    const column = document.createElement("div");
    column.className = "col-md-4";
    //  Create card tag
    const card = document.createElement("div");
    card.className = "card mb-4 box-shadow";
    // img
    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = `images/${DOM}.png`
    img.addEventListener('mouseover', function(){
        img.style.transform= "scale(1.5)";
        console.log(true);
    });
    img.addEventListener('mouseout', function(){
        img.style.transform= "scale(1)";
        console.log(true);
    });
    
    // Create card-body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    // create paragraph 
    const paragraph = document.createElement("p")
    paragraph.className = "card-text";
    paragraph.innerHTML = `${DOM}`;
    
    //  merge tags
    // append img & paragraph to card
    card.append(img, paragraph);
    // append card to column
    column.append(card);
    document.querySelector(".row").append(column);
    // console.log(column.outerHTML);
}

function createElements(){
    for(let fruit of fruitNames){
        createDOMElement(fruit['name']);
    }
}
createElements();
// getting the search input

document.querySelector('#search').addEventListener('keyup', 
function(e){
    const keyword = e.target.value.toLowerCase();
    console.log(keyword);
    const fruitFinder = document.querySelectorAll('.col-md-4');
    for(let fruits of fruitFinder){
        let assignChildren = fruits.children;
        const fruitName = assignChildren[0].children[1].innerHTML.toLowerCase();
        if(fruitName.includes(keyword)){
            fruits.style.display = fruits;
        }
        else{
            fruits.style.display = 'none';
        }
    }
})  
