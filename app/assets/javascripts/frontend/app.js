var Quiz = new Marionette.Application();

Quiz.navigate = function(route, options) {
  options || (options = {});
  Backbone.history.navigate(route, options);
};

Quiz.getCurrentRoute = function() {
  return Backbone.history.fragment;
};

Quiz.on('before:start', function() {
  var RegionContainer = Marionette.LayoutView.extend({
    el: '#app-container',
    regions: {
      header: '#header-region',
      main: '#main-region'
    }
  });

  Quiz.regions = new RegionContainer();

});


Quiz.on('start', function(){
  if(Backbone.history){
    Backbone.history.start();

    console.log('current route ', this.getCurrentRoute());

    if(this.getCurrentRoute() === ''){
      Quiz.trigger('home');
    }
  }
});