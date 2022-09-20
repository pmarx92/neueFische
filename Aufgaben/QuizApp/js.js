const questionCardContent = [
  {
    question: 'What property flips the axes in flexbox...',
    answer: 'No'
  },
  {
    question: 'What day is today?',
    answer: 'No'
  }
]
/* Creates the Card DOM Elements */
questionCardContent.forEach(question => {
  const section = document.createElement('section');
  const main = document.querySelector('main');
  const questionCard = document.querySelectorAll('[data-js="questionCard"]');
  const answerField = document.createElement('p');

  section.classList.add('quiz-section');
  main.append(section);

  section.innerHTML = `<div class="quiz-card">
<div class="quiz-card-icon">
   <svg height="40" width="40" class="quiz-card--active" data-js="bookmark">
       <polygon points="0,0 40,0 40,40 20,20 0,40" />
   </svg>
</div>
<div class="quiz-card-question" data-js="questionCard"></div>
<button class="quiz-card-button" data-js="showAnswer">Show Answer</button>
<div class="quiz-card-bookmark">
   <a href="#html">#html</a>
   <a href="#flexbox">#flexbox</a>
   <a href="#css">#css</a>
</div>
</div>`

  const bookmarks = document.querySelectorAll("[data-js='bookmark']");
  const showAnswersButton = document.querySelector('[data-js="showAnswer"]');

  /* Inserts the Questions */
  answerField.textContent = question.question;
  answerField.classList.add('quiz-card__answer--hidden');
  questionCard.append(answerField);


  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("quiz-card--active");
    });
  });

  questionCard.forEach(card => {
    const btn = card.querySelector('button');
    console.log(btn);
    showAnswersButton.addEventListener("click", () => {

      answerField.classList.toggle("quiz-card__answer--hidden");

    });
  })
})



/* answerField.innerText = question.question;
answerField.classList.add('quiz-card__answer--hidden');

questionCard.append(answerField);

showAnswersButton.forEach(button => {
  button.addEventListener("click", () => {
    answerField.classList.toggle("quiz-card__answer--hidden");
  });
})
const cardSection = document.querySelector('[data-js="cardSection"]');
const divWrappedAround = document.createElement('div');

/* ICON SECTION */
/* cardSection.innerHTML = `< div class="quiz-card" >
<div class="quiz-card-icon">
   <svg height="40" width="40" class="quiz-card--active" data-js="bookmark">
       <polygon points="0,0 40,0 40,40 20,20 0,40" />
   </svg>
</div>
<div class="quiz-card-question" data-js="questionCard">
<p class="" data-js="data-js=answer"></p>
</div>
<button class="quiz-card-button" data-js="showAnswer">Show Answer</button>
<div class="quiz-card-bookmark">
   <a href="#html">#html</a>
   <a href="#flexbox">#flexbox</a>
   <a href="#css">#css</a>
</div>
</ > ` */