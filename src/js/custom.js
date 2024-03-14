const carouselDiv = document.getElementById("carousel-performances");
var carouselBootstrap;
var player1;
var player2;
var isCarouselPlaying = false;

function onYouTubeIframeAPIReady() {
    let iframes = carouselDiv.getElementsByTagName("iframe");
    for (let iframe of iframes) {
        let player = new YT.Player(iframe.id, {
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            }
        })
        carouselDiv.addEventListener("slid.bs.carousel", (event) => {
            player.pauseVideo();
        });
    }
    carouselBootstrap = bootstrap.Carousel.getOrCreateInstance(carouselDiv);
    carouselBootstrap.cycle();
    isCarouselPlaying = false;
}

function onPlayerReady() {
    carouselBootstrap = bootstrap.Carousel.getInstance(carouselDiv);
    carouselBootstrap.pause();
    isCarouselPlaying = false;
}

function onPlayerStateChange(event) {
    const playerState = event.target.getPlayerState();
    carouselBootstrap = bootstrap.Carousel.getInstance(carouselDiv);
    console.log("on state change");
    if (playerState == 1 || playerState == 3) {
        // playing or buffering
        console.log("to pause");
        carouselBootstrap.pause();
        isCarouselPlaying = false;
    } else if (!isCarouselPlaying) {
        console.log("to cycle");
        carouselBootstrap.cycle();
        isCarouselPlaying = true;
    }
}
