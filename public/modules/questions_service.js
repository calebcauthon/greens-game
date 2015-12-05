function QuestionService() {
  
  this.addQuestion = function(templateUrl, choices) {
    var question = new Question();
    question.choices = choices;
    question.templateUrl = templateUrl;

    questions.push(question);
  }

  this.get = function(index) {
    return questions[index];
  };

  var questions = [];

  return this;
}