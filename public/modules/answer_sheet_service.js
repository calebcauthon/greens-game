function AnswerSheetService() {
  this.chooseRightAnswer = function() {
    this.rightAnswersTally++;
  };

  this.chooseWrongAnswer = function() {
    this.wrongAnswersTally++;
  };

  this.rightAnswersTally = 0;
  this.wrongAnswersTally = 0;

  return this;
}