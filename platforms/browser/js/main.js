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
		}



		var position = navigator.geolocation.getCurrentPosition(function(p) {
		    alert('it works');
            $('body').prepend('Latitude: ' + p.coords.latitude + '\n');
		});


		// $('body').prepend('Latitude: '          + position.coords.latitude          + '\n' +
		//   'Longitude: '         + position.coords.longitude         + '\n' +
		//   'Altitude: '          + position.coords.altitude          + '\n' +
		//   'Accuracy: '          + position.coords.accuracy          + '\n' +
		//   'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		//   'Heading: '           + position.coords.heading           + '\n' +
		//   'Speed: '             + position.coords.speed             + '\n' +
		//   'Timestamp: '         + position.timestamp                + '\n');
		// });


    }
};
