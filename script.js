  // create our questions database 
//(`Welcome to Trivia Night, what is your name?`)
function UserCreator(name, points) {
  this.name = name;
  this.points = points;
}
const database = {
'Who won the 2022 NBA Championship? 🏀 A) Milwauwkee Bucks, B) Boston Celtics, C) Golden State Warriors, D)Phoenix Sun ': 'C',
  
'What language are we learning to code in? 💻 A) Java, B) C++, C) JavaScript, D) Ruby': 'C',
  
'Who was the President of the U.S.A? A) Barack Obama, B) Donald Trump, C) Hillary Clinton, D) Joseph Biden': 'D', 
  
  
'What is the capital of China? A) Hong Kong, B) Beijing C) Shanghai, D) Shenzhen' : 'B', 

'Who sang the song Baby? A) Kanye West B) Justin Bieber C) Adele D) Ariana Grande' : 'B',
  
'How many states are there in the US? A) 51 B)49 C) 50 D) 52': 'C' 
}
function myfunc () {
let person = prompt("Please enter your name", " ")

if (person == ' ') {
  alert('Please enter a name')
   prompt("Please enter your name", " "); }
 
  if (person != null) {
   alert( "Hello " + person + "! Welcome to Trivia Night!");
  return person;}

  else { 
alert('Have a nice day!')

 }
}
const points = 10; 
firstUser = myfunc(); 
alert('Get ready to win some money💰💵💰  !')

const user1  = new UserCreator(firstUser, points)
//console.log (user1)

// ask user how many points they'd like to gamble, from 1-10


//console.log(numOfPoints(user1))
//console.log(numOfPoints(user1))

// asking first Question


// create function for asking questions 
function askingQuestions (user, questionBank) {
  let points = 0; 
    // iterate thru the questions 
  for (let key in questionBank) {
        // allow user to enter an answer
    let answer = prompt (key); 
    if (answer === null) {alert ( 'Do not give up! But I guess I will close the game ')}
    answer = answer.toUpperCase(); 
    // compae if user got correct answer 
    if (answer === questionBank[key]) {
      // tell user if they got quesstion right 
      alert ('Correct! You get 100 pesos!');
     // if so, add score 
    points += 100;
    }; 
  if (answer !== questionBank[key]) {
    alert('Wrong!')}; 
  }
  return points
}

const user1Result = askingQuestions (user1, database); 

const endGame = input => {
  if (input > 0) {alert (`Congrats you have finished the game! You won ${input} pesos!!`)}
  else {alert('You suck at this game, please try again!')}
}

endGame(user1Result); 


Creator.prototype.increment = function() { this.points + 100}
// UserCreator.prototype.noChange = function() { this.points + 0}
// UserCreator.prototype.whenLose = function() {alert ('WRONG! YOU LOST')}
// UserCreator.prototype.whenWin = function() {alert ('NICE! YOU WON')}






// functions
  // 
  // when user have 0 points, alert them to buy more 
  // we provide user the choices for queston 
  // let user decide how many points they want to gamble 
  // ask user a question
  // compare user answer to our database 


  






























// function numOfPoints (user) {
//   // if user has no points left, tell user to get more points instead of running below code block 
//   // first alert user how many points they have 
//   alert(`${user['name']}, you currently have ${user['points']} points`)
// // promt user to pick the amount of points they want to gamble this round
//   let pointsToGamble = prompt("How many points do you want to gamble this round?",' '); 
//   if (pointsToGamble > 10) {throw new Error ('Please pick an amount between 1 and 10!')}
// // return number of points 
//   return pointsToGamble; 
// }
// function askingQuestion (obj) {
//   let questionAnswered = 0; 
//   let result; 
//   return () => {
//     //reset questions once all question been answered 
//     if (questionAnswered === Object.keys(obj).length) {questionAnswered = 0; }
//     let answer = prompt (Object.keys(obj)[questionAnswered], ' ')
//     if (answer === obj[Object.keys(obj)[questionAnswered]]) {
//       result = 'Correct'
//     } else {
//       result =  'Incorrect'
//     }
//     questionAnswered ++; 
//     return result; 
//   }
// }

// console.log(askingQuestion (database))