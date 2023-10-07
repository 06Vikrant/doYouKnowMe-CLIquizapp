let readlineSync = require('readline-sync');

let score = 0;

// input >> processing >> output
let userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " do you know Vikrant.");
console.log("YES");

// Instructions
console.log('\n');
console.log('Rules & Instructions: ');
console.log(`1. ${userName}, There are 10 Questions on India and all are Compulsory.`);
console.log('2. You will get 10 points on each Right Answer.');
console.log('3. 5 points will be deducted if the Answer is Wrong.');

// data of high score
let highScores = [
  {
    name: "Atul",
    score: 4
  },
  {
    name: "Nayan",
    score: 4
  },
  {
    name: "Harsh",
    score: 3
  }
]

// 

// array of objects
let questions = [
  {
    question: "What was his favourite food?",
    answer: "Noodles"
  },
  {
    question: "His favourite superhero would be?",
    answer: "Iron Man"
  },
  {
    question: "Which is his favourite anime? ",
    answer: "Naruto"
  },
  {
    question: "What is his favourite sport? ",
    answer: "Football"
  },
  {
    question: "IS he a good man?",
    answer: "Yes"
  }
]

// play function
function play(ques, ans) {
  let userAnswer = readlineSync.question(ques);

  // branching
  if (userAnswer.toUpperCase() === ans.toUpperCase()) {
    console.log(ans);
    console.log
    score += 1
  } else {
    console.log("wrong");
    score -= 1;
  }

  console.log("Current score: ", score);
}

// function to determine the highScores
function topScorers() {
  if (score >= 45) {
    console.log("🔥 YAYYYYY!, You broke the record");  
    console.log(`Congratulate ${userName}, please send a screenshot so that I can update the high score list.`)
  } else if (score >= 35 & score <=45) {
  console.log("Good try, you can do it better!");
  } else {
    console.log("Aww!, better luck next time.");
  }
}


// loop
for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log("High scores are: ");
console.log("------------------")

for (let i = 0; i < highScores.length; i++) {
  let currentHighScore = highScores[i];
  console.log(currentHighScore.name, currentHighScore.score);
}

topScorers();


