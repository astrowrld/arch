$(document).ready(function () {
  $(".slider__row").slick({
     fade:true,
     cssEase: 'linear',
     infinite: true,
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     dots: true,
     autoplay: true,
     autoplaySpeed: 3000,
     responsive:[
      {
        breakpoint:992,
        settings:{
          arrows: false,
        }
    }]
     });
   
  $(".client__row").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
        }
    },  
      {
        breakpoint:767,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
    }]
     })
  
     $(".partners__row").slick({
      slidesToShow: 8,
      slidesToScroll: 4,
      infinite: true,
      arrows: false,
      dots: false,
      variableWidth: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      responsive:[
        {
          breakpoint:992,
          settings:{
            slidesToShow: 4,
            slidesToScroll: 4,
            variableWidth: true,
            centerMode: false,
          }
      },
        {
          breakpoint:767,
          settings:{
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: true,
             centerMode: false,
          }
      },  
      {
        breakpoint:480,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
        }
    }]
       })   
       
    $('.menu-header__burger').click(function(event) {
    $('.menu-header__burger,.menu-header').toggleClass('active');
    $('body').toggleClass('lock');
      }) 
      
      $('.project__wrap').isotope({
        // options
        itemSelector: '.project__item',
        layoutMode: 'fitRows'
      }); 

      $('.filter-project__item').click(function(){
        $('.filter-project__item').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.project__wrap').isotope({
          filter:selector
        });
        return false;
      });

      $(".slider-contact__row").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[  
          {
            breakpoint:767,
            settings:{
              slidesToShow: 3,
              slidesToScroll: 3,
            }
        },
        {
          breakpoint:380,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 2,
          }
      },  
      ]
         })  

});