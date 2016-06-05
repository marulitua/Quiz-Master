Quiz.module("HeaderApp.List", function(List, Quiz, Backbone, Marionette, $, _){
  List.Controller = {
    listHeader: function(){
      var links = Quiz.request("header:entities");
      var headers = new List.Headers({collection: links});

      headers.on("brand:clicked", function(){
        Quiz.trigger("home");
      });

      headers.on("childview:navigate", function(childView, model){
        var trigger = model.get("navigationTrigger");
        Quiz.trigger(trigger);
      });

      Quiz.regions.header.show(headers);
    },

    setActiveHeader: function(headerUrl){
      var links = Quiz.request("header:entities");
      console.log("headerUrl = "+headerUrl);
      var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
      headerToSelect.select();
      links.trigger("reset");
    }
  };
});
