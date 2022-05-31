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
            duration: 1,
            opacity: 0,
            yPercent: -200,
            ease: "BezierEasing(0.19,1,0.22,1)"
        }, 'p')
        .to('.page', {
            // zIndex: 99999,
            duration: 1.5,
            delay: .1,
            // y: 0,
            opacity: 1,
            display: 'block',
            ease: Expo.easeInOut
        }, '-=2.5')
        .to('#preloader', {
            duration: 0.1,
            delay: 0,
            height: 0,
            width: 0,
            display: 'none',
            // position: 'static'
        })
        .to('.big-circle , .hero-title , .hero-subtitle', {
            duration: 2,
            delay: .3,
            y: -5,
            // x: 10,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=2.5')
        .to('.bg-line', {
            duration: 0.8,
            delay: .05,
            opacity: 1,
        })
        .to('.stroked-text', {
            duration: 0.5,
            delay: .1,
            opacity: 1,
            y: -5
        })
})