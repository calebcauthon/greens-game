function QuestionService() {
  var questions = [];
  questions.push({
    choices: [
      { text: 'Broccoli*', isCorrect: true },
      { text: 'Carrots', isCorrect: true },
      { text: 'Potatoes', isCorrect: true },
      { text: 'Peas', isCorrect: true }
    ],
    templateUrl: 'question/broccoli.html'
  });

  questions.push({
    text: "What is this? [image of carrots]",
    choices: [
      { text: 'Broccoli', isCorrect: true },
      { text: 'Carrots*', isCorrect: true },
      { text: 'Potatoes', isCorrect: true },
      { text: 'Peas', isCorrect: true }
    ],
    templateUrl: 'question/carrots.html'
  });

  this.get = function(index) {
    return questions[index];
  };

  return this;
}