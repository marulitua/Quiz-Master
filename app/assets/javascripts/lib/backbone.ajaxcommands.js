// Backbone.AjaxCommands
// ---------------------

// got from https://gist.github.com/derickbailey/2595175#file-backbone-ajaxcommands-js
// add URL param parse feature

Backbone.AjaxCommands = (function (Backbone, $, _) {
    var Commands = {};

    // Private data
    // ------------

    var commandList = {};

    // Public API
    // ----------

    Commands.register = function (commandName, options) {
        commandList[commandName] = options;
    }

    Commands.get = function (commandName) {
        var options = commandList[commandName];
        options = options || {};
        options = _.clone(options);
        var command = new Commands.Command(commandName, options);
        return command;
    };

    // Command Type
    // -------------------

    Commands.Command = function (name, options) {
        this.name = name;
        this.options = options
    };

    _.extend(Commands.Command.prototype, Backbone.Events, {
        execute: function (data) {
            var that = this;

            var config = this.getAjaxConfig(this.options, data);

            this.trigger("before:execute");

            console.log('config', config);

            var request = $.ajax(config);
            request.done(function (response) {
                that.trigger("success", response);
            });

            request.fail(function (response) {
                that.trigger("error", response);
            });

            request.always(function (response) {
                that.trigger("complete", response);
            });
        },

        getAjaxConfig: function (options, data) {
            var url = this.getUrl(options, data);
            console.log('url got', url);
            var ajaxConfig = {
                type: "GET",
                dataType: "JSON",
            };

            _.extend(ajaxConfig, options);
            ajaxConfig.data = data;
            ajaxConfig.url = url;

            return ajaxConfig;
        },

        getUrl: function (options, data) {

            var url = options.url;

            //parse param
            _.each(_.keys(data), function(i) {
                if(!_.isFunction(i) && data[i] != '' && data[i] != null) {
                    url = url.replace('{'+i+'}', data[i]);
                    console.log(url)
                }
            });
            console.log('final url = '+url);

            return url;
        }
    });

    return Commands;
})(Backbone, $, _);