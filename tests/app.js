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