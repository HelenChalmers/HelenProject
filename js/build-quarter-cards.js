"use strict";


let stateQuarters = require("./database.js");

function buildQrterCard(){
    const quarterDiv = document.querySelector(".quarter_info");
    stateQuarters.forEach((item) => {
        quarterDiv.innerHTML += 
    //this outer div is the card parameters
            `<div class="quarter_card">
                <div>
                    <img src="${item.image}" alt="${item.name} State Quarter">
                </div>
                <div>   
                    <h3>State: ${item.name}</h3>
                    <h4>Year Released: ${item.year}</h4>
                </div>
            </div>`
})
}

module.exports = buildQrterCard;
