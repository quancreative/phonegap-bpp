/*
 */
var pageManager = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        // this.receivedEvent();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        pageManager.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        $('.nav a').click(function(event){
            event.preventDefault();
            var $this = $(this);
            var href = $this.attr('href');

            $('.page').removeClass('active');
            $(href).addClass('active');

            $('.nav a').removeClass('active');
            $this.addClass('active');

            console.log(href);
        });
    }
};
