Quiz.module("AboutApp.Show", function(Show, Quiz, Backbone, Marionette, $, _){
  Show.Message = Marionette.ItemView.extend({
    template: "#about-message"
  });
});
