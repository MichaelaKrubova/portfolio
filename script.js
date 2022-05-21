function splitScroll() {
    const controller = new ScrollMagic.Controler();

    new ScrollMagic.Scene({
        duration: 500, 
        triggerElement: ".work-title"
    })
    .addIndicators()
    .addTo(controller);
}

splitScroll();