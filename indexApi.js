export const fruitNames =[
    {
        "name": "Apple"
    },
    {
        "name": "Apricot"
    },
    {
        "name": "Avocado"
    },
    {
        "name": "Banana"
    },
    {
        "name": "currant"
    },
    {
        "name": "Blackberry"
    },
    {
        "name": "Blueberry"
    },
    {
        "name": "Carambola"
    },
    {
        "name": "apple"
    },
    {
        "name": "Cherry"
    },
    {
        "name": "Cloudberry"
    },
    {
        "name": "Coconut"
    },
    {
        "name": "Cranberry"
    },
    {
        "name": "apple"
    },
    {
        "name": "Damson"
    },
    {
        "name": "Dates"
    },
    {
        "name": "Dragonfruit"
    },
    {
        "name": "Elderberry"
    },
    {
        "name": "Feijoa"
    },
    {
        "name": "Fig"
    },
    {
        "name": "berry"
    },
    {
        "name": "Gooseberry"
    },
    {
        "name": "Grapefruit"
    },
    {
        "name": "Grapes"
    },
    {
        "name": "Grewia"
    },
    {
        "name": "Guava"
    },
    {
        "name": "Hanepoot"
    },
    {
        "name": "Huckleberry"
    },
    {
        "name": "Jackfruit"
    },
    {
        "name": "Jamun"
    },
    {
        "name": "Plum"
    },
    {
        "name": "Jicama"
    },
    {
        "name": "Jujube"
    },
    {
        "name": "kiwano"
    },
    {
        "name": "Kiwi"
    },
    {
        "name": "Lemon"
    },
    {
        "name": "Lime"
    },
    {
        "name": "Longan"
    },
    {
        "name": "Loquat"
    },
    {
        "name": "Lychee"
    },
    {
        "name": "apple"
    },
    {
        "name": "Mango"
    },
    {
        "name": "Melon"
    },
    {
        "name": "fruit"
    },
    {
        "name": "Mulberry"
    },
    {
        "name": "MuskMelon"
    },
    {
        "name": "Nance"
    },
    {
        "name": "Olive"
    },
    {
        "name": "Orange"
    },
    {
        "name": "fruit"
    },
    {
        "name": "Papaya"
    },
    {
        "name": "fruit"
    },
    {
        "name": "Peach"
    },
    {
        "name": "Pear"
    },
    {
        "name": "Persimmon"
    },
    {
        "name": "Pineapple"
    },
    {
        "name": "Plum"
    },
    {
        "name": "Pomegranate"
    },
    {
        "name": "pear"
    },
    {
        "name": "Pumpkin"
    },
    {
        "name": "Quince"
    },
    {
        "name": "Raspberry"
    },
    {
        "name": "currant"
    },
    {
        "name": "Sapodilla"
    },
    {
        "name": "Satsuma"
    },
    {
        "name": "Shaddock"
    },
    {
        "name": "Soursop"
    },
    {
        "name": "cherry"
    },
    {
        "name": "Strawberry"
    },
    {
        "name": "Sugarcane"
    },
    {
        "name": "cherry"
    },
    {
        "name": "lemon"
    },
    {
        "name": "Tamarillo"
    },
    {
        "name": "Tamarind"
    },
    {
        "name": "Tangerine"
    },
    {
        "name": "Watermelon"
    }
]

var glowLevel = 0;
var glowLevel2 = 20;
var minus = 0;
export function buttonGlow(){
    
    var delayInMilliseconds = 100;
    setTimeout(function(){
        glowLevel ++;
        if(glowLevel < 20){
            document.getElementById("btnSubscribeID").style.boxShadow = `0px 0px ${glowLevel}px 1px #ff4f0f`
            console.log(glowLevel);
        }
        else if(glowLevel >= 20 && glowLevel <= 40){
            // console.log(true)
            minus ++
            var glow = glowLevel2 - minus;
            console.log(glow);
            // glowLevel = glowLevel - glowLevel2;
            document.getElementById("btnSubscribeID").style.boxShadow = `0px 0px ${glow}px 1px #ff4f0f`
            if(minus === 20){
                glowLevel = 0;
                minus = 0;
                console.log(`formated true`)
            }
        }
        
        // else if(glowLevel > 15){
            
        // }
        // else{}
        // console.log(glowLevel);
        
        // while(glowLevel){
            if(glowLevel < 50){
                buttonGlow();
            }
    }, delayInMilliseconds)
}