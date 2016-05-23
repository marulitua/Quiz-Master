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
        'questions': 'showQuestions',
        'questions/new': 'newQuestion',
        'questions/edit/:id': 'editQuestion'
      });

  // var questions = new QuestionManager.Collections.Questions();
  // // router = new QuestionManager.Router(),
  // var mainRegion = this.mainRegion;
  // questions.fetch({
  //     success: function(data) {
  //         console.log(data)
  //         var router = new QuestionManager.Router(),
  //         controller = new QuestionManager.Controller({
  //           questions: data.attributes,
  //           router: router,
  //           mainRegion: mainRegion
  //         });

  //         console.log('router established')

  //         router.processAppRoutes(controller, {
  //           'questions': 'showQuestions',
  //           'questions/new': 'newQuestion',
  //           'questions/edit/:id': 'editQuestion'
  //         });
  //     }
  // });
});

QuestionManager.on('start', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});