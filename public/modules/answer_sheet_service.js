function AnswerSheetService() {
  this.chooseRightAnswer = function() {
    this.rightAnswersTally++;
  };

  this.chooseWrongAnswer = function() {
    this.wrongAnswersTally++;
  };

  this.rightAnswersTally = 0;
  this.wrongAnswersTally = 0;

  this.nextQuestionIndex = function() {
    return this.rightAnswersTally + this.wrongAnswersTally + 1;
  }

  this.choose = function(question, choice) {
    if(question.rightAnswer() == choice) {
      this.chooseRightAnswer();
    } else {
      this.chooseWrongAnswer();
    }
  }

  return this;
}