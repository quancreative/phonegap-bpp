/**
 * Created by bmcveigh on 4/22/2016.
 */

app.initialize();

// Display JS errors.
window.onerror = function(message, url, lineNumber) {
    alert(("Error: "+message+" in "+url+" at line "+lineNumber));
}



var position = navigator.geolocation.getCurrentPosition(function(p) {
    alert('it works');
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
$('body').prepend('Latitude: ' + position.coords.latitude + '\n');
