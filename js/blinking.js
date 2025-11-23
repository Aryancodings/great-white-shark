upcomingOffersLink = document.getElementsByClassName("upcoming-events-link")[0];

console.log(upcomingOffersLink)
setInterval(() => {
    upcomingOffersLink.style.opacity =

        upcomingOffersLink.style.opacity === "0" ? "1" : "0";
}, 250);
