QuestionManager.Views.Question = Marionette.ItemView.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: '#tpl-question',
  triggers: {
    'click .delete-contract': 'delete:clicked',
    'click .edit-contract': 'edit:clicked'
  }
});
