const carouselDiv = document.getElementById("carousel-performances");
var carouselBootstrap;
var player1;
var player2;
var isCarouselPlaying = false;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player("gallery-player-1", {
        events: {
            "onReady": onPlayer1Ready,
            "onStateChange": onPlayerStateChange
        }
    });
    player2 = new YT.Player("gallery-player-2", {
        events: {
            "onReady": onPlayer2Ready,
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayer1Ready() {
    carouselDiv.addEventListener("slid.bs.carousel", (event) => {
        player1.pauseVideo();
    });
}

function onPlayer2Ready() {
    carouselDiv.addEventListener("slid.bs.carousel", (event) => {
        player2.pauseVideo();
    });
}
  
function onPlayerStateChange(event) {
    const playerState = event.target.getPlayerState();
    console.log("to change state");
    carouselBootstrap = bootstrap.Carousel.getInstance(carouselDiv);
    if (playerState == 1 || playerState == 3) // playing or buffering
    {
        console.log("to pause")
        carouselBootstrap.pause();
        isCarouselPlaying = true;
    }
    else if (isCarouselPlaying)
    {
        console.log("to cycle")
        carouselBootstrap.cycle();
        isCarouselPlaying = false;
    }
}
