QuestionManager.Collections.Questions = Backbone.Collection.extend({
  model: QuestionManager.Models.Question,
  url: '/api/v1/backend/questions',
  // localStorage: new Backbone.LocalStorage('questions')
});

// QuestionManager.Collections.Questions = Backbone.Model.extend({
//   model: QuestionManager.Models.Question,
// })