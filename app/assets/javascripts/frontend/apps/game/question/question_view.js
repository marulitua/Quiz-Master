Quiz.module('GameApp.Question', function(Question, Quiz, Backbone, Marionette, $, _){
  Question.View = Marionette.ItemView.extend({
    template: '#question-tpl',
    className: 'col-md-6 card',
    initialize: function(question) {
      this.model = question;
    },
    onDomRefresh: function() {
      // debugger;
      $('textarea').wysihtml5({
        toolbar: {
          'font-styles': false,
          'fa': true,
          'color': false,
          'emphasis': {
            'small': true
          },
          'blockquote': false,
          'lists': true,
          'html': false,
          'smallmodals': true,
          'image': false,
          'link': false
        }
      });
    }
  });
});
