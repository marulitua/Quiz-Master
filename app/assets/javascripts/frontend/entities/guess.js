Quiz.module('Entities', function(Entities, Quiz, Backbone, Marionette, $, _) {
  Entities.Guess = Backbone.Model.extend({
     defaults: {
      question_id: null,
      question: '',
      answer: '',
      user_answer: null,
      is_true: false,
    },
    initialize: function(data){
      this.attributes.question_id = data.id;
      this.attributes.question = data.question;
      this.attributes.answer = data.answer;
      this.attributes.user_answer = data.user_answer;
      this.attributes.is_true = ('true' === data.result);
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