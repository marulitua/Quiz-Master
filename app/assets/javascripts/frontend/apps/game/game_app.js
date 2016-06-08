Quiz.module('GameApp', function(GameApp, Quiz, Backbone, Marionette, $, _){
  GameApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'play_ground': 'startGame'
    }
  });

  var API = {
    startGame: function(){
      GameApp.Question.Controller.showQuestion();
    },
    showSummary: function(data) {
      GameApp.Summary.Controller.showSummary(data);
    }
  };

  Quiz.on('game:start', function(){
    Quiz.navigate('play_ground');
    API.startGame();
  });

  GameApp.on('game:summary', function(data){
    API.showSummary(data);
  });

  GameApp.on('start', function(){
    GameApp.Question.Controller.initialize();
    new GameApp.Router({
      controller: API
    });
  });
});