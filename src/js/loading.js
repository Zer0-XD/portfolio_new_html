paceOptions = {
    ajax: true,  //Checks AJAX requests
    document: true //Document is ready
}

Pace.on('done', () => {

    gsap.timeline()
        .add('p')
        .to('.pace', {
            transform: 'scale(10, 1)',
            duration: 4
        }, "+=.2")
        .to('.pace', {
            duration: 1,
            height: "100%"
        }, "-=2.5")
        .to('.loading__text', {
            delay: .15,
            duration: 1.4,
            opacity: 0,
            yPercent: -400,
            ease: "BezierEasing(0.19,1,0.22,1)"
        }, 'p')
        .to('.page', {
            // zIndex: 99999,
            duration: 1.5,
            delay: .1,
            // y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=2.5')
        .to('.big-circle , .hero-title , .hero-subtitle , .stroked-text', {
            duration: 2,
            delay: .3,
            y: -5,
            // x: 10,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=2.5')
        .to('.bg-line', {
            duration: 2,
            delay: .25,
            opacity: 1,
        })
        .to('#preloader', {
            duration: 0.1,
            delay: 0,
            height: 0,
            width: 0,
            display: 'none',
            // position: 'static'
        })
        .to('::-webkit-scrollbar', {
            duration: 0.1,
            delay: 0,
            width: 10,
        })
})