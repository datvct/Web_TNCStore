const btncart = document.querySelector('#modal-cart');
const btnclose = document.querySelector('#btnclose');
// console.log(btncart);


btncart.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='flex'; 
})
btnclose.addEventListener("click", function(){
    document.querySelector('.modal-mask').style.display ='none'; 
})
$(document).ready(function(){
    $('.slider').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.btn-left'),
      nextArrow: $('.btn-right'),
    });
  });
$(document).ready(function(){
    $('.slider-img-size-big').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.btn-left-img-size-big'),
        nextArrow: $('.btn-right-img-size-big'),
        // infinite: false
      });
});
$(document).ready(function(){
    $('.slider-img-size-small').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.btn-left-img-size-small'),
      nextArrow: $('.btn-right-img-size-small'),
    //   infinite: false
    });
  
    setInterval(function(){
      $('.slider-img-size-small').slick('slickNext');
    }, 2000);
  });
  
$(document).ready(function(){
    $('.add').click(function(){
        var currentValue = parseInt($('.value').val());
        $('.value').val(currentValue + 1);
    });
  
    $('.delete').click(function(){
        var currentValue = parseInt($('.value').val());
        if (currentValue > 1) {
            $('.value').val(currentValue - 1);
        }
    });
});

  
  