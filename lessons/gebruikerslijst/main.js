// stap 2 selecteren van knop
const addButton = document.querySelector("button.add-user");
if(addButton){ // de if-statement controleert of de add button bestaat.
    console.log(addButton);
}

//stap 6
const users = [
    makeObject("Pascal", "Thong", 34),
    makeObject("Dennis", "Xu", 28),
    makeObject("Alex", "?", 24)
];
showUsers();

//stap 3
addButton.addEventListener("click", (event)=>{
    console.log("het werkt!");
    //stap 4
    const fn = prompt("name");
    const ln = prompt("lastname");
    const age = prompt("age plz");
    if(!fn || !ln || !age) { // controlleert of het  leeg is
        alert("FOUTMEDLING");
    }else{
        const user = makeObject(fn, ln, age)
        users.push(user);
        showUsers();
    }


})


// stap 5
function makeObject(firstname, lastname, age){
    return {
        firstname, 
        lastname, 
        age,
        getFullName: function(){
            return this.firstname + " " + this.lastname;
        }    
    };
}

//stap 7
function showUsers(){
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        ul.innerHTML += `<li> ${user.getFullName()} </li>`;

        
    }
}   

