var cursor = document.querySelector("#cursor")
var cursorblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    cursorblur.style.left = dets.x - 250 + "px"
    cursorblur.style.top = dets.y - 250 + "px"
 })

    gsap.to("#nav",{
    backgroundColor: "rgba(0, 0, 0, 0.68)",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
       
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }

})
gsap.to("#main", {
    backgroundColor: "rgba(0, 0, 0, 0.68)",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 1,
    }
});
gsap.from("#about img,#aout-us", {
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 60%",
        end: "top 58 %",
        scrub: 3,
        
    }
}
)
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65 %",
        scrub: 3,
        
    }
}
)
gsap.from("#commaleft", {
    y: -70,
    x: -70,
    
    scrollTrigger: {
        trigger: "#commaleft",
        scroller: "body",
        start: "top 55%",
        end: "top 45 %",
        scrub: 3,
        
    }
}
)
gsap.from("#commaright", {
    y: -70,
    x: -70,
    
    scrollTrigger: {
        trigger: "#commaright",
        scroller: "body",
        start: "top 55%",
        end: "top 45 %",
        scrub: 4,
        
    }
}
)