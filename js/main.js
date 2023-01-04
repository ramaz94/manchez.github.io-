
$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".products__items"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                    // страницу для поиска нужного элемента
    if(windowWidth < 530){
      elem.removeClass('products__items--grid');
      elem.addClass('products__item--slider');
    }
    else{
      elem.removeClass('products__item--slider');
      elem.addClass('products__items--grid');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});





$(function(){
  
  $('.cart__num, .select-lang').styler();


  $('.burger').on('click', function(){
    $(' .header-menu').slideToggle();
  });

  $('.burger').on('click', function(){
    $('.burger').toggleClass('active');
  });


});


$(document).ready(function(){
  $(".products__items--micro .products__item--list").slice(0, 4).css('display', 'flex');;
  $("#load-more__micro").on("click", function(e){
    e.preventDefault();
    $(".products__items--micro .products__item--list:hidden").slice(0, 4).slideDown();
    if($(".products__items--micro .products__item--list:hidden").length == 0) {
      $("#load-more__micro").text("Показан весь товар").addClass("noContent");
    }
  });
  
});

$(document).ready(function(){
  $(".products__items--acoustics .products__item--list").slice(0, 4).css('display', 'flex');;
  $("#load-more__acoustics").on("click", function(e){
    e.preventDefault();
    $(".products__items--acoustics .products__item--list:hidden").slice(0, 4).slideDown();
    if($(".products__items--acoustics .products__item--list:hidden").length == 0) {
      $("#load-more__acoustics").text("Показан весь товар").addClass("noContent");
    }
  });
  
});

$(document).ready(function(){
  $(".products__items--stands .products__item--list").slice(0, 4).css('display', 'flex');;
  $("#load-more__stands").on("click", function(e){
    e.preventDefault();
    $(".products__items--stands .products__item--list:hidden").slice(0, 4).slideDown();
    if($(".products__items--stands .products__item--list:hidden").length == 0) {
      $("#load-more__stands").text("Показан весь товар").addClass("noContent");
    }
  });
  
});


$(document).ready(function(){
  $(".products__items--consoles .products__item--list").slice(0, 4).css('display', 'flex');;
  $("#load-more__consoles").on("click", function(e){
    e.preventDefault();
    $(".products__items--consoles .products__item--list:hidden").slice(0, 4).slideDown();
    if($(".products__items--consoles .products__item--list:hidden").length == 0) {
      $("#load-more__consoles").text("Показан весь товар").addClass("noContent");
    }
  });
  
});





// старт второй вариант 
$(document).ready(function() {  
  function setBoundries(slick, state) {
    if (state === 'default') {
      slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
    }
  }

  // Slick Selector.
  var slickSlider = $('.products__item--slider');
  var maxDots = 4;
  var transformXIntervalNext = -18;
  var transformXIntervalPrev = 18;

  slickSlider.on('init', function (event, slick) {
    $(this).find('ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
    $(this).find('ul.slick-dots li').each(function (index) {
      $(this).addClass('dot-index-' + index);
    });
    $(this).find('ul.slick-dots').css('transform', 'translateX(0)');
    setBoundries($(this),'default');
  });

  var transformCount = 0;
  slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalCount = $(this).find('.slick-dots li').length;
    if (totalCount > maxDots) {
      if (nextSlide > currentSlide) {
        if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
          if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
            transformCount = transformCount + transformXIntervalNext;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
            var nextSlidePlusOne = nextSlide + 1;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
            $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
            var pPointer = nextSlide - 3;
            var pPointerMinusOne = pPointer - 1;
            $(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1');
            $(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
          }
        }
      }
      else {
        if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
          if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
            transformCount = transformCount + transformXIntervalPrev;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
            var nextSlidePlusOne = nextSlide - 1;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
            $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
            var nPointer = currentSlide + 3;
            var nPointerMinusOne = nPointer - 1;
            $(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
            $(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
          }
        }
      }
    }
  });

  $('.products__item--slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
  });
});
// конец второй вариант 









