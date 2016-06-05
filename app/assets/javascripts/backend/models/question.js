QuestionManager.Models.Question = Backbone.Model.extend({
  defaults: {
    id: null,
    question: null,
    answer: null,
    published_at: null
  },
  initialize: function(){
      console.log('This model has been initialized.');
  }
});
