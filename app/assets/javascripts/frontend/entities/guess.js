Quiz.module('Entities', function(Entities, Quiz, Backbone, Marionette, $, _) {
  Entities.Guess = Backbone.Model.extend({
     defaults: {
      question_id: null,
      question: '',
      answer: '',
      user_answer: null,
      is_true: false,
    },
    initialize: function(form, response){
      if(form.id != response.id) {
        console.log('something\'s wrong');
      }
      this.attributes.question_id = form.id;
      this.attributes.question = form.question;
      this.attributes.answer = response.answer;
      this.attributes.user_answer = form.user_answer;
      this.attributes.is_true = 'true' === response.result;
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