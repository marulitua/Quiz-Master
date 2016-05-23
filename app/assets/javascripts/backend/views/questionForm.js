QuestionManager.Views.QuestionForm = Marionette.ItemView.extend({
  template: '#tpl-new-question',

  ui: {
    questionInput: '.question-question-input',
    answerInput: '.question-answer-input',
    publishInput: '.question-answer-publish'
  },

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  triggers: {
    'click .form-cancel-btn': 'form:canceled'
  },

  serializeData: function() {
    return _.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    });
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      question: this.ui.questionInput.val(),
      answer: this.ui.answerInput.val(),
      published_at: this.ui.publishInput.val()
    });
  }
});
