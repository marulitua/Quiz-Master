Quiz.module('GameApp.Summary', function(Summary, Quiz, Backbone, Marionette, $, _){
  Summary.GuessView = Marionette.ItemView.extend({
    template: '#tpl-guess',
    tagName: 'li',
    className: 'media col-md-6 col-lg-4',
    // triggers: {
    //   'click .delete-contract': 'delete:clicked',
    //   'click .edit-contract': 'edit:clicked'
    // },
    // events: {
    //   'click button': 'submitAnswer'
    // }
    onDomRefresh: function() {
        this.$el.find('.user_answer').html(this.model.attributes.user_answer);
    }
  });
});