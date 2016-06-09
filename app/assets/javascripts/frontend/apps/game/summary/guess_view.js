Quiz.module('GameApp.Summary', function(Summary, Quiz, Backbone, Marionette, $, _){
  Summary.GuessView = Marionette.ItemView.extend({
    template: '#tpl-guess',
    className: function() {

        var classes = 'col-md-4 card-guess';
        if(this.model.attributes.is_true) {
            classes = classes + ' true';
        }
        else {
            classes = classes + ' false';
        }

        return classes;
    },
    tagName: 'li',
    onDomRefresh: function() {
        this.$el.find('.user_answer').html(this.model.attributes.user_answer);
    }
  });
});