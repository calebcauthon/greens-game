describe("A suite", function() {
  it("contains spec with an expectation", function() {
    var service = AnswerSheetService();

    expect(service.rightAnswersTally).toBe(0);
    service.chooseRightAnswer();
    service.chooseRightAnswer();

    expect(service.rightAnswersTally).toBe(2);
  });
});