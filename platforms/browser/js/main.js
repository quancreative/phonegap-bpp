/**
 * Created by bmcveigh on 4/22/2016.
 */


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var main = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
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
        main.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
		// Display JS errors.
		window.onerror = function(message, url, lineNumber) {
		    alert(("Error: "+message+" in "+url+" at line "+lineNumber));
		};

        $('.console-log').append('<div>no errors up until this point</div>');
        if (navigator.geolocation) {
            var position = navigator.geolocation.getCurrentPosition(function(p) {
            //$('.console-log').append('<div>it works</div>');
            //$('body').prepend('<div style="font-size: 5rem; color: red;">Latitude: ' + p.coords.latitude + '</div>\n');
            $('.console-log').prepend('<div style="color: red; font-size: 5rem">Latitude: '          + p.coords.latitude          + '\n' +
                'Longitude: '         + p.coords.longitude         + '\n<br />' +
                'Altitude: '          + p.coords.altitude          + '\n<br />' +
                'Accuracy: '          + p.coords.accuracy          + '\n<br />' +
                'Altitude Accuracy: ' + p.coords.altitudeAccuracy  + '\n<br />' +
                'Heading: '           + p.coords.heading           + '\n<br />' +
                'Speed: '             + p.coords.speed             + '\n<br />' +
                'Timestamp: '         + p.timestamp                + '\n</div>');
            }, function(error) {
                $('.console-log').append('<div>code: '    + error.code    + '<br />' +
                    'message: ' + error.message + '</div>');
            }, {timeout: 5000});
        } else {
            $('.console-log').append("<div>Your browser does not support Geolocation!</div>");
        }


    }
};
