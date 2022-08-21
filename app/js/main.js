// window.onbeforeunload = function () {
//    window.scrollTo(0, 0);
//  }

$(function() {

   $('.menu__btn').on('click', function() {
      $('.menu__btn').toggleClass('menu__btn--active');
      $('.menu').toggleClass('menu--active');
   });

   $('.menu__link').on('click', function() {
      $('.menu__btn').toggleClass('menu__btn--active');
      $('.menu').toggleClass('menu--active');
   });
   
   $('.logo-link').on('click', function() {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu').removeClass('menu--active');
   });

   $('.slider').slick({
      prevArrow: '<button class="slider-btn slider-btn__left"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.8297 18.6013H5.12463L19.3955 32.942L17.7539 34.5917L0.680359 17.4347L17.7562 0.27533L19.3979 1.925L5.12463 16.268H34.8297V18.6013Z" fill="#333333"/></svg></button>',
      nextArrow: '<button class="slider-btn slider-btn__right"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z" fill="#333333"/></g><defs><clipPath id="clip0"><rect width="35" height="35" fill="white"/></clipPath></defs></svg></svg></button>',
      dots: true,
      arrows: true
   });

   $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });

    $(window).on('scroll',function(){

      var link = $('.menu a.menu__link');
      var top = $(window).scrollTop();
  
      $('.section').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 150;
        if(top >= offset && top < offset + height){
          link.removeClass('menu__link--active');
          $('.navbar').find('[data-scroll="' + id + '"]').addClass('menu__link--active');
        }
      });
  
    });

   });
   
   var sectionArray = [1, 2, 3, 4, 5, 6];
   
   $.each(sectionArray, function(index, value){
             
        $(document).scroll(function(){
            var offsetSection = $('#' + 'section_' + value).offset().top;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;
            
           
            if ( docScroll1 >= offsetSection ){
                $('li a').removeClass('menu__link--active'); 
                $('li a').eq(index).addClass('menu__link--active');
            }
            
        });
       
       $('li a').eq(index).click(function(e){
           var offsetClick = $('#' + 'section_' + value).offset().top;
           e.preventDefault();
           $('html, body').animate({
               'scrollTop':offsetClick
           }, 300)
            
       });
       
   });
   
   $(document).ready(function(){
       $('li a').eq(0).addClass('menu__link--active');
       
   });

