QuestionManager.Collections.Questions = Backbone.Collection.extend({
  model: QuestionManager.Models.Question,
  localStorage: new Backbone.LocalStorage('questions')
});

// QuestionManager.Collections.Questions = Backbone.Model.extend({
//   url: '/api/v1/questions',
//   model: QuestionManager.Models.Question,
// })