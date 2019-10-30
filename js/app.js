var typed = new Typed('.typed', {
  strings: ['Web Designer', 'Graphic Designer', 'Frontend Developer'],
  smartBackspace: true,
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
});

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": ["#ffffff", "#ff4500"]
      },
      "shape": {
        "type": ["circle","star"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2,
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": ["grab","bubble"]
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 80,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 80,
          "size": 10,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);

$(document).ready(function(){

  $(".major-icon").click(function(){
    $(".about-div").toggleClass("about-icon");
    $(".portfolio-div").toggleClass("portfolio-icon");
    $(".contact-div").toggleClass("contact-icon");
    $(".first-bar").toggleClass("first-bar-click")
    $(".second-bar").toggleClass("second-bar-click")
    $(".third-bar").toggleClass("third-bar-click")
  });

  $(".portfolio-div").click(function(){
    $(".portfolio").addClass("open-portfolio");
  })
  $(".close-portfolio").click(function(){
    $(".portfolio").removeClass("open-portfolio");
  })


  $(".contact-div").click(function(){
    $(".contact").addClass("open-contact");
  })
  $(".close-contact").click(function(){
    $(".contact").removeClass("open-contact");
  })

  $(".about-div").click(function(){
    $(".about").addClass("open-about");
  })
  $(".close-about").click(function(){
    $(".about").removeClass("open-about");
  })
});