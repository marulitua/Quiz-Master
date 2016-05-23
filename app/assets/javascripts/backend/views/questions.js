QuestionManager.Views.Questions = Marionette.CompositeView.extend({
  template: '#tpl-questions',
  childView: QuestionManager.Views.Question,
  itemViewContainer: '.questions-container',
  triggers: {
    'click .add-question-btn': 'addQuestion:clicked'
  }
});
