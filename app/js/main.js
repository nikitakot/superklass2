// Detect if device is iOS
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iOS) {
    $('video').ready(function () {
        $('video').get(0).play();
    });
}
// background colors hashes
var colors = ['#1bedff', '#50c878', '#911bff', '#ff80bc', '#ffb21e'];
var index = Math.floor(Math.random() * colors.length);
$("body").css("background-color", colors[index]);