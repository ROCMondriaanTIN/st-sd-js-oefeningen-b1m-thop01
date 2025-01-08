
const usersView = document.querySelector(".users");



fetch("https://dummyjson.com/users")
    .then(data => data.json())
    .then(data => show(data));


function show(data){
    console.log(data); // als je dit heb ingetypt, bekijk dan eerst je data.
    const users = data.users;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        addUser(user); // roept de functie addUser aan.
        
    }
    
 
}

function addUser(user){
    const gender = user.gender;
    usersView.innerHTML += `
        <div class="user">
            <img class="profile-img" src="${user.image}" />
            <h4> ${user.firstName} (${user.age}) </h4>
        </div>
    `
}



fetch("https://dummyjson.com/recipes/1")
    .then(data => data.json())
    .then(data => showRep(data));


function showRep(data){

    const recipe = data;
    const ingredients = recipe.ingredients;

    for(let i = 0; i < ingredients.length; i++){

        let ingredient = ingredients[i];
        console.log(ingredient);

    }



    console.log(data);
}



