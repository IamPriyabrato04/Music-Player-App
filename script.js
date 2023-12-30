let song = document.getElementById("song");
let progress = document.getElementById("progress");
let audioSource = document.getElementById("audioSource");
let play = document.getElementById("play");
let nextSong = document.getElementById("nextSong");

// -----------------------------Song play-pause functionality-----------------------------
let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  song.play();
  play.classList.replace("fa-play", "fa-pause");
};

const pauseMusic = () => {
  isPlaying = false;
  song.pause();
  play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

// ------------------song like & dislike functionality---------------------------------
let like = document.getElementById("like");
let colorCheck = true;

const liked = () => {
  console.log("like clicked");
  like.style.color = "red";
  colorCheck = false;
};
const unliked = () => {
  console.log("Unlike clicked");
  like.style.color = "black";
  colorCheck = true;
};
like.addEventListener("click", () => {
  if (colorCheck) {
    liked();
  } else {
    unliked();
  }
});

//------------------------Volume Functionality section-------------------------------
let volume = document.getElementById("volume");
let isVolume = true;

const volume0 = () => {
  console.log("volume0");
  song.volume = 0.3;
  isVolume = false;
  volume.classList.replace("fa-volume-high", "fa-volume-xmark");
};

const volume1 = () => {
  console.log("volume1");
  song.volume = 1.0;
  isVolume = true;
  volume.classList.replace("fa-volume-xmark", "fa-volume-high");
};

volume.addEventListener("click", () => {
  if (isVolume) {
    volume0();
  } else {
    volume1();
  }
});

// ------------------------next song track playing functionality------------------------

let songsList = [
  "powerful-beat-121791.mp3",
  "glossy-168156.mp3",
  "abstract-fashion-pop-131283.mp3"
];

let currentTrackIndex = 0;
function changeToNextTrack() {

  if (currentTrackIndex < songsList.length) {

    audioSource.src = songsList[currentTrackIndex];
    console.log(songsList[currentTrackIndex]);

    song.load();
    song.play();
    currentTrackIndex++;
}
else{
    currentTrackIndex = 0;
}
}

nextSong.addEventListener("click", changeToNextTrack);

// ----------------------duration slider functionality-----------------------------
song.addEventListener('timeupdate', function () {
    progress.value = song.currentTime;
  });
progress.addEventListener('input', function () {
    song.currentTime = progress.value;
  });
