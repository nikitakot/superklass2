// background colors hashes
var colors = ['#1bedff', '#50c878', '#911bff', '#ff80bc', '#ffb21e'];
var index = Math.floor(Math.random() * colors.length);
$('body').css('background-color', colors[index]);

var videoIndex = Math.floor(Math.random() * 22);
var video_block = $('#video');
$('#mp4').attr('src', './videos/Videoclip' + videoIndex + '.mp4');
$('#webm').attr('src', './videos/Videoclip' + videoIndex + '.webm');
video_block.load();
