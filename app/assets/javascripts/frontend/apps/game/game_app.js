Quiz.module('GameApp', function(GameApp, Quiz, Backbone, Marionette, $, _){
  GameApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'start_game': 'startGame',
      'end_game': 'endGame',
    }
  });

  var API = {
    startGame: function(){
      GameApp.Question.Controller.showQuestion();
      // Quiz.execute('set:active:header', 'home');
    },
    endGame: function(){
      GameApp.Question.Controller.showEnd();
      // Quiz.execute('set:active:header', 'home');
    },
    summaryGame: function() {
      GameApp.Summary.Controller.showSummary();
    }
  };

  Quiz.on('game:start', function(){
    Quiz.navigate('start_game');
    API.startGame();
  });

  Quiz.on('game:end', function(){
    Quiz.navigate('end_game');
    API.endGame();
  });

  Quiz.on('game:guess', function(data) {

    GameApp.Question.Controller.showQuestion();
    // somewhere else in the application, use the command
    // --------------------------------------------------

    var signForm = Backbone.AjaxCommands.get("guessQuestion");

    signForm.on("success", function(response){
      // handle success here
      console.log('response', response);
    });

    signForm.on("error", function(response){
      // handle failure here
      console.log('server error');
    });

    // execute the command and send this data with it
    signForm.execute(data);

  });

  GameApp.on('start', function(){
    GameApp.Question.Controller.initialize();
    new GameApp.Router({
      controller: API
    });
  });
});