describe("Question", function() {
  it('has a .rightAnswer()', function() {
    var q = new Question();
    expect(q.rightAnswer).toBeDefined();
  });

  ['asdf', 88, 'dj2'].map(function(rightAnswerText) {
    it('knows the correct answer', function() {
      var q = new Question();

      q.choices = [];

      for(var i = 0; i < Math.floor(Math.random() * 100); i++) {
        q.choices.push({ text: '0000' });
      }

      q.choices.push({ text: rightAnswerText, isCorrect: true });

      for(var i = 0; i < Math.floor(Math.random() * 100); i++) {
        q.choices.push({ text: '1111' });
      }

      expect(q.rightAnswer()).toBe(rightAnswerText);
    });
  });
});

describe("AnswerSheetService", function() {
  [1,8,12].map(function(thisNumber) {

    it("increments the right answer tally by 1", function() {
      var service = AnswerSheetService();

      expect(service.rightAnswersTally).toBe(0);

      for(var i = 0; i < thisNumber; i++) {
        service.chooseRightAnswer();
      }

      expect(service.rightAnswersTally).toBe(thisNumber);
    });

  });

  [1,8,12].map(function(thisNumber) {

    it("increments the wrong answer tally by 1", function() {
      var service = AnswerSheetService();

      expect(service.wrongAnswersTally).toBe(0);

      for(var i = 0; i < thisNumber; i++) {
        service.chooseWrongAnswer();
      }

      expect(service.wrongAnswersTally).toBe(thisNumber);
    });

  });
});