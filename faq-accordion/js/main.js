const questionAndAnswerSections = document.querySelectorAll(".question-and-answer");

questionAndAnswerSections.forEach((section, index) => {
  section.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAnswer(section);
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = event.key === "ArrowUp" ? index - 1 : index + 1;
      const nextSection = questionAndAnswerSections[nextIndex];
      if (nextSection) {
        nextSection.focus();
      }
    }
  });

  section.addEventListener("click", () => {
    toggleAnswer(section);
  });
});

const toggleAnswer = (section) => {
  const expandIcon = section.querySelector(".expand-icon");
  const answer = section.querySelector(".answer");
  const isAnswerVisible = answer.style.display === "block";

  questionAndAnswerSections.forEach((otherSection) => {
    const otherExpandIcon = otherSection.querySelector(".expand-icon");
    const otherAnswer = otherSection.querySelector(".answer");

    if (otherAnswer !== answer) {
      otherAnswer.style.display = "none";
      otherExpandIcon.src = "./assets/images/icon-plus.svg";
    }
  });

  answer.style.display = isAnswerVisible ? "none" : "block";
  expandIcon.src = isAnswerVisible ? "./assets/images/icon-plus.svg" : "./assets/images/icon-minus.svg";

  if (!isAnswerVisible) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
