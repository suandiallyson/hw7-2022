var video;
let volume = 100;
let totalTime = 67.4;
let speed = 1;
let muted = false;

window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	video.playbackRate = speed;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerHTML = volume + "%";
});

 document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	speed = speed * .9;
	video.playbackRate = speed;
	console.log(speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	speed = speed / .9;
	video.playbackRate = speed;
	console.log(speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime >= (totalTime - 10)) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 10;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!muted) {
		muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
	}
	else {
		muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	volume = document.querySelector("#slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove("video");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	video.classList.add("video");
});
