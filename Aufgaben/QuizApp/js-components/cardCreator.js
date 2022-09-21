import { formHandler } from "./formHandler.js";

const questionCardContent = [
  {
    question: 'What property flips the axes in flexbox...1',
    answer: 'test1'
  },
  {
    question: 'What property flips the axes in flexbox...2',
    answer: 'test2'
  },
  {
    question: 'What property flips the axes in flexbox...3',
    answer: 'test3'
  },
  {
    question: 'What property flips the axes in flexbox...4',
    answer: 'test4'
  },
  {
    question: 'What property flips the axes in flexbox...5',
    answer: 'test5'
  }
]


export function cardCreator(allFormData) {
  //questionCardContent.forEach(({ question, answer }) => {
    const quizSection = document.querySelector('section');
    const quizCard = document.createElement('div');
    quizCard.classList.add('quiz-card');
    quizSection.append(quizCard);

    const quizCardIcon = document.createElement('div');
    quizCardIcon.classList.add('quiz-card-icon');
    quizCardIcon.classList.add('quiz-card--active');

    quizCardIcon.innerHTML = `<svg height="40" width="40" data-js="bookmark">
  <polygon points="0,0 40,0 40,40 20,20 0,40" />
  </svg>`;
    quizCard.append(quizCardIcon);

    const quizCardQuestion = document.createElement('div');
    quizCardQuestion.classList.add('quiz-card-question');
    quizCard.append(quizCardQuestion);

    const theQuestion = document.createElement('p');
    theQuestion.classList.add('quiz-card-question__headline');
    theQuestion.innerText = allFormData.yourQuestion;
    quizCardQuestion.append(theQuestion);

    const theAnswer = document.createElement('p');
    theAnswer.classList.add('quiz-card__answer--hidden');
    theAnswer.innerText = allFormData.yourAnswer;
    quizCardQuestion.append(theAnswer);

    const quizCardBtn = document.createElement('button');
    quizCardBtn.classList.add('quiz-card-button');
    quizCardBtn.innerText = "Show Answer"
    quizCard.append(quizCardBtn);

    const quizCardBookmark = document.createElement('div');
    const aLinkHtml = document.createElement('a');
    const aLinkFlex = document.createElement('a');
    const aLinkCss = document.createElement('a');

    quizCardBookmark.classList.add('quiz-card-bookmark');
    aLinkHtml.classList.add('quiz-card-bookmark-Tag');
    aLinkFlex.classList.add('quiz-card-bookmark-Tag');
    aLinkCss.classList.add('quiz-card-bookmark-Tag');

    aLinkHtml.innerText = "#html";
    aLinkFlex.innerText = "#flexbox";
    aLinkCss.innerText = "#css";

    quizCard.append(quizCardBookmark);
    quizCardBookmark.append(aLinkHtml);
    quizCardBookmark.append(aLinkFlex);
    quizCardBookmark.append(aLinkCss);

    quizCardBtn.addEventListener('click', () => {
      theAnswer.classList.toggle('quiz-card__answer--hidden');
    })

    quizCardIcon.addEventListener("click", () => {
      quizCardIcon.classList.toggle("quiz-card--active");
    });
 // })
}
