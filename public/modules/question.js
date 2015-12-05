function Question() {};

Question.prototype.rightAnswer = function() {
  for(var i = 0; i < this.choices.length; i++) {
    if(this.choices[i].isCorrect)
      return this.choices[i].text;
  }
}