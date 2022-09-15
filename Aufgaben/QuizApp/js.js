
const bookmarks = document.querySelectorAll("[data-js='bookmark']");
const showAnswersButton = document.querySelector('[data-js="showAnswer"]');
const answerField = document.querySelector('[data-js="answerField"]');


bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("quiz-card--active");
    });
  });

const showAnswer = () => { answerField.classList.toggle('quiz-card__answer--hidden') };

showAnswersButton.addEventListener('click', showAnswer);




