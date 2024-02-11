const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


function firstpageanimation(){
    var tl = gsap.timeline();
    
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .1
        
    })
    .from("#hero-footer", {
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay: -1.2,
        ease: Expo.easeInOut
    })
}

firstpageanimation();

document.querySelectorAll("#work .elem").forEach(function(elem){
    var rotate = 0;
    var diff = 0;

    elem.addEventListener("mousemove", function(dets){

        diff = dets.clientX - rotate;
        rotate = dets.movementX;
        rotate = gsap.utils.clamp(-20, 20, rotate);
                
        var diffX = dets.clientX - elem.getBoundingClientRect().left;
        var diffY = dets.clientY - elem.getBoundingClientRect().top;
        
        
        gsap.to(elem.querySelector("img"),{
            opacity: 1, 
            ease: "power3.easeInOut",
            top: diffY,
            left: diffX,
            rotation: rotate
        });
    });

    elem.addEventListener("mouseleave", function(dets){
        
        gsap.to(elem.querySelector("img"),{
            opacity: 0, 
            ease: "power3.easeInOut",
        });
    });

    elem.addEventListener("mouseenter", function(dets){
        isMouseInside = true;
    });
});

function updateTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // Convert hours to AM/PM format
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (12 AM)

    // Add leading zero to single-digit minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Update the time in the HTML
    document.getElementById('currentTime').innerHTML = hours + ':' + minutes + ' ' + ampm;

    // Update the time every minute
    setTimeout(updateTime, 60000);
}

// Call the function to initially set the time
updateTime();
