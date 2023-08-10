// document.querySelector(".names").innerHTML += "Bob is here <br />";
// document.querySelector(".names").innerHTML += "John is here <br />";
// document.querySelector(".names").innerHTML += "Sarah is here <br />";

let students = ["Bob", "John", "Sarah"];

students.forEach(
  (student) =>
    (document.querySelector(".names").innerHTML += `${student} is here <br>`),
);
