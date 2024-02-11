// LOCOMOTIVE

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//GSAP

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
});

gsap.from(".anim2", {
    y: 30,
    opacity: 0,
    stagger: .3,
    ease: Expo,
    duration:1
});


//SHERY

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: .3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.imageEffect("#imgntext img", {
    style: 3 /*OR 5 for different variant */,
    config: {"uFrequencyX":{"value":19.01,"range":[0,100]},"uFrequencyY":{"value":24.79,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":30.16},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });

  Shery.imageEffect(".imgeff img", {
    style: 5 /*OR 5 for different variant */,
    config: {"a":{"value":2.23,"range":[0,30]},"b":{"value":0.93,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });

  Shery.makeMagnet("#circlev" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("#ftext" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageEffect("#bimg", {
    style: 5 /*OR 5 for different variant */,
    gooey: true,
    config: {"a":{"value":0.25,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.207265827373227},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.62,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":1.11,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.21,"range":[0,2]},"discard_threshold":{"value":0.41,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.15,"range":[0,2]},"noise_scale":{"value":31.4,"range":[0,100]}},
  });


  //MY CODE

  document.querySelector("#ftext button")
  .addEventListener("mouseover", function(){
        gsap.to("#footer video",{
            opacity: 1,
            duration: 1,
            ease: Power4
        });
  });

  document.querySelector("#ftext button")
  .addEventListener("mouseleave", function(){
    gsap.to("#footer video",{
        opacity: 0,
        duration: 1,
        ease: Power4
    });
  });