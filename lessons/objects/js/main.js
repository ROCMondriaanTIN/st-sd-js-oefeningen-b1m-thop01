console.log("Het bestand wordt geladen");


const person = {
    firstName: "Johny",
    lastName: "Doe",
    age: 30,
    education: "Bachelor's Degree",
    score: 85
};


const post = {
    userName: "passie",
    title: "Een nieuwe les",
    story: "een les over objecten",
    date: new Date(),
    views: 0
}

const recipe = {
    dish: "Nasi Goren Djawa",
    description: "Lekker hé",
    healty: false
}

//opdracht 4
const car1 = {
    brand: "BMW",
    description: "dure auto",
    price: 200.10,
    km: 1999,
}

const car2 = {
    brand: "BMW",
    description: "dure auto",
    price: 200.10,
    km: 1999,
}

const car3 = {
    brand: "BMW",
    description: "dure auto",
    price: 200.10,
    km: 1999,
}

const car4 = {
    brand: "BMW",
    description: "dure auto",
    price: 200.10,
    km: 1999,
}

car4.description = "een mooie auto";
console.log(car4);

// const cars = [car1,car2,car3]; // het aanmaken
// cars.push(car4); // hoet toevoegen
// console.log(cars);

const cars = [
    {
        brand: "BMW",
        description: "Luxueuze sportwagen met geavanceerde technologie",
        price: 45000.00,
        km: 1999,
    },
    {
        brand: "Opel",
        description: "Betrouwbare en betaalbare gezinsauto",
        price: 15000.00,
        km: 1999,
    },
    {
        brand: "Audi",
        description: "Hoogwaardige premium auto met uitstekende prestaties",
        price: 55000.00,
        km: 1999,
    }
];

// for (let i = 0; i < carsExample.length; i++) {
//     const car = carsExample[i];
//     console.log(`merk = ${car.brand}, ${car.description}`);
// }


function getNewsHtml(newsObject){
    let htmlCode = "";
    htmlCode = `
            <div class="news">
                <h3> ${newsObject.title} </h3
                <p> ${newsObject.description} </p>
            </div>
        `;
    return htmlCode
}




const title  = "Autos";

const car = {
    brand: "BMW",
    description: "Luxueuze sportwagen met geavanceerde technologie",
    price: 45000.00,
    km: 1999,
};



const carsContainer = document.querySelector(".cars-container");

for(let i = 0; i < cars.length; i++){
    const car = cars[i]; 
    carsContainer.innerHTML += getCarDiv(car);
}



function getCarDiv(car){
    let carDiv = `
        <div class="car"> 
            <h2> ${car.brand} </h2>
            <p> ${car.description} </p>
            <p> € ${car.price} </p>
            <p> Kilometerstand: ${car.km} </p>
        </div>
    `;
    return carDiv;
}



// tonen van variabelen
// const nameElement = document.querySelector("span.name");
// nameElement.textContent = title;

// tonen van eigenschappen van een object
// const descriptionElement = document.querySelector("p.description");

// console.log(car.brand);
// console.log(car.description);

// descriptionElement.textContent = `${car.brand}  :  ${car.description}`;




