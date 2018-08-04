"use strict";

const body = document.querySelector("body");
const script = document.querySelector("script");

// const header = document.createElement("header");
// const main = document.createElement("main");
// const footer = document.createElement("footer");



// universal function for grabbing elements on the DOM
function grabElement(identifier){
    let element = document.querySelector(identifier);
    return element;
}


// universal function for creating elements on the DOM
function makeElement(element){
    let newElement = document.createElement(element);
    return newElement;
}

// function that's inserting each element at a certain point on the body on our page
function buildDom() {
    const body = grabElement("body");
    const script = grabElement("script");
    const header = makeElement("header");
    const main = makeElement("main");
    const footer = makeElement("footer");
    //creating the structure of the DOM
    body.insertBefore(footer, script);
    body.insertBefore(main, footer);
    body.insertBefore(header, main);
    makeContainers();
}

//// function that is making our containers and organizing how we want them to look on our page 
function makeContainers(){
    const mainContent = grabElement("main");
    const familyContainer = makeElement("div");
    //this creates a new class, naming it family-container and assigning it to the div just created
    familyContainer.setAttribute("class","family-container");
    mainContent.appendChild(familyContainer);
    //creating 2nd div and assigning the class title_container to it
    const titleContainer = makeElement("div");
    titleContainer.setAttribute("class", "title_container");
 //creating 3rd div and assigning the class quarter_info to it
    const quarterInfo = makeElement("div");
    quarterInfo.setAttribute("class", "quarter_info");
    //appending what is at the bottom of the card and build up.
    mainContent.appendChild(quarterInfo);
    mainContent.insertBefore(familyContainer, quarterInfo);
    mainContent.insertBefore(titleContainer, familyContainer);
}


module.exports = buildDom;