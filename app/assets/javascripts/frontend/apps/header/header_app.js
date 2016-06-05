Quiz.module("HeaderApp", function(Header, Quiz, Backbone, Marionette, $, _){
  var API = {
    listHeader: function(){
      Header.List.Controller.listHeader();
    }
  };

  Quiz.commands.setHandler("set:active:header", function(name){
    console.log('set header '+name)
    Quiz.HeaderApp.List.Controller.setActiveHeader(name);
  });

  Header.on("start", function(){
    API.listHeader();
  });
});
