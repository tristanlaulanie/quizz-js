console.log("Hello World!");

// SELECTION DES ELEMENTS DU DOM
const button = document.getElementById("button-submit");
console.log(button);

const sectionInstruction = document.querySelector(".section-instruction");
const instruction = document.getElementById("instruction-text");
const scoreDisplay = document.getElementById("score-display");

// LISTE DES QUESTIONS
const question1 = document.getElementById("question-empereur");
const question2 = document.getElementById("question-independanceday");
const question3 = document.getElementById("question-chute-empire");
const question4 = document.getElementById("question-capitale");
const question5 = document.getElementById("question-irlande");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Button clicked!");

  sectionInstruction.style.display = "none";

  // VERIFICATION DES REPONSES (COULEURS)

  // QUESTION 1
  let q1answer = document.getElementById("clovis");
  let q1Result = 0; // valeur par défaut de la question 1


  if (q1answer.checked == true) {
    console.log("Clovis is checked!");
    question1.style.backgroundColor = "green";
    q1Result = 1;
    console.log("Je gagne", q1Result, "point");
  } else {
    console.log("Clovis is not checked!");
    question1.style.backgroundColor = "red";
  }

  console.log("Valeur finale de q1Result:", q1Result);

  // QUESTION 2
  let q2answer = document.getElementById("4juillet76");
  let q2Result = 0; // valeur par défaut de la question 2

  if (q2answer.checked == true) {
    question2.style.backgroundColor = "green";
    q2Result = 1;
  } else {
    question2.style.backgroundColor = "red";
  }

  // QUESTION 3
  let q3answer = document.getElementById("476apJC");
  let q3Result = 0; // valeur par défaut de la question 3

  if (q3answer.checked == true) {
    question3.style.backgroundColor = "green";
    q3Result = 1;
  } else {
    question3.style.backgroundColor = "red";
  }

  // QUESTION 4
  let q4answer = document.getElementById("ljubljana");
  let q4Result = 0; // valeur par défaut de la question 4

  if (q4answer.checked == true) {
    question4.style.backgroundColor = "green";
    q4Result = 1;
  } else {
    question4.style.backgroundColor = "red";
  }

  // QUESTION 5
  let q5answer = document.getElementById("4millions9");
  let q5Result = 0; // valeur par défaut de la question 5

  if (q5answer.checked == true) {
    question5.style.backgroundColor = "green";
    q5Result = 1;
  } else {
    question5.style.backgroundColor = "red";
  }

  // CALCUL DU SCORE
  let score = q1Result + q2Result + q3Result + q4Result + q5Result;
  console.log("le score est ", score);

  // AFFICHAGE DU SCORE
  scoreDisplay.style.display = "block";
  scoreDisplay.innerHTML = "Votre score est de " + score + "/5 🏆 ";

});
