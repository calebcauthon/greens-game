function AnswerSheetService() {
  this.chooseRightAnswer = function() {
    this.rightAnswersTally++;
  };

  this.chooseWrongAnswer = function() {
    this.wrongAnswersTally++;
  };

  this.rightAnswersTally = 0;
  this.wrongAnswersTally = 0;

  var answers = [];

  this.choose = function(choice_text, question) {
    answers.push({ text: choice_text, question: question });
    
    if(question.rightAnswer() == choice_text) {
      this.chooseRightAnswer();
    } else {
      this.chooseWrongAnswer();
    }
  }

  this.getAllAnswers = function() {
    return answers;
  }

  return this;
}