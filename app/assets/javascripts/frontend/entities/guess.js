Quiz.module('Entities', function(Entities, Quiz, Backbone, Marionette, $, _) {
  Entities.Guess = Backbone.Model.extend({
     defaults: {
      question_id: null,
      user_answer: null,
      is_true: false
    },
    initialize: function(question, user_answer){
      console.log('Guess model has been initialized.', question, user_answer);
      this.attributes.question_id = question.id;
      this.attributes.user_answer = user_answer;
    },
    check_answer: function() {

    }
  });

  Entities.GuessesCollection = Backbone.Collection.extend({
    model: Entities.Guess
  });

  var API = {
    getGuessesEntities: function(){
      var guesses = new Entities.GuessesCollection();

      return guesses;
    }
  };

  Quiz.reqres.setHandler('guess:entities', function(){
    return API.getGuessesEntities();
  });
})