console.log("Het werkt");

const firstname = "Pascal";
const lastname = "Thong";
const sex = "Male";
let status = "online";
let age = 34;


const nameParagraph = document.querySelector(".name");
const ageParagraph = document.querySelector(".age");

nameParagraph.textContent = firstname + " " + lastname;
ageParagraph.textContent = "age: " + age;