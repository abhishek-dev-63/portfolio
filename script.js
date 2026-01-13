// Check if device is mobile
let isMobile = window.innerWidth <= 768;

// Handle window resize for orientation changes
window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
});

var tl = gsap.timeline();
tl.from('.my-name span',{
    x: '100vw',
    duration: .5,
    stagger: .2,
})
tl.to('#blackB',{
    height: 0,
    duration: 1,
    delay: 1,
});
tl.to('#greenB',{
    height: 0,
    duration: 1,
    delay: -.75,
})
tl.from('header', {
    opacity: 0,
    delay: .25,
    transform: 'translateX(-100%)',
});

// Different header animation sequence for mobile vs desktop
if (isMobile) {
    // Mobile: Logo loads first, then hamburger button separately, then border separately (no navigation animation)
    tl.from('header .logo h1', {
        y: -75,
        stagger: .15,
    });
    tl.from('header .bars a i', {
        y: -75,
        stagger: .15,
    });
    tl.from('header .bars a', {
        y: -75,
        stagger: .15,
    });
} else {
    // Desktop: All header elements together (unchanged)
    tl.from('header h1, header a', {
        y: -75,
        stagger: .15,
    });
}

// Different animation sequence for mobile vs desktop
if (isMobile) {
    // Mobile: Image loads first, then content (faster timing)
    tl.from('.banner-img', {
        x: 100,
        opacity: 0,
        duration: 0.6,
        stagger: .1,
    });
    tl.from('.banner-text h1, .banner-text h2, .banner-text h3, .banner-text p', {
        x: -75,
        opacity: 0,
        duration: 0.5,
        stagger: .1,
    });
    tl.from('.social-icons a', {
        rotation: 180,
        opacity: 0,
        duration: 0.4,
        stagger: .1,
    });
    tl.from('.banner-btn', {
        x: -75,
        opacity: 0,
        duration: 0.4,
        stagger: .1,
    });
} else {
    // Desktop: Content loads first, then image (original timing)
    tl.from('.banner-text h1, .banner-text h2, .banner-text h3, .banner-text p', {
        x: -75,
        opacity: 0,
        stagger: .25,
    });
    tl.from('.social-icons a', {
        rotation: 180,
        opacity: 0,
        stagger: .25,
    });
    tl.from('.banner-btn', {
        x: -75,
        opacity: 0,
        stagger: .25,
    });
    tl.from('.banner-img', {
        x: 100,
        opacity: 0,
        stagger: .25,
    });
}

// Scroll to top button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= viewportHeight) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});