Quiz.module("HomeApp", function(HomeApp, Quiz, Backbone, Marionette, $, _){
  HomeApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "/" : "showHome"
    }
  });

  var API = {
    showHome: function(){
      HomeApp.Show.Controller.showHome();
      Quiz.execute("set:active:header", "");
    }
  };

  Quiz.on("home", function(){
    Quiz.navigate("/");
    console.log("home got tiggered");
    API.showHome();
  });

  HomeApp.on("start", function(){
    new HomeApp.Router({
      controller: API
    });
  });

});