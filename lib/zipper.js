// Just an example from the docs for now.
// Will add the actual splitting after. 

var ffmpeg = require('ffmpeg');

try {
	new ffmpeg('/path/to/your_movie.avi', function (err, video) {
		if (!err) {
			console.log('The video is ready to be processed');
		} else {
			console.log('Error: ' + err);
		}
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}