var videoIndex = Math.floor(Math.random() * 22);
var video_block = $('#video')[0];
$('#mp4').attr('src', './videos/Videoclip' + videoIndex + '.mp4');
$('#webm').attr('src', './videos/Videoclip' + videoIndex + '.webm');
video_block.load();
