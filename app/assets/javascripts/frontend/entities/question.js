Quiz.module('Entities', function(Entities, Quiz, Backbone, Marionette, $, _) {
  Entities.Question = Backbone.Model.extend({
    defaults: {
      id: '',
      question: ''
    },
  });

  Entities.QuestionsCollection = Backbone.Collection.extend({
    url: '/api/v1/frontend/questions',
    model: Entities.Question,
    comparator: 'id'
  });

  var API = {
    getQuestionsEntities: function(){
      var questions = new Entities.QuestionsCollection();
      var defer = $.Deferred();
      questions.fetch({
        success: function(data){
          defer.resolve(data);
        },
        error: function(data){
          defer.resolve(undefined);
        }
      });

      return defer.promise();
    }
  };

  Quiz.reqres.setHandler('question:entities', function(){
    return API.getQuestionsEntities();
  });

});