Quiz.module('GameApp.Question', function(Question, Quiz, Backbone, Marionette, $, _){
  Question.Controller = {
    showQuestion: function(){

      if(this.questions === undefined) {
        Quiz.navigate('#');
        return;
      }

      if(this.questions.length == 0) {
        this.showSummary();
        return;
      }

      var current_question = this.questions.pop();
      console.log('current_question', current_question);
      var view = new Question.View(current_question);
      Quiz.regions.main.show(view);

      view.on("question:guess", function(data){
        Question.Controller.showQuestion();
        Question.Controller.checkAnswer(data);
      });
    },
    showSummary:function(){
      if(this.guesses === undefined) {
        Quiz.navigate('#');
        return;
      }

      var guesses = Question.Controller.guesses;
      Quiz.GameApp.trigger('game:summary', guesses);
    },
    checkAnswer:function(data) {
      var isTrue = Backbone.AjaxCommands.get("guessQuestion");

      isTrue.on("success", function(response){
        // handle success here
        // console.log('response', response);
        var guess = _.extend(data, response);
        Question.Controller.guesses.push(guess);
        console.log('this guess', Question.Controller.guesses);
      });

      isTrue.on("error", function(response){
        // handle failure here
        console.log('server error');
      });

      // execute the command and send this data with it
      isTrue.execute(data);
    },
    initialize: function() {
      var guesses = Quiz.request('guess:entities');
      Question.Controller.guesses = guesses;

      var fetchingQuestions = Quiz.request("question:entities");
      $.when(fetchingQuestions).done(function(questions){
        console.log('bind questions to controller');
        Question.Controller.questions = questions;
      });
    }
  };
});