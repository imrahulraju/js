(function() {
          $(".hamburger").click(function() {
            return $(this).toggleClass('close');
          });
        }).call(this);

var lFollowX = 0,
            lFollowY = 0,
            x = 0,
            y = 0,
            friction = 1 / 30;

        function moveBackground() {
          x += (lFollowX - x) * friction;
          y += (lFollowY - y) * friction;

          translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

          $('.bg').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
          });

          window.requestAnimationFrame(moveBackground);
        }

        $(window).on('mousemove click', function(e) {

          var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
          var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
          lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
          lFollowY = (10 * lMouseY) / 100;

        });

        moveBackground();



        $(".ser-box.ser-box-1").hover(
          function () {
            $(".serimgboxs.box-1").addClass("active");
          },
          function () {
            $(".serimgboxs.box-1").removeClass("active");
          }
        );
        $(".ser-box.ser-box-2").hover(
          function () {
            $(".serimgboxs.box-2").addClass("active");
          },
          function () {
            $(".serimgboxs.box-2").removeClass("active");
          }
        );
        $(".ser-box.ser-box-3").hover(
          function () {
            $(".serimgboxs.box-3").addClass("active");
          },
          function () {
            $(".serimgboxs.box-3").removeClass("active");
          }
        );
        $(".ser-box.ser-box-4").hover(
          function () {
            $(".serimgboxs.box-4").addClass("active");
          },
          function () {
            $(".serimgboxs.box-4").removeClass("active");
          }
        );
        $(".ser-box.ser-box-5").hover(
          function () {
            $(".serimgboxs.box-5").addClass("active");
          },
          function () {
            $(".serimgboxs.box-5").removeClass("active");
          }
        );




        $(".tec-box.tec-box-1").hover(
          function () {
            $(".tecimgboxs.box-1").addClass("active");
          },
          function () {
            $(".tecimgboxs.box-1").removeClass("active");
          }
        );
        $(".tec-box.tec-box-2").hover(
          function () {
            $(".tecimgboxs.box-2").addClass("active");
          },
          function () {
            $(".tecimgboxs.box-2").removeClass("active");
          }
        );
        $(".tec-box.tec-box-3").hover(
          function () {
            $(".tecimgboxs.box-3").addClass("active");
          },
          function () {
            $(".tecimgboxs.box-3").removeClass("active");
          }
        );
        $(".tec-box.tec-box-4").hover(
          function () {
            $(".tecimgboxs.box-4").addClass("active");
          },
          function () {
            $(".tecimgboxs.box-4").removeClass("active");
          }
        );
        $(".tec-box.tec-box-5").hover(
          function () {
            $(".tecimgboxs.box-5").addClass("active");
          },
          function () {
            $(".tecimgboxs.box-5").removeClass("active");
          }
        );

//add remove class header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("header").addClass("scroll-bg");
    } else {
        $("header").removeClass("scroll-bg");
    }
});

//News slider
$('.news-slide').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(".hamburger-menu").click(function(){
        $(".nav-bar").toggleClass("active");
    });