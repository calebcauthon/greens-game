function AnswerSheetService() {
  this.chooseRightAnswer = function() {
    this.rightAnswersTally++;
  };

  this.rightAnswersTally = 0;

  return this;
}