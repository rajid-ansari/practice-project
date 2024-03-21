let cursor = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");

document.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
    cursor.style.transition = "all 0.1s linear";
    blur.style.transition = "all 0.2s linear";

});

let navs = document.querySelectorAll(".nav h4");
navs.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
        cursor.style.scale = "3";
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
        cursor.style.transition = "all 0.3s linear";
    });
});

navs.forEach((ele) => {
    ele.addEventListener("mouseleave", () => {
        cursor.style.scale = "1";
        cursor.style.border = "0";
        cursor.style.backgroundColor = "rgb(144,212,38)";
    })
})

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.7,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -12",
        scrub: 1,
    }
});

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -35%",
        end: "top -80%",
        scrub: 4,
    }
})

gsap.from("#about-img1, .about-description, #about-img2", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 54%",
        scrub: 3,
    }
})

gsap.to("#qoute-left", {
    bottom: "125px",
    left: "90px",
    duration: 0.8,
    scrollTrigger: {
        trigger: "#qoute-left",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 4,
    }
})

gsap.to("#qoute-right", {
    top: "125px",
    right: "90px",
    duration: 0.8,
    scrollTrigger: {
        trigger: "#qoute-right",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 50%",
        scrub: 4,
    }
});

gsap.from(".page3-card", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page3-card",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4,
    }
})