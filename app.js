// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const questionSection = document.getElementById('question-section');
const userQuestion = document.getElementById('user-question');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');

const answers = [
  'Fo Sho',
  'Maybz',
  'Fat Chance',
  'Mos Def',
  'Nahhh',
];

askButton.addEventListener('click', () => {
  const question = userQuestion.value;
  questionDisplay.textContent = question;
  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];
  answerDisplay.textContent = randomAnswer;
  questionSection.classList.add('hidden');
  answerSection.classList.remove('hidden');
});

