var QuestionManager = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

QuestionManager.addRegions({
  mainRegion: '.main-container'
});

QuestionManager.addInitializer(function(data) {
  var questions = new QuestionManager.Collections.Questions(),
      router = new QuestionManager.Router(),
      controller = new QuestionManager.Controller({
        questions: questions,
        router: router,
        mainRegion: this.mainRegion
      });

  router.processAppRoutes(controller, {
    'home': 'showHome',
    'questions': 'showQuestions',
    'questions/new': 'newQuestion',
    'questions/edit/:id': 'editQuestion'
  });
});

QuestionManager.on('start', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});