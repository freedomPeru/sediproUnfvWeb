(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


function addNavigation() {
  var inner = '<div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top" >SEDIPRO UNFV</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Acerca de nosotros</a></li><li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Portafolio</a></li><li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Junta directiva</a></li><li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contáctanos</a></li> </ul></div></div>';
  document.getElementById("mainNav").innerHTML = inner;
}

function addHeader() {
  var inner = "<div class='container my-auto'><div class='row'><div class='col-lg-10 mx-auto'><h1 class='text-uppercase'><strong>SEDIPRO UNFV</strong><span style='font-size: 1em; color: tomato;'>            <i class='fas fa-heart'></i>          </span>        </h1>        <hr>        </div>        <div class='col-lg-8 mx-auto'>          <p class='text-faded mb-5'>Difundir las buenas prácticas en dirección de proyectos.</p><a class='btn btn-primary btn-xl js-scroll-trigger' href='#about' style='font-family:Montserrat' >Encuentra más!</a></div></div></div >"
  document.getElementById("headerSection").innerHTML = inner;
}

function addFooter() {
  var inner = "<section id='contact'><div class='container' style='font-family:Montserrat'><div class='row'><div class='col-lg-8 mx-auto text-center'><h2 class='section-heading'>¡Contáctanos!</h2><hr class='my-4'><p class='mb-5'>Contáctamos y estaremos gustosos de hablar contigo.</p></div></div><div class='row'><div class='col-lg-4 ml-auto text-center'><i class='fas fa-phone fa-3x mb-3 sr-contact-1 sediproColor'></i><p>123-456-6789</p></div><div class='col-lg-4 mr-auto text-center'><i class='fas fa-envelope fa-3x mb-3 sr-contact-1 sediproColor'></i><p><a href='mailto:your-email@your-domain.com'>sedipro.unfv@gmail.com</a></p></div><div class='col-lg-4 mr-auto text-center'><i class='fab fa-facebook fa-3x mb-3 sr-contact-1 sediproColor'></i></div></div></div></section >";
  document.getElementById("footerSection").innerHTML = inner;
}