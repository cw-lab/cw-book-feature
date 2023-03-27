$(document).ready(() => {
  $('img').each(function() {
    const width = $(this).outerWidth();
    const height = $(this).outerHeight();
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
  $('.open-user').click(function() {
    $('.hamburger, nav, .black').removeClass('opened');
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

  // slick
  $('.slick-opening').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
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
