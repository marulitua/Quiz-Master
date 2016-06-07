Quiz.module('GameApp.Question', function(Question, Quiz, Backbone, Marionette, $, _){
  Question.View = Marionette.ItemView.extend({
    template: '#question-tpl',
    className: 'col-md-6',
    initialize: function(question) {
      this.model = question;
    },
    events: {
      'click button': 'submitAnswer'
    },
    onDomRefresh: function() {

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

      console.log('onRender addClass flipped');
      var el = this.$el;
      setTimeout(function() {
        el.addClass('card flipped');
      }, 0);
    },
    submitAnswer: function(e) {
      console.log(e);
      alert('Answer submited');
    }
  });
});
