const containerElement = document.querySelector("#fromjs");

// list of items to create
const listOfItems=["abebe", "kebede","almaz"];

//create the ul element first
const ulElement=document.createElement("ul");


// create li elements first
listOfItems.forEach((item)=>{
    const listElemnt=document.createElement("li");
    listElemnt.innerText=item;
     ulElement.appendChild(listElemnt);
});



// append the created element on the HTML body
// document.body.appendChild(ulElement);
containerElement.appendChild(ulElement)