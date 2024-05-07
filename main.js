console.log("Lets do it!!");
const students = [
  {
    id: 1,
    name:"Paul Nguepi",
    house: "Gryffindor",
  },

  {
    id:2,
    name: "Harry Porter",
    house:"Ravenclaw",

  },
  {
    id:3,
    name: "Stephane Sciffles",
    house: "Gryffindor",
  },

  {
    id:4,
    name: "Nelson Olivier",
    house: "Slytherin",
  },
  {
    id:5,
    name: "Steve Noubeu",
    house: "Hufflepuff",
  },
  {
    id:6,
    name: "Kalu Peace",
    house: "Ravenclaw",

  }
];


// Render to DOM utility function

const renderToDom = (divId, htmlToRender) => {
  console.log("divId", divId)
  console.log("htmlToRender", htmlToRender)
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// get the cards on the DOM


const cardsOnDom = (array) => {
  let domString = "";
  console.log("array", array)
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">${student.name}</p>
      <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
    </div>
  </div>`;
  }
  renderToDom("#students", domString);
}
// filter students by house
const filter = (students, house) => {
  const filterStudent =[];

  students.forEach((student) =>{
    console.log("student", student);
    console.log("house", house);
    if(student.house === house ){
      filterStudent.push(student);
    }
  });
  
  return filterStudent;

}


// Creating a new student 

// select/target the form on the DOM
const form = document.querySelector('form');

// create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate

const houses =["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
const createStudent = (e) => {
  // Every time you create a form
  e.preventDefault(); 

  const newStudentObj ={
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: houses[Math.floor(Math.random()*4)]
  }

  students.push(newStudentObj);
  console.log(students)
  cardsOnDom(students)
  form.reset();
}
//add event listener for each button

const studentBtn = document.querySelector("#allbtn");
const slytherinBtn = document.querySelector("#slybtn");
const ravenclawBtn = document.querySelector("#ravbtn");
const hufflepuffBtn = document.querySelector("#hufbtn");
const gryffindorBtn = document.querySelector("#grybtn");


studentBtn.addEventListener("click", () =>{
  cardsOnDom(student)
});

// add event to filter

slytherinBtn.addEventListener("click", () =>{
  const slyHouse = filter(students, "Slytherin");
  console.log("slytherin", slyHouse)
  cardsOnDom(slyHouse, "#students");


});

ravenclawBtn.addEventListener("click", () =>{
  const ravHouse = filter(students, "Ravenclaw");
  cardsOnDom(ravHouse, "#students");
  console.log(" hello",ravHouse);
  
});

hufflepuffBtn.addEventListener("click", () =>{
  const hufHouse = filter(students, "Hufflepuff");
  console.log("huffle", hufHouse);
  cardsOnDom(hufHouse, "#students");
});

gryffindorBtn.addEventListener("click", () =>{
  const gryHouse = filter(students, "Gryffindor");
  console.log("gryffindor", gryHouse);
  cardsOnDom(gryHouse, "#students");
});

// Add an event listener for the form submit and pass it the function (callback)

form.addEventListener('submit', createStudent);

// Deleting an existing student

// ****** DELETE ****** //
// ******************** //

// Here we will be using event bubbling
// 1. Target the app div
// 2. Add an event listener to capture clicks
// 3. check e.target.id includes "delete"
// 4. add logic to remove from array
// 5. Repaint the DOM with the updated array
// 6. Organize code so that everything is in a function except selectors

const expelbtn =document.querySelector("#students");

// Add an event listener to capture clicks
expelbtn.addEventListener('click', (e) =>{
  // console.log(e.target.id);

  // check e.target.id includes "delete"
  if(e.target.id.includes("delete")) {
    const[, id] = e.target.id.split("--");

// add logic to remove from array
// .findIndex is an array method
const index = students.findIndex(e => webkitURL.id === Number(id));

// splice modifies the original array
students.splice(index, 1);

//Repaint the DOM with the updated array
cardsOnDom(students, "#students");
  }
});

const startApp =() => {
  cardsOnDom(students);
  // events(); // ALWAYS LAST
}

startApp();
