function AnswerSheetService() {
  this.chooseRightAnswer = function() {
    this.rightAnswersTally++;
  };

  this.chooseWrongAnswer = function() {
    this.wrongAnswersTally++;
  };

  this.rightAnswersTally = 0;
  this.wrongAnswersTally = 0;

  this.choose = function(choice_text, question) {
    if(question.rightAnswer() == choice_text) {
      this.chooseRightAnswer();
    } else {
      this.chooseWrongAnswer();
    }
  }

  return this;
}