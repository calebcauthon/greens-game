describe("A suite", function() {
  [1,8,12].map(function(thisNumber) {

    it("contains spec with an expectation", function() {
      var service = AnswerSheetService();

      expect(service.rightAnswersTally).toBe(0);

      for(var i = 0; i < thisNumber; i++) {
        service.chooseRightAnswer();
      }

      expect(service.rightAnswersTally).toBe(thisNumber);
    });

  });
});