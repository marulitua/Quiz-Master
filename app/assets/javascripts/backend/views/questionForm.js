QuestionManager.Views.QuestionForm = Marionette.ItemView.extend({
  template: '#tpl-new-question',

  ui: {
    questionInput: '.question-question-input',
    answerInput: '.question-answer-input',
    publishInput: '.question-answer-publish'
  },
  events: {
    'submit .contract-form': 'onFormSubmit',
    'click input.question-answer-publish': 'checkboxUpdate'
  },
  triggers: {
    'click .form-cancel-btn': 'form:canceled'
  },
  checkboxUpdate: function(e) {
    var e = $(e.target);
    if(e.is(':checked')) {
      this.model.attributes.published_at = 'true';
      e.val('true');
    }
    else {
      this.model.attributes.published_at = null;
      e.val('');
    }
  },
  serializeData: function() {
    return _.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    });
  },
  onRender: function() {
    if(this.model.attributes.published_at != null && this.model.attributes.published_at != '') {
      this.ui.publishInput.prop( "checked", true );
    }
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
