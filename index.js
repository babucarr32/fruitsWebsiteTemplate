import { fruitNames } from "./indexApi.js";

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
        // console.log(fruit['name']);
        createDOMElement(fruit['name']);
    }
}
createElements();