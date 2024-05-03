console.log("Lets do it!!");
const students = [
  {
    Id: 1,
    name:"Paul Nguepi",
    house: "Gryffindor",
  },

  {
    Id:2,
    name: "Harry Porter",
    house:"Ravenclaw",

  },
  {
    Id:3,
    name: "Stephane Sciffles",
    house: "Gryffindor",
  },

  {
    Id:4,
    name: "Nelson Olivier",
    house: "Slytherin",
  },
  {
    Id:5,
    name: "Steve Noubeu",
    house: "Hufflepuff",
  },
  {
    Id:6,
    name: "Kalu Peace",
    house: "Ravenclaw",

  }
];
// array for expelled students
const expel = [ {
  name: "Moldy Voldy",
  house: "A Voldy Moldy One"
}]; 


// Render to DOM utility function

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innnerHTML = htmlToRender;
};

// get the cards on the DOM

const cardsOnDom =(students) => {
  let domString = " ";
  for (const student of students) {
    domString += `<div class="card" style="width:18rem;">
    <div class="card-body">

    <p class="card-text">${student.name}</p>
    <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
      </div>
    </div>`;
  }

  renderToDom("#app", domString);

}

// filter students by house
const filter = (students, house) => {
  const studentHouse =[];

  student.forEach((house) =>{
    if(student.house === house ){
      studentHouse.push(house);
    }
  });
  
  return studentHouse;

}


// Creating a new student 

// select/target the form on the DOM
const form = document.querySelector('form');

// create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate


const createStudent = (e) => {
  // Every time you create a form
  e.preventDefault(); 

  const newStudentObj ={
    id: students.lenght + 1,
    name: document.querySelector("#name").value,
    house: document.querySelector("#house").house,  
  }

  students.push(newStudentObj);
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
  studentsOnDom(students)
});

slytherinBtn.addEventListener("click", () =>{
  studentsOnDOm(students)
});

ravenclawBtn.addEventListener("click", () =>{
  studentsOnDom(students)
});

hufflepuffBtn.addEventListener("click", () =>{
  studentsOnDom(students)
});

gryffindorBtn.addEventListener("click", () =>{
  studentsOnDOm(students)
})


// add event to filter

slytherinBtn.addEventListener("click", () =>{
  const slyHouse = filter(students, "Slytherin");
  studentsOnDOm(slyHouse);
});

ravenclawBtn.addEventListener("click", () =>{
  const ravHouse = filter(students, "Ravenclaw");
  studentsOnDOm(ravHouse);
});

hufflepuffBtn.addEventListener("click", () =>{
  const hufHouse = filter(students, "Hufflepuff");
  studentsOnDOm(hufHouse);
});

gryffindorBtn.addEventListener("click", () =>{
  const gryHouse = filter(students, "Gryffindor");
  studentsOnDOm(gryHouse);
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

const app =document.querySelector("#app");

// Add an event listener to capture clicks
app.addEventListener('click', (e) =>{
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
cardsOnDom(students);
  }
});

const startApp =() => {
  cardsOnDom(students);
  // events(); // ALWAYS LAST
}

startApp();
