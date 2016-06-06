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

  GameApp.on('start', function(){
    GameApp.Question.Controller.initialize();
    new GameApp.Router({
      controller: API
    });
  });
});