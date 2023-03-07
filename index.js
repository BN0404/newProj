// import image from './img'
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const image = document.getElementById('image')
const start = document.querySelector("#playAgain");

// console.log(image)
let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// class Player {
//     constructor(name = 'Player1', age, country) {
//         this.name = name,
//         this.age = age,
//         this.country= country
//     }
// }

// let name= prompt("Enter your Name:")

// let age = prompt("Enter your Age: ");

// let country = prompt("Enter your Country:")

// const player = new Player(name, age, country )

let questions = [
  {
    question: "Guess the cartoon series.",

    img: "./img/babylooney.gif",
   
    choice1: "Bunnies and friends",
    choice2: "Baby Looney Tunes",
    choice3: "Baby Bunnies",
    choice4: "Lullaby tunes",
    answer: 2,
  },
  {
    question: "Guess the cartoon.",
    img: "./img/dexter.gif",

    choice1: "Lab doctor",
    choice2: "Pixer the doctor",
    choice3: "Romeo",
    choice4: "Dexter",
    answer: 4,
  
  },
  {
    question: "What is this cartoon's last name.",
    img: "./img/Luigi.gif",
    choice1: "Mario",
    choice2: "Super",
    choice3: "Luigi",
    choice4: "Mario Luigi",
    answer: 1,
  
  },
  {
    question: "What image is hiding in the picture?",
    img: "./img/mickey.gif",
    choice1: "Cinderella Place",
    choice2: "Disney",
    choice3: "Mouse",
    choice4: "Mickey and friends",
    answer: 2,
   
  },
  {
    question: "What this character is waiting for?",
    img: "./img/winnie.gif",
    choice1: "Winnie",
    choice2: "Pancake",
    choice3: "Honey",
    choice4: "Spaghetti with meat balls",
    answer: 3,

  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

const startGame = () => {
  // window.location.reload()
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
};

start.addEventListener("click", startGame)


//getting new question
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // localStorage.setItem('mostRecentScore', score)
        // return window.location.assign('/end.html')

        return;
    }

      console.log(questionCounter)
    if (questionCounter === MAX_QUESTIONS - 1) {
        // start.addEventListener("click", startGame) 
            startGame();
    }
    

  //tracks the progress of the questions
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  //Keeping track of the questions. Which questions we are at?
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
//   console.log(currentQuestion);
  question.textContent = currentQuestion.question;

    

    
    
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  image.setAttribute("src", "./" + currentQuestion.img);
  // video.setAttribute('src', currentQuestion.video)

  acceptingAnswer = true;
  // startGame()
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswer) return;

    acceptingAnswer = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }
    selectedChoice.parentElement.classList.add(classToApply);
    //for time
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);

    //   console.log(questionCounter, MAX_QUESTIONS, score);
      if (questionCounter === MAX_QUESTIONS && score >= 300) {
        alert("Yay you are the winner");
      } else if (questionCounter === MAX_QUESTIONS && score < 300) {
        alert("Better luck next time");
      }
      getNewQuestion();
    }, 3000);
  });
});
incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()
// start.addEventListener("click", startGame)
// let questionCounter = 0

selectedChoice.parentElement.classList.add(classToApply)
        setInterval(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            // console.log(questionCounter)
            questionCounter ++
            if (questionCounter === MAX_QUESTIONS && incrementScore >= 300) {
                // console.log("if")
                alert('Yay you are the winner');
            }
            else if(questionCounter === MAX_QUESTIONS && incrementScore <300) {
                alert('Better luck next time');
            }
            
        },3000)
        
