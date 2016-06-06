Quiz.module('HomeApp.Show', function(Show, Quiz, Backbone, Marionette, $, _){
  Show.Message = Marionette.ItemView.extend({
    template: '#tpl-home',
    events: {
      'click button': 'redirectGame'
    },

    redirectGame: function(e) {
      // e.preventDefault();
      Quiz.trigger('game:start');
      console.log('startGame');
      // Quiz.navigate('start_game');
    }
  });
});
