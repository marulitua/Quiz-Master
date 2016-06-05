Quiz.module("AboutApp.Show", function(Show, Quiz, Backbone, Marionette, $, _){
  Show.Controller = {
    showAbout: function(){
      var view = new Show.Message();
      Quiz.regions.main.show(view);
    }
  };
});
