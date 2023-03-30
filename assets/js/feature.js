AOS.init();
let btnScrollClicked = -1;

$(document).ready(() => {
  $('img').each(function() {
    let width = Number($(this).attr('width'));
    let height = Number($(this).attr('height'));
    if( !width ) {
      width = $(this).outerWidth();
    }
    if( !height ) {
      height = $(this).outerHeight();
    }
    if( width < height ) {
      $(this).addClass('portrait');
      if ( $(this).parent().parent().hasClass('card-item') ) {
        $(this).parent().parent().addClass('card-portrait');
      }
      if ( $(this).parent().parent().parent().hasClass('card-group') ) {
        $(this).parent().parent().parent().addClass('card-group-portrait');
      }
      if ( $(this).parent().parent().parent().hasClass('slick-gallery') ) {
        $(this).parent().parent().parent().addClass('slick-gallery-portrait');
      }
    }
  });
  setTimeout(() => {
    $('nav.menu').addClass('loaded');
  }, 300);
  // 漢堡
  $('.hamburger').click(function() {
    $('.user-dropdown').slideUp();
    $(this).toggleClass('opened');
    $('.black').toggleClass('opened');
    $(this).siblings('nav').toggleClass('opened');
    setTimeout(() => {
      $('.block').slideUp();
      $('.open-block').removeClass('opened');
    }, 200);
  });
  $('.open-block').click(function() {
    $(this).parent().siblings().children('.open-block').removeClass('opened');
    $(this).parent().siblings().children('.block').slideUp();
    $(this).toggleClass('opened');
    $(this).siblings('.block').slideToggle();
  });
  $('.open-search').click(function() {
    $('.hamburger, nav, .black').removeClass('opened');
    $(this).children().toggleClass('icon-close');
    $('.collapse-nav').toggleClass('opened');
    $('.user-dropdown').slideUp();
    setTimeout(() => {
      $('.block').slideUp();
      $('.open-block').removeClass('opened');
    }, 200);
  });
  $('.open-user').click(function() {
    $('.hamburger, nav, .collapse-nav, .black').removeClass('opened');
    $('.open-search i').removeClass('icon-close');
    $(this).siblings('.user-dropdown').slideToggle();
    setTimeout(() => {
      $('.block').slideUp();
      $('.open-block').removeClass('opened');
    }, 200);
  });
  $('.black').click(function() {
    $('.user-dropdown').slideUp();
    $(this).removeClass('opened');
    $('.hamburger, nav').removeClass('opened');
    setTimeout(() => {
      $('.block').slideUp();
      $('.open-block').removeClass('opened');
    }, 200);
  });

  $('.btn-scroll').click(function () {
    btnScrollClicked ++;
    const articleTop = $('article').offset().top - 80;
    $(document).scrollTop(articleTop);
    $('.btn-scroll').fadeOut();
  });

  // slick
  $('.slick-opening').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.slick-gallery').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

const callback = (entries, observer) => {
  entries.forEach(entry => {
    console.log();
    if (entry.isIntersecting) {
      $('.btn-scroll').fadeOut();
    } else if (btnScrollClicked) {
      $('.btn-scroll').fadeIn();
    }
  });
}
const observer = new IntersectionObserver(callback);
const target = document.querySelector('article');
observer.observe(target);
