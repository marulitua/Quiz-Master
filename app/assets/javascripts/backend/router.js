QuestionManager.Router = Marionette.AppRouter.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    this.navigate('home', {
      trigger: true,
      replace: true
    });
  }
});
