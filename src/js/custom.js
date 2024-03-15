const carouselDiv = document.getElementById("carousel-performances");
var carouselBootstrap = bootstrap.Carousel.getOrCreateInstance(carouselDiv);

// This is the active index of the player and array of players.
var carouselActiveIndex = 0;
var carouselPlayers = [];

// Initialize players.
function onYouTubeIframeAPIReady() {
    let iframes = carouselDiv.getElementsByTagName("iframe");
    let i = 0;
    for (let iframe of iframes) {
        let player = new YT.Player(iframe.id);
        carouselPlayers[i] = player;
        i += 1;
    }

    carouselDiv.addEventListener("slid.bs.carousel", (event) => {
        carouselPlayers[carouselActiveIndex].pauseVideo();
        if (event.direction == "right") carouselActiveIndex -= 1;
        else carouselActiveIndex += 1;
        if (carouselActiveIndex < 0) carouselActiveIndex += carouselPlayers.length;
        if (carouselActiveIndex >= carouselPlayers.length) carouselActiveIndex -= carouselPlayers.length;
    });
}
