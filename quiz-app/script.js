const quizData = [
  {
    question: "If you ever do something cool never brag about it.",
    a: "Christopher Robert Evans",
    b: "Christopher Hemsworth",
    c: "Tom Holland",
    d: "Robert Downy Junior",
    correct: "d"
  },
  {
    question: "India mein logg logic se zyada magic pe believe karte hain sir",
    a: "Illeana",
    b: "BramhaNandam",
    c: "AlluArjun",
    d: "Sonu Sood",
    correct: "c"
  },
  {
    question: "Baba re ama dhandha heuchi one was traffic, ethi jai hue kintu feri hueni",
    a: "Mihir",
    b: "Anubhav",
    c: "Barsha",
    d: "Aparajita",
    correct: "a"
  },
  {
    question: "Mein har din apna akhri din manke chalta hoon, so all I have is just one day",
    a: "Salman",
    b: "Hritik",
    c: "Amir",
    d: "Ranveer",
    correct: "b"
  },
  {
    question: "Ethi Election b kaka kare au selection b kaak kare",
    a: "Arindam",
    b: "Mihir",
    c: "Babusan",
    d: "Sailendra",
    correct: "b"
  }
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
      const answer = getSelected();

      if(answer){
        if(answer === quizData[currentQuiz].correct){
          score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
          loadQuiz();
        }
        else{
          quiz.innerHTML = 
          "<h3>you scored correctly " + score + " / " + quizData.length +
          "</h3><button type='button' onclick='location.reload()' >Reload </button>";
     
        }
      }
});




