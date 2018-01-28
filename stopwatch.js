/**
 * 
 */

var start_time = Math.round((new Date()).getTime() / 1000);

function update_time() {
	var stopwatch = document.getElementById('stopwatch');
	var now_time = Math.round((new Date()).getTime() / 1000);
	var updated_time = now_time - start_time;

	if (updated_time !== 0){ stopwatch.innerHTML = updated_time; }
}

setInterval( update_time, 250 );