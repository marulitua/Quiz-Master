Quiz.module('GameApp.Question', function(Question, Quiz, Backbone, Marionette, $, _){
  Question.Controller = {
    showQuestion: function(){
      if(this.questions.length === 0) {
        this.showEnd();
      }

      var current_question = this.questions.pop();
      console.log('current_question', current_question);
      var view = new Question.View(current_question);
      Quiz.regions.main.show(view);
    },
    showEnd:function(){

    },
    initialize: function() {
      console.log("initialize question controller");

      var guesses = Quiz.request('guess:entities');
      this.guesses = guesses;

      var fetchingQuestions = Quiz.request("question:entities");
      $.when(fetchingQuestions).done(function(questions){
        console.log('bind questions to controller');
        Question.Controller.questions = questions;
      });
    }
  };
});