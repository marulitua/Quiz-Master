Quiz.module("HomeApp.Show", function(Show, Quiz, Backbone, Marionette, $, _){
  Show.Message = Marionette.ItemView.extend({
    template: "#tpl-home"
  });
});
