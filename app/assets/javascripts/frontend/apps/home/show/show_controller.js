Quiz.module("HomeApp.Show", function(Show, Quiz, Backbone, Marionette, $, _){
  Show.Controller = {
    showHome: function(){
      var view = new Show.Message();
      Quiz.regions.main.show(view);
    }
  };
});