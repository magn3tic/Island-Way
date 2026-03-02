document.addEventListener("DOMContentLoaded", () => {
    const videoBox = document.querySelector(".product-video-box");

    if (videoBox) {
        const video = videoBox.querySelector(".productvideo");
        const btnImg = videoBox.querySelector(".video-btn img");

        if (video && btnImg) {
            const playImg = "https://cdn.shopify.com/s/files/1/0732/7829/2203/files/v-btn.webp";
            const pauseImg = "https://cdn.shopify.com/s/files/1/0732/7829/2203/files/pause.png";

            btnImg.classList.add("play-icon"); // initial state

            const btn = videoBox.querySelector(".video-btn");
            if (btn) {
                btn.addEventListener("click", () => {
                    if (video.paused) {
                        video.play();
                        btnImg.src = pauseImg;
                        btnImg.classList.remove("play-icon");
                        btnImg.classList.add("pause-icon");
                        videoBox.classList.add("video-playing");
                    } else {
                        video.pause();
                        btnImg.src = playImg;
                        btnImg.classList.remove("pause-icon");
                        btnImg.classList.add("play-icon");
                        videoBox.classList.remove("video-playing");
                    }
                });
            }

            video.addEventListener("ended", () => {
                btnImg.src = playImg;
                btnImg.classList.remove("pause-icon");
                btnImg.classList.add("play-icon");
                videoBox.classList.remove("video-playing");
            });
        }
    }
});


