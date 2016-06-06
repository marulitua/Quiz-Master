Quiz.module('AboutApp', function(AboutApp, Quiz, Backbone, Marionette, $, _){
  AboutApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'about' : 'showAbout'
    }
  });

  var API = {
    showAbout: function(){
      AboutApp.Show.Controller.showAbout();
      Quiz.execute('set:active:header', 'about');
    }
  };

  Quiz.on('about:show', function(){
    Quiz.navigate('about');
    API.showAbout();
  });

  AboutApp.on('start', function(){
    new AboutApp.Router({
      controller: API
    });
  });
});
