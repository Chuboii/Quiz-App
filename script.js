let questions = [
  {
    numb:1,
    question:" What does HTML stand for?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c:  "Hyper Text Multiple Language",
    d: "Hyper Tool Multi Language ",
    correctAns: b
  },
  {
    numb:2,
    question:" What does PHP stand for",
    a: "Hypertext Preprocessor",
    b:  "Hypertext Programming",
   c: "Hypertext Preprogramming",
    d:  "Hometext Preprocessor",
  correctAns:a
  },
  {
    numb:3,
    question:"What does SQL stand for?",
     a: "Stylish Question Language",
    b:  "Stylesheet Query Language",
     c: "Statement Question Language",
     d: "Structured Query Language",
    correctAns:d
  },
      {
    numb:4,
    question:"What does CSS stand for?",
    a: "Common Style Sheet",
     b: "Colorful Style Sheet",
    c:  "Computer Style Sheet",
    d:  "Cascading Style Sheet",
    correctAns:d
  },
  {
    numb:5,
    question:"Difference between a backend and a frontend developer?",
    a: "A backend styles the client side while the frontend works on the server side",
     b: "They both have the same function",
    c:  "A backend is a server side developer while the frontend is a client side developer",
    d:  "A backend does nothing while the frontend handles everything",
    correctAns:c
  }
  ]




const startPage = document.querySelector(".opening-start")
const infoPage = document.querySelector(".instruction-container")
const startBtn = document.querySelector(".start")
const resultPage = document.querySelector(".result-box")
const quizPage = document.querySelector(".quiz-box")
const continueBtn = document.querySelector(".continue-quiz")
const exitBtn = document.querySelector(".exit-quiz")
const nextBtn = document.querySelector(".next-btn")
const replayBtn = document.querySelector(".replay")
const quit = document.querySelector(".quit")
let optA = document.querySelector(".optA")
let optB = document.querySelector(".optB")
let optC = document.querySelector(".optC")
let optD = document.querySelector(".optD")
const quesTag = document.querySelector(".que-text")
const numA = document.querySelector(".noA")
const numB = document.querySelector(".noB")
let  input = document.querySelectorAll("input")
let scoreText = document.querySelector(".score-text")
let openingPage = document.querySelector(".opening-start")
let restartBtn = document.querySelector(".restart-game")
let exitPage = document.querySelector(".exit-page")
let timerText = document.querySelector(".timer-sec")
let score = 1
let interval;
startBtn.addEventListener("click", ()=>{
    infoPage.style.display = 'flex'
  openingPage.style.display = 'none'
})

continueBtn.addEventListener("click", ()=>{
      quizPage.style.display = "block"
    infoPage.style.display = "none"
    timer(10)
})

exitBtn.addEventListener(("click"), ()=>{
    startPage.style.display = "block"
    infoPage.style.display = "none"
})

let que_count = -1

function showQues() {
  que_count++
clearInterval(interval)

 timer(10)
 
  numB.innerHTML = questions.length

  if (que_count < questions.length) {
    const {question, a,b,c,d, correctAns} = questions[que_count]
    quesTag.innerHTML = question
    optA.innerHTML = a
    optB.innerHTML = b
    optC.innerHTML = c
    optD.innerHTML = d
    numA.innerHTML = questions[que_count].numb
    
    input.forEach(el =>{
      el.removeEventListener("change", checkAns)
    })

    input.forEach(el =>{
      el.checked = false
    })

    input.forEach(el =>{
      el.addEventListener("change", checkAns)
    })

  } else {
 
   nextBtn.innerHTML = 'Check Result'
  }
localStorage.setItem('score', score)
let sad = document.querySelector(".sad-emo")
let boss = document.querySelector(".boss-emo")
let star = document.querySelectorAll(".fa-star")
let updatedScore = JSON.parse(localStorage.getItem('score'))
if(nextBtn.innerHTML === 'Check Result'){
resultPage.style.display = 'flex'

clearInterval(interval)
timerText.innerHTML = '0:00'
star.forEach((el,idx) =>{
  if (updatedScore == 1 && idx > 0) {
  
      el.style.color = 'wheat'
  }
  else if (updatedScore == 2 && idx > 1) {
  
    el.style.color = 'wheat'
}
else if (updatedScore == 3 && idx > 2) {
  
  el.style.color = 'wheat'
}
else if (updatedScore == 4 && idx > 3) {
  
  el.style.color = 'wheat'
}
else if (updatedScore == 5 && idx > 5) {
  
  el.style.color = 'wheat'
}
})
if (updatedScore < 3) {
  // sad.classList.add("active")
  scoreText.innerText = `Oops! You got ${updatedScore} out of ${questions.length} `  
}
else{
  scoreText.innerText = `Yay! You got ${updatedScore} `  
}

}
else{

}
 
}

function checkAns(e){
let id = e.target.id
let correct = questions[que_count].correctAns.id

if (id === correct) {
  score++
}

}

function replay() {
  que_count = 0
  timer(10)
  nextBtn.innerHTML = 'Next Question'
  resultPage.style.display = 'none'

  const {question, a,b,c,d, correctAns} = questions[que_count]
  quesTag.innerHTML = question
  optA.innerHTML = a
  optB.innerHTML = b
  optC.innerHTML = c
  optD.innerHTML = d
  numA.innerHTML = questions[que_count].numb
  

}

function timer(no) {
  let time = no

  interval = setInterval(() => {
    time--
    if (time >= 0) {
     timerText.innerHTML = `0:0${time}`

    } else {
      que_count++
      time = 10
      const {question, a,b,c,d, correctAns} = questions[que_count]
      quesTag.innerHTML = question
      optA.innerHTML = a
      optB.innerHTML = b
      optC.innerHTML = c
      optD.innerHTML = d
      numA.innerHTML = questions[que_count].numb
    }
  }, 1000);
}

function quitQuiz() {

  quizPage.style.display = 'none'
  resultPage.style.display = 'none'
 exitPage.style.display = 'flex'
}

function restartGame() {
  exitPage.style.display = 'none'
  openingPage.style.display = 'block'
nextBtn.innerHTML = 'Next Question'
  que_count = 0
  const {question, a,b,c,d, correctAns} = questions[que_count]
  quesTag.innerHTML = question
  optA.innerHTML = a
  optB.innerHTML = b
  optC.innerHTML = c
  optD.innerHTML = d
  numA.innerHTML = questions[que_count].numb
  
}
  // input.forEach(el => {
  // el.addEventListener('change', ()=>{
  //   if (el.checked) {
  //     nextBtn.disabled = false
  //   } else {
  //     nextBtn.disabled = true
  //   }
  // })
  // });
window.addEventListener("load", showQues)
nextBtn.addEventListener("click", ()=>{
  showQues()
})
replayBtn.addEventListener("click", replay)
quit.addEventListener("click", quitQuiz)
restartBtn.addEventListener("click", restartGame)