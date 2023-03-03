// import image from './img'
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const image = document.getElementById('image')
// console.log(image)
let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// class Player {
//     constructor(name = 'Player1', age, country) {
//         this.name = name,
//         this.age = age,
//         this.country= country
//     }
// }

// const player = new Player( )

// let name= promt[]

let questions = [
    {
        question: "Guess the cartoon series.",
        // show_image('babylooney.gif', '30%', '40%', 'cartoon img')

        img: "./img/babylooney.gif",
          choice1 : "Bunnies and friends",
           choice2 : "Baby Looney Tunes",
           choice3 : "Baby Bunnies",
           choice4 : "Lullaby tunes",
            answer: 2
    },
    {
        question: "Guess the cartoon.",
        img: "./img/dexter.gif",
        
        choice1: "Lab doctor",
        choice2: "Pixer the doctor",
        choice3: "Romeo",
        choice4: "Deter",
        answer: 4
        // options: ["Lab doctor", "Pixer the doctor", "Romeo", "Deter"]
    },
    {
        question: "What is this cartoon's last name.",
        img: "./img/Luigi.gif",
        choice1: "Mario",
        choice2: "Super",
        choice3: "Luigi",
        choice4: "Mario Luigi",
        answer: 1
        // options: ["Mario", "Super", "Luigi", "Mario Luigi"]
        // correctAnswer: "Mario",
    
    },
    {
        question: "Who is hiding in the image?",
        img: "./img/mickey.gif",
        choice1: "Cinderella Place",
        choice2: "Disney",
        choice3: "Mouse",
        choice4: "Mickey and friends",
        answer: 2
        // options: ["Cinderella Place", "Disney", "Mouse", "Mickey and friends"]
        // correctAnswer: "Disney",
    },
    {
        question: "What this character is waiting for?",
        img: "./img/winnie.gif",
        choice1: "Winnie",
        choice2: "Pancake",
        choice3: "Honey",
        choice4: "Spaghetti with meat balls",
        answer: 3
        // options: ["Winnie", "Pancake", "Honey", "Spaghetti with meat balls"]
        // correctAnswer: "Disney",
    },
]
   
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    // counter =10
    // show_image()
}

//getting new question
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // localStorage.setItem('mostRecentScore', score)
        // return window.location.assign('/end.html')
        // question.innerText = currentQuestion.question
    }
//tracks the progress of the questions
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    //Keeping track of the questions. Which questions we are at?
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[ questionsIndex ]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset[ 'number' ]
        choice.innerText = currentQuestion[ 'choice' + number ]
    })
    
    availableQuestions.splice(questionsIndex, 1)
    // image.setAttribute('src', currentQuestion.img)
    // video.setAttribute('src', currentQuestion.video)
    
    acceptingAnswer = true
    // startGame()
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswer) return
        
        acceptingAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset[ 'number' ]
    
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    
        if (classToApply === 'correct') {
    
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        //for time 
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)


    })
})
        incrementScore = num => {
            score += num
            scoreText.innerText = score
}
startGame()
        
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        })


   

        // function show_image(src, width, height, alt) {
        //     var img = document.createElement("img");
        //     img.src = src;
        //     img.width = width;
        //     img.height = height;
        //     img.alt = alt;
        
        //     // This next line will just add it to the <body> tag
        //     document.body.appendChild(img);
        // }



        // countdown: function(){
        //     startGame.counter --;
        //     $('#counter').html(startGame.counter); 
        //     if(startGame.counter<=0){
        //         console.log("TIME UP!")
        //         game.timeUp();
        //     }
        // },