var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
  console.log(content)
}

if ($(window).width() > 800) {
  $(document).on("mouseover", ".news__item", function (_event, _element) {

    var newsItem = document.querySelectorAll('.news__item');
    newsItem.forEach(function (element, index) {
      element.addEventListener('mouseover', function () {
        var x = this.getBoundingClientRect().left;
        var y = this.getBoundingClientRect().top;
        var width = this.getBoundingClientRect().width;
        var height = this.getBoundingClientRect().height;

        $('.item-bg').addClass('active');
        $('.news__item').removeClass('active');


        bg.style.width = width + 'px';
        bg.style.height = height + 'px';
        bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
      });

      element.addEventListener('mouseleave', function () {
        $('.item-bg').removeClass('active');
        $('.news__item').removeClass('active');
      });

    });

  });
}


var swiper = new Swiper('.news-slider', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  keyboard: true,
  spaceBetween: 0,
  slidesPerView: 'auto',
  speed: 300,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide:true,
    disableOnInteraction:false,
    pauseOnMouseEnter:true,
  },
    breakpoints: {
    480: {
      spaceBetween: 0,
      centeredSlides: true
    }
  },
  simulateTouch: true,
  navigation: {
    nextEl: '.news-slider-next',
    prevEl: '.news-slider-prev'
  },
  pagination: {
    el: '.news-slider__pagination',
    clickable: true
  },
  on: {
    init: function () {
      changBG();
      var activeItem = document.querySelector('.swiper-slide-active');

      var sliderItem = activeItem.querySelector('.news__item');

      $('.swiper-slide-active .news__item').addClass('active');

      var x = sliderItem.getBoundingClientRect().left;
      var y = sliderItem.getBoundingClientRect().top;
      var width = sliderItem.getBoundingClientRect().width;
      var height = sliderItem.getBoundingClientRect().height;


      $('.item-bg').addClass('active');

      bg.style.width = width + 'px';
      bg.style.height = height + 'px';
      bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
    }
  }
});

swiper.on('touchEnd', function () {
  changBG();
  $('.news__item').removeClass('active');
  $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
  changBG();
  $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
  changBG();
  $('.news__item').removeClass('active');

  var activeItem = document.querySelector('.swiper-slide-active');
  var sliderItem = activeItem.querySelector('.news__item');

  $('.swiper-slide-active .news__item').addClass('active');

  var x = sliderItem.getBoundingClientRect().left;
  var y = sliderItem.getBoundingClientRect().top;
  var width = sliderItem.getBoundingClientRect().width;
  var height = sliderItem.getBoundingClientRect().height;


  $('.item-bg').addClass('active');

  bg.style.width = width + 'px';
  bg.style.height = height + 'px';
  bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});

$('.news-slider-next').click(function () {
  changBG();
})

$('.news-slider-prev').click(function () {
  changBG();
})

function changBG() {
  let activeItem = document.querySelector('.swiper-slide-active');
  let activeItemVal = activeItem.getAttribute('data-swiper-slide-index');

  switch (activeItemVal) {
    case '0':
      $('.background').removeClass("background1");
      $('.background').removeClass("background2");
      $('.background').removeClass("background3");
      $('.background').removeClass("background4");
      $('.background').removeClass("background5");
      break;
    case '1':
      $('.background').removeClass("background2");
      $('.background').removeClass("background3");
      $('.background').removeClass("background4");
      $('.background').removeClass("background5");
      $('.background').addClass("background1");
      break;
    case '2':
      $('.background').removeClass("background1");
      $('.background').removeClass("background3");
      $('.background').removeClass("background4");
      $('.background').removeClass("background5");
      $('.background').addClass("background2");
      break;
    case '3':
      $('.background').removeClass("background1");
      $('.background').removeClass("background2");
      $('.background').removeClass("background4");
      $('.background').removeClass("background5");
      $('.background').addClass("background3");
      break;
    case '4':
      $('.background').removeClass("background1");
      $('.background').removeClass("background2");
      $('.background').removeClass("background3");
      $('.background').removeClass("background5");
      $('.background').addClass("background4");
      break;
    case '5':
      $('.background').removeClass("background1");
      $('.background').removeClass("background2");
      $('.background').removeClass("background3");
      $('.background').removeClass("background4");
      $('.background').addClass("background5");
      break;
  }
}
