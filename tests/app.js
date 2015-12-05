describe("FirebaseService", function() {
  describe("createUser", function() {
    var mock_ref;

    it('pushes data', function() {
      mock_ref = jasmine.createSpyObj('ref', ['push', 'init']);
      var data = {};

      var service = FirebaseService(mock_ref);
      service.createUser(data);
      
      expect(mock_ref.push).toHaveBeenCalledWith(data);
    });
  });
});

describe("firebaseRef", function() {
  var factoryFn = firebaseRef();

  it("has init fn", function() {
    expect(factoryFn.init).toBeDefined();
  });

  it("has push", function() {
    expect(factoryFn.push).toBeDefined();
  });
});

describe("firebaseAsyncToQ", function() {
  it('exists', function() {
    expect(firebaseAsyncToQ).toBeDefined();
  });

  it('returns a .then(yes, no) if async_fn returns an ok response', function() {
    var mock_q = function(fn) {
      var result;
      var resolveOk = false;

      var resolve = function(value) { 
        result = value; 
        resolveOk = true;
      };
      var reject = function(value) { 
        result = value; 
        resolveOk = false;
      };

      fn(resolve, reject);

      return {
        then: function(fnOk, fnNotOk) {
          if(resolveOk)
            fnOk(result);
          else
            fnNotOk(result);
        }
      }
    }

    var isOK = false;
    var isNotOK = false;

    var factoryFn = firebaseAsyncToQ(mock_q);

    var callback = function() { isOK = true; };
    var firebase_style_async_fn = function(fn) {
      var err = false;
      fn(err);
    };

    factoryFn(firebase_style_async_fn).then(callback, function() {});

    expect(isOK).toBe(true);
  })

});

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
      var question = {}; // mock question
      var rightAnswer = {};

      question.rightAnswer = function() { return rightAnswer; };

      expect(service.rightAnswersTally).toBe(0);

      for(var i = 0; i < thisNumber; i++) {
        service.choose(rightAnswer, question);
      }

      expect(service.rightAnswersTally).toBe(thisNumber);
    });

  });

  [1,8,12].map(function(thisNumber) {

    it("increments the wrong answer tally by 1", function() {
      var service = AnswerSheetService();
      var question = {}; // mock question
      
      question.rightAnswer = function() { return {}; };

      expect(service.wrongAnswersTally).toBe(0);

      for(var i = 0; i < thisNumber; i++) {
        service.choose({}, question);
      }

      expect(service.wrongAnswersTally).toBe(thisNumber);
    });

  });
});