/* ===( Creative 💌 : CODE AASHU )=== */
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function loader() {
  var tll = gsap.timeline();
  tll
    .to("#loader", {
      top: "-100%",
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    })
    .to("#center", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
    })
    .from("#navbar", {
      y: "-100%",
    });
}
loader();

function page1() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top -25%",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });
  tl.to(
    "#center img",
    {
      transform: "scale(1)",
    },
    "a"
  )
    .to(
      "#center",
      {
        scale: 0.8,
      },
      "a"
    )
    .to(
      "#head-1",
      {
        top: "-100%",
      },
      "a"
    )
    .to(
      "#left",
      {
        transform: "translateY(-7.8%)",
      },
      "b"
    )
    .to(
      "#right",
      {
        transform: "translateY(5%)",
      },
      "b"
    );
}
page1();

function page2() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 30%",
      end: "top -20%",
      scrub: 3,
    },
  });
  tl2
    .from(
      "#cue",
      {
        x: 600,
      },
      "a"
    )
    .from(
      "#page2 #the",
      {
        x: -500,
        delay: 0.1,
      },
      "a"
    )
    .from(
      "#page2>h1",
      {
        x: 400,
        delay: 0.3,
      },
      "a"
    );

  var clutter = "";
  document
    .querySelector("#page2 #text h2")
    .textContent.split(" ")
    .forEach(function (word) {
      clutter += ` <span>${word}</span>`;
    });
  document.querySelector("#page2 #text h2").innerHTML = clutter;

  gsap.to("#page2 #text h2 span", {
    color: "#FF3227",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#text",
      scroller: "#main",
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
    },
  });
}
page2();

gsap.from("#page3 h1", {
  y: "100%",
  stagger: {
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
  },
});

gsap.to("#page4 #wraper", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top top",
    end: "top -300%",
    scrub: 1,
    pin: true,
  },
});

gsap.to("#page6 #ig2", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.out",
  duration: 2,
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.to("#page6 #ig1", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.out",
  duration: 2,
  scrollTrigger: {
    trigger: "#page6 #ig1",
    scroller: "#main",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
});

function page7() {
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 50%",
      end: "top -60%",
      scrub: 1,
    },
  });
  tl7
    .to(
      "#i1",
      {
        x: -10,
      },
      "a"
    )
    .to(
      "#one",
      {
        x: 350,
        delay: 0.5,
      },
      "a"
    )
    .to(
      "#two",
      {
        x: 350,
        delay: 0.7,
      },
      "a"
    )
    .to(
      "#three",
      {
        x: -300,
        delay: 0.8,
      },
      "a"
    );
}
page7();

function appointmentAnim() {
  // Animate heading
  gsap.from("#appointment h1, #appointment p", {
    opacity: 0,
    y: 80,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#appointment",
      scroller: "#main",
      start: "top 70%",
    },
  });

  // Animate form fields (inputs + textarea)
  gsap.from("#appointment form input, #appointment form textarea", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#appointment form",
      scroller: "#main",
      start: "top 80%",
    },
  });

  // Animate submit button separately
  gsap.from("#appointment form button", {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    delay: 0.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#appointment form",
      scroller: "#main",
      start: "top 80%",
    },
  });

  // Form submission handler
  const form = document.getElementById("appointment-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Fade out only the fields (not the form wrapper itself)
    gsap.to(
      "#appointment form input, #appointment form textarea, #appointment form button",
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.in",
        onComplete: () => {
          // Replace form content with Thank You message
          form.innerHTML = `<h2 style="color:#fff;text-align:center;margin-top:20px;">
             🎉 Thank you! We’ll get back to you soon.
           </h2>`;

          // Animate Thank You message
          gsap.fromTo(
            "#appointment form h2",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        },
      }
    );

    form.reset();
  });
}
appointmentAnim();
