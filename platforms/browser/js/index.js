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
var app = {
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
        app.receivedEvent('deviceready');

        var push = PushNotification.init({
            "android": {
                "senderID": "1234567890"
            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"},
            "windows": {}
        });

        push.on('registration', function(data) {
            console.log("registration event");
            document.getElementById("regId").innerHTML = data.registrationId;
            console.log(JSON.stringify(data));
        });

        push.on('notification', function(data) {
            console.log("notification event");
            console.log(JSON.stringify(data));
            var cards = document.getElementById("cards");
            var card = '<div class="row">' +
                '<div class="col s12 m6">' +
                '  <div class="card darken-1">' +
                '    <div class="card-content black-text">' +
                '      <span class="card-title black-text">' + data.title + '</span>' +
                '      <p>' + data.message + '</p>' +
                '    </div>' +
                '  </div>' +
                ' </div>' +
                '</div>';
            cards.innerHTML += card;

            push.finish(function () {
                $('.console-log').append("<div>finish successfully called!</div>");
                console.log('finish successfully called');
            });
        });

        push.on('error', function(e) {
            $('.console-log').append("<div>Push error!</div>");
            console.log("push error");
        });

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // each object in the array consists of a key which refers to the source and
// the value which is the destination.
        var filestocopy = [{
            "resources/android/images/logo.png":
                "platforms/android/res/drawable/logo.png"
        }, {
            "resources/android/sounds/ring.mp3":
                "platforms/android/res/raw/ring.mp3"
        }, {
            "resources/ios/sounds/ring.caf":
                "platforms/ios/YourAppName/ring.caf"
        }, ];

        var fs = require('fs');
        var path = require('path');

// no need to configure below
        var rootdir = process.argv[2];

        filestocopy.forEach(function(obj) {
            Object.keys(obj).forEach(function(key) {
                var val = obj[key];
                var srcfile = path.join(rootdir, key);
                var destfile = path.join(rootdir, val);
                //console.log("copying "+srcfile+" to "+destfile);
                var destdir = path.dirname(destfile);
                if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
                    fs.createReadStream(srcfile).pipe(
                        fs.createWriteStream(destfile));
                }
            });
        });



    }
};
