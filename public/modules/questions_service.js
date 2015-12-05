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
  this.addQuestion('question/broccoli.html', [
    { text: 'Broccoli*', isCorrect: true },
    { text: 'Carrots' },
    { text: 'Potatoes' },
    { text: 'Peas' }
  ]);

  this.addQuestion('question/carrots.html', [
    { text: 'Broccoli' },
    { text: 'Carrots*', isCorrect: true },
    { text: 'Potatoes' },
    { text: 'Peas' }
  ]);

  return this;
}