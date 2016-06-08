Quiz.module('GameApp.Question', function(Question, Quiz, Backbone, Marionette, $, _){
  Question.View = Marionette.ItemView.extend({
    template: '#question-tpl',
    className: 'col-md-6 card',
    initialize: function(question) {
      this.model = question;
    },
    events: {
      'click button': 'submitAnswer'
    },
    onDomRefresh: function() {
      this.$el.find('textarea').wysihtml5({
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

      var el = this.$el;
      setTimeout(function() {
        el.addClass('flipped');
      }, 0);
    },
    submitAnswer: function(e) {
      e.preventDefault();
      var form = Backbone.Syphon.serialize(this);

      if(form.user_answer === undefined || form.user_answer === '') {
        alert('please fill your answer');
        return;
      }

      var data = this.model.attributes;
      data.user_answer = form.user_answer;
      this.trigger('question:guess', data);
    }
  });
});
