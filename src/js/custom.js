const carouselDiv = document.getElementById("carousel-performances");
var carouselBootstrap = bootstrap.Carousel.getOrCreateInstance(carouselDiv);

// This is the active index of the player and array of players.
var activeIndex = 0;
var players = [];

// Initialize players.
function onYouTubeIframeAPIReady() {
    let iframes = carouselDiv.getElementsByTagName("iframe");
    let i = 0;
    for (let iframe of iframes) {
        let player = new YT.Player(iframe.id);
        players[i] = player;
        i += 1;
    }

    carouselDiv.addEventListener("slid.bs.carousel", (event) => {
        console.log("DBGINFO", activeIndex);
        players[activeIndex].pauseVideo();
        if (event.direction == "right") activeIndex -= 1;
        else activeIndex += 1;
    });
}
