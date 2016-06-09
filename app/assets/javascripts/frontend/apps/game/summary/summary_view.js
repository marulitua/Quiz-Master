Quiz.module('GameApp.Summary', function(Summary, Quiz, Backbone, Marionette, $, _){
  Summary.SummaryView = Marionette.CompositeView.extend({
    template: '#tpl-summary',
    childView: Summary.GuessView,
    childViewContainer: 'ul',
    triggers: {
      'click .add-question-btn': 'addQuestion:clicked'
    }
  });
});