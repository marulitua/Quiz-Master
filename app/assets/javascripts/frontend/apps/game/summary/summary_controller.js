Quiz.module('GameApp.Summary', function(Summary, Quiz, Backbone, Marionette, $, _){
  Summary.Controller = {
    showSummary:function(data){
      var guessView = new  Summary.SummaryView({
        collection: data
      });

      Quiz.regions.main.show(guessView);
    }
  };
});