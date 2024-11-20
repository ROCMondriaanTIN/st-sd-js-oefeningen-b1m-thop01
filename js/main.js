console.log("Het werkt");

const firstname = "Pascal";
const lastname = "Thong";
const sex = "male";
let status = "online";
let age = 34;

//Haalt HTML-Elementen op
const profileDiv = document.querySelector(".profile");
const nameParagraph = document.querySelector(".name");
const ageParagraph = document.querySelector(".age");
const addButton = document.querySelector(".add-profile");
const profilesDiv = document.querySelector(".profiles");

nameParagraph.textContent = firstname + " " + lastname; // verandert de tekst
ageParagraph.textContent = "age: " + age; 
profileDiv.classList.add(sex); // voegt een klasse toe aan profile

// zorgt ervoor dat de add-profile button iets uitvoert.
addButton.addEventListener("click", function (event){
    alert("Vul hier alle gegevens in van een nieuwe profiel");
    const firstName = prompt("fill firstname: ");
    const lastName = prompt("lastname: ");
    const sex = prompt("sex: ");
    const status = "offline";
    const age = prompt("age: ");
    let profileHTML = createProfileDiv(firstName, lastName, sex,age); // aanroepen van een functie
    
    // wat is het verschil?
    profilesDiv.innerHTML += profileHTML;
    profilesDiv.innerHTML = profileHTML;


});

// een funtie dat een een profiel aanmaakt in html
function createProfileDiv(fname, lname, sex, age){
    let htmlCode = `
        <div class="profile">
        <h3 class="name"> ${fname} </h3>
        <p class="age"> age: ${age} </p>
    </div>
    `;
    return htmlCode;
}
