const carouselDiv = document.getElementById("carousel-performances");
var carouselBootstrap;
var player1;
var player2;
var isCarouselCycling = true;

function onYouTubeIframeAPIReady() {
    let iframes = carouselDiv.getElementsByTagName("iframe");
    for (let iframe of iframes) {
        let player = new YT.Player(iframe.id, {
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });
        carouselDiv.addEventListener("slid.bs.carousel", (event) => {
            if (!isCarouselCycling) {
                player.pauseVideo();
            }
        });
    }
}

function onPlayerReady() {
    // do nothing
}

function onPlayerStateChange(event) {
    const playerState = event.target.getPlayerState();
    carouselBootstrap = bootstrap.Carousel.getOrCreateInstance(carouselDiv);
    if (playerState == 1 || playerState == 3) {
        // playing or buffering
        carouselBootstrap.pause();
        isCarouselCycling = false;
    } else if (!isCarouselCycling) {
        carouselBootstrap.cycle();
        isCarouselCycling = true;
    }
}