// ================== Locomotive + GSAP ==================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && document.querySelector("#smooth-content")) {
    gsap.registerPlugin(ScrollTrigger);

    const pageContainer = document.querySelector("#smooth-content");

    const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true,
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
            return arguments.length
                ? scroller.scrollTo(value, 0, 0)
                : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();

    // Header hide/show
    const header = document.querySelector(".product-header");
    if (header) {
        let lastScroll = 0;
        scroller.on("scroll", (obj) => {
            const currentScroll = obj.scroll.y;

            if (currentScroll <= 0) {
                header.classList.remove("hide");
                return;
            }

            if (currentScroll > lastScroll) {
                header.classList.add("hide");
                header.classList.remove("show");
            } else {
                header.classList.add("show");
                header.classList.remove("hide");
            }

            lastScroll = currentScroll;
        });
    }

    // ================== Animations ==================
    if (document.querySelector(".hero-palm-left")) {
        gsap.to(".hero-palm-left", {
            x: -580,
            y: -580,
            ease: "ease-out",
            scrollTrigger: {
                trigger: ".hero-area",
                scroller: pageContainer,
                start: "top top",
                end: "bottom 30%",
                scrub: true,
            },
        });
    } 

    if (document.querySelector(".hero-palm-left")) {
        gsap.to(".hero-palm-left", {
            x: -580,
            y: -580,
            ease: "ease-out",
            scrollTrigger: {
                trigger: ".product-header",
                scroller: pageContainer,
                start: "top top",
                end: "bottom 30%",
                scrub: true,
            },
        });
    }

    if (document.querySelector(".hero-palm-right")) {
        gsap.to(".hero-palm-right", {
            x: 500,
            y: -500,
            ease: "ease-out",
            scrollTrigger: {
                trigger: ".hero-area",
                scroller: pageContainer,
                start: "top top",
                end: "bottom 30%",
                scrub: true,
            },
        });
    }

    // Fruits
    if (document.querySelector(".fruits-wrapper-1")) {
        gsap.to(".fruits-wrapper-1", {
            x: 490,
            scrollTrigger: {
                trigger: ".hero-area",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }

    if (document.querySelector(".fruits-wrapper-2")) {
        gsap.to(".fruits-wrapper-2", {
            x: -450,
            scrollTrigger: {
                trigger: ".hero-area",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }
if (document.querySelector(".fruits-wrapper-7")) {
        gsap.to(".fruits-wrapper-7", {
            x: 450,
            scrollTrigger: {
                trigger: ".hero-area",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }

    if (document.querySelector(".fruits-wrapper-3")) {
        gsap.to(".fruits-wrapper-3", {
            x: -490,
            scrollTrigger: {
                trigger: ".hero-area",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }

    // Service shapes
    if (document.querySelector(".service-shape-left")) {
        gsap.to(".service-shape-left", {
            x: -180,
            ease: "ease-out",
            scrollTrigger: {
                trigger: ".feature-area",
                scroller: pageContainer,
                start: "top 30%",
                end: "bottom 100%",
                scrub: true,
            },
        });
    }
    if (document.querySelector(".service-shape-right")) {
        gsap.to(".service-shape-right", {
            x: 180,
            ease: "ease-out",
            scrollTrigger: {
                trigger: ".feature-area",
                scroller: pageContainer,
                start: "top 30%",
                end: "bottom 100%",
                scrub: true,
            },
        });
    }

    if (document.querySelector(".service-left-img.hand-bowl1")) {
        gsap.to(".service-left-img.hand-bowl1", {
            rotate: 0,
            ease: "ease-out",
            scrollTrigger: {
                trigger: ".inner-features",
                scroller: pageContainer,
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }

    if (document.querySelector(".story-image")) {
        gsap.from(".story-image", {
            scale: 0.7,
            ease: "ease-out",
            scrollTrigger: {
                trigger: ".story-area",
                scroller: pageContainer,
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }

    if (document.querySelector(".banner-item-cream")) {
        gsap.to(".banner-item-cream", {
            x: 150,
            rotate: 10,
            scrollTrigger: {
                trigger: ".product-banner",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }
    if (document.querySelector(".banner-item-berry")) {
        gsap.to(".banner-item-berry", {
            x: -150,
            rotate: 10,
            scrollTrigger: {
                trigger: ".product-banner",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }
    if (document.querySelector(".banner-item-orange")) {
        gsap.to(".banner-item-orange", {
            x: 150,
            rotate: -50,
            scrollTrigger: {
                trigger: ".product-banner",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }
    if (document.querySelector(".banner-item-coconut")) {
        gsap.to(".banner-item-coconut", {
            x: -150,
            rotate: 50,
            scrollTrigger: {
                trigger: ".product-banner",
                scroller: pageContainer,
                start: "top center",
                end: "bottom 50%",
                scrub: true,
            },
        });
    }
    
if (document.querySelector(".service-text .content-text")) {
    gsap.utils.toArray(".service-text .content-text").forEach((box, i) => {
        gsap.fromTo(box, 
            { opacity: 0, y: 50 }, // initial state
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                scrollTrigger: {
                    scroller: pageContainer,  // keep your custom scroller
                    trigger: box,             // each box is its own trigger
                    start: "top 85%",
                    end: "top 60%",           // when it leaves the viewport
                    toggleActions: "play none play reverse",
                    onEnter: () => box.classList.add("active"),
                    onLeaveBack: () => box.classList.remove("active")
                }
            }
        );
    });
}

    // Reveal images
    const revealContainers = document.querySelectorAll(".reveal");
    if (revealContainers.length) {
        revealContainers.forEach((container) => {
            const image = container.querySelector("img");
            if (!image) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    scroller: pageContainer,
                    toggleActions: "restart none none reset",
                },
            });

            tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1.5, { xPercent: -100, ease: Power2.out });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out,
            });
        });
    }

    // ================== Text Split Animations ==================
    function safeSplitText(selector, triggerSel) {
        if (!document.querySelector(selector) || typeof SplitText === "undefined") return;

        const text = new SplitText(selector, { type: "words, chars" });
        gsap.from(text.chars, {
            stagger: 0.3,
            opacity: 0.1,
            scrollTrigger: {
                pinType: "fixed",
                trigger: triggerSel,
                scroller: pageContainer,
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1,
            },
        });
    }

    window.addEventListener("load", () => {
        safeSplitText(".story-area .heading", ".story-area .section-heading");
        safeSplitText(".content-area.about .heading", ".content-area.about .section-heading");
        safeSplitText(".product-area .heading", ".product-area .section-heading");
        safeSplitText(".feature-area .heading", ".feature-area .section-heading");
        safeSplitText(".feature-bg .heading", ".feature-bg .section-heading");
    });
}

(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        $('.company-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 8000,
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 0,
            variableWidth: true,
            cssEase: 'linear',
            pauseOnHover:false,
            pauseOnFocus:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }

              ]
        });

        $('.testimonial-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 6000,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    }
                }

              ]
        });

        $('.product-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 8000,
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
              pauseOnHover:false,
            pauseOnFocus:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }

              ]
        });
        
        $('.package-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 8000,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            pauseOnHover:false,
            pauseOnFocus:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }

              ]
        });
        
        $('.three-column-slider').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        
                    }
                }

              ]
        });

        $('.product-details-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-details-slider-nav',
            arrows:true,
             prevArrow: "<button class='slick-prev slick-arrow slick-disabled' aria label='Previous' type='button' aria-disabled='true'><span><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'> <circle cx='15.5526' cy='15.5526' r='15.5526' transform='matrix(-1 0 0 1 31.9148 0.44751)' fill='#0EA7D3'/> <path d='M18.8311 9.33441L12.1657 15.9998L18.8311 22.6652' stroke='white' stroke-width='1.49914'/> </svg></span><span class='d-none'>PREV</span></button>",
            nextArrow: "<button class='slick-next slick-arrow' aria-label='Next' type='button' aria-disabled='false'><span><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'> <circle cx='16.4461' cy='16.0001' r='15.5526' fill='#0EA7D3'/> <path d='M13.9773 9.33466L20.6427 16L13.9773 22.6654' stroke='white' stroke-width='1.49914'/> </svg></span><span class='d-none'>NEXT</span></button>",
        });
        $('.product-details-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.product-details-slider',
            dots: false,
            focusOnSelect: true,
            arrows:false
        });

        $('a[data-slide]').click(function (e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            $('.slider-nav').slick('slickGoTo', slideno - 1);
        });

        $(".et-js-tilt").tilt({
            scale: 1.01,
            glare: true,
            maxGlare: 0.8,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 900,
            perspective: 1200
        });

        $(".mainmenu ul li:has(ul)").addClass("has-submenu");
        $(".mainmenu ul li:has(ul)").addClass("small-submenu");
        $(".mainmenu ul li ul").addClass("sub-menu");
        $(".mainmenu ul.dropdown li").hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });
        var $menu = $("#menu"),
            $menulink = $("#menu-toggle"),
            $header = $(".header-area"),
            $searchTrigger = $(".searchToggle"),
            $menuTriggercont = $("#menu_handler"),
            $menuTrigger = $(".has-submenu > span"),
            $megamenuTrigger = $(".megamenu > li > span");
        $menulink.click(function (e) {
            $menulink.toggleClass("active");
            $menu.toggleClass("active");
            $menuTriggercont.toggleClass("active");
            $header.toggleClass("active");
        });

        $menuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this).next();
            t.toggleClass("active");
            t.toggleClass("active").next("ul").toggleClass("active");
            t.toggleClass("active").next(".megamenu-holder").toggleClass("active");
        });

        $megamenuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this).next();
            t.toggleClass("active").next(".mega-submenu").toggleClass("active");
        });

        $searchTrigger.click(function (e) {
            $menulink.removeClass("active");
            $menu.removeClass("active");

            $menuTriggercont.removeClass("active");
        });

        $(".mainmenu ul li:has(ul)");
        
             $(".search-toggle").click(function () {
            $(".header-search").addClass("active");
            $("#menu-toggle").removeClass("active");
            $("#menu").removeClass("active");
            $(".header-area").removeClass("active");
        });

        $(".close-search").click(function () {
            $(".header-search").removeClass("active");
        });

    });
}(jQuery));



