"use strict" ;

define(function (require) {
    "use strict" ;
    var map;
    var app = {
        // Application Constructor
        initialize: function () {
            this.bindEvents();
        },

        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function () {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        onDeviceReady: function () {
            setTimeout( function () {
                new MapView({ el: document.getElementById("map_canvas") });
            }, 5000);
        },
    };

    return app;
});
