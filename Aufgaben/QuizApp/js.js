const questionCardContent = [
  {
    question: 'What property flips the axes in flexbox...',
    answer: 'No'
  },
  {
    question: 'What day is today?',
    answer: 'No'
  },
  {
    question: 'What day is today?',
    answer: 'No'
  },
  {
    question: 'What day is today?',
    answer: 'No'
  }

]

questionCardContent.forEach(question => {
  const quizSection = document.querySelector('section');
  const quizCard = document.createElement('div');
  quizCard.classList.add('quiz-card');
  quizSection.append(quizCard);

  const quizCardIcon = document.createElement('div');
  quizCardIcon.classList.add('quiz-card-icon');
  quizCardIcon.innerHTML = `                    <svg height="40" width="40" class="quiz-card--active" data-js="bookmark">
<polygon points="0,0 40,0 40,40 20,20 0,40" />
</svg>`;
  quizCard.append(quizCardIcon);

  const quizCardQuestion = document.createElement('div');
  quizCardQuestion.classList.add('quiz-card-question');
  quizCard.append(quizCardQuestion);

  const theQuestion = document.createElement('p');
  theQuestion.classList.add('quiz-card-question__headline');
  theQuestion.innerText = question.question;
  quizCardQuestion.append(theQuestion);


  const theAnswer = document.createElement('p');
  theAnswer.classList.add('quiz-card__answer--hidden');
  theAnswer.innerText = question.answer;
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
})

const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("quiz-card--active");
  });
});