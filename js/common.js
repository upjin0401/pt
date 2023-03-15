$(document).ready(function () {



    $('.mdepth2').hide();
    $('.mgnb_list li').click(function(){
        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings().children('.mdepth2').stop().slideUp();
     
    });

    
    $('.search').hide();
    $('.util li:nth-child(3)').click(function () {
        $('.search').stop().slideDown();
   
    });

    $('.search_close').click(function () {
        $('.search').stop().slideUp();
     
    });



    //gnb

    $('.depth2,.depth2_bg').hide();

    $('.gnb>li').mouseenter(function () {
        $(this).find('.depth2').stop().fadeIn();
        $('.depth2_bg').stop().fadeIn();

    });


    $('.gnb>li').mouseleave(function () {
        $(this).find('.depth2').stop().fadeOut();
        $('.depth2_bg').stop().fadeOut();
    });

    

    // $('.gnb > li').click(function(){
    //     ('.depth2').hide();

    // });

   

   


    //모바일메뉴



    

    $('.ham').click(function () {
        $('.mgnb_wrap').animate({
            left: '0'
         
        });
    
      

        $('.mgnb_close').click(function () {
            $('.mgnb_wrap').animate({
                left: '100%'
                
            });
         
        });

    });





    //제품슬라이드



    const product_list = new Swiper('.product_list', {
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },

        slidesPerView: '1',  // 한 슬라이드에 보여줄 갯수 , 모바일의 크기
        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        spaceBetween: 20,  // 슬라이드 사이 여백
        // 반응형 슬라이드
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1600: {  // 가로해상도가 1600px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 40,
            },


        },

        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초
    });


    //메인슬라이드 재생, 정지
    $('.mb_play').hide();

    $('.mb_pause').on('click', function () {
        product_list.autoplay.stop();
        $('.mb_pause').hide();
        $('.mb_play').show();
    });

    $('.mb_play').on('click', function () {
        product_list.autoplay.start();
        $('.mb_pause').show();
        $('.mb_play').hide();
    });


    //고정

    $(window).scroll(function () {
        if ($(this).scrollTop() > 2800) {
            $('.best_txt').addClass('fix');

        }
        else {
            $('.best_txt').removeClass('fix');
                       


        }
    });

    $('.rotate_logo').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 3100) {
            $('.rotate_logo').show();
            $('.rotate_logo').addClass('fix');

        }
        else {
            $('.rotate_logo').removeClass('fix');
                       


        }
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 4000) {
            $('.rotate_logo').hide();
          
        } 
        
   

    });


    




    // $(window).scroll(function(){
    //     if ($(this).scrollTop() >  2800) {
    //         $('.best_txt').addClass('fix');            


    //      if($(this).scrollTop() <  4321){
    //         $('.best_txt').css({
    //             position:'relative',
    //             top:'auto',
    //             paddingTop:'400px',
    //             paddingBottom:0,
    //         })
    //      }
    //     }        
    //     else{
    //         $('.best_txt').removeClass('fix'); 
    //         $('.best_txt').css({
    //             position:'relative',
    //             top:'auto',
    //             paddingTop:0,
    //             paddingBottom:'900px'
    //         })

    //     }
    // });








    //리뷰 슬라이드
    const review_list = new Swiper('.review_list', {
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수 , 모바일의 크기
        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        spaceBetween: 20,  // 슬라이드 사이 여백

        // 반응형 슬라이드
        breakpoints: {
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 3.5,
                spaceBetween: 40,
            },
            1600: {  // 가로해상도가 1600px 이상일 경우
                slidesPerView: 4.5,
                spaceBetween: 40,
            },

        },

        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초
    });


    //stores


    $('.stores_list li:first-child').addClass('active');
    $('.stores_list li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    //sub

    $('.tab li').addClass('active');
    $('.tab li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });
     
     
      $('.hand_list, .lip_list, .perfume_list, .object_list, .acc_list').hide();

      $('.tab li:nth-child(1)').click(function(){
          $('.hand_list, .lip_list, .perfume_list, .object_list, .acc_list').hide();
          $('.body_list').show();
      });

      $('.tab li:nth-child(2)').click(function(){
        $('.body_list, .lip_list, .perfume_list, .object_list, .acc_list').hide();
        $('.hand_list').show();
    });

        $('.tab li:nth-child(3)').click(function(){
            $('.body_list, .hand_list, .perfume_list, .object_list, .acc_list').hide();
            $('.lip_list').show();

            $('.tab li:nth-child(4)').click(function(){
                $('.body_list, .hand_list, .lip_list, .object_list, .acc_list').hide();
                $('.perfume_list').show();  
            });

            
            $('.tab li:nth-child(5)').click(function(){
                $('.body_list, .hand_list, .lip_list, .perfume_list, .acc_list').hide();
                $('.object_list').show();  
            });

            $('.tab li:nth-child(6)').click(function(){
                $('.body_list, .hand_list, .lip_list, .perfume_list, .object_list').hide();
                $('.acc_list').show();  
            });



    });

 
    //sb_list
    $('.sb_list li:nth-of-type(1)').click(function(){
        $('.body_list, .lip_list, .perfume_list, .acc_list').hide(); 
        $('.hand_list').show(); 
    })
    $('.sb_list li:nth-of-type(2)').click(function(){
        $('.body_list, .hand_list, .perfume_list, .acc_list').hide(); 
        $('.lip_list').show(); 
    })

    $('.sb_list li:nth-of-type(3)').click(function(){
        $('.body_list, .hand_list, .lip_list, .acc_list').hide(); 
        $('.perfume_list').show(); 
    })

    $('.sb_list li:nth-of-type(4)').click(function(){
        $('.body_list, .hand_list, .lip_list, .perfume_list').hide(); 
        $('.acc_list').show(); 
    })




    //마우스포인트
    var $mousePointer = $('#mouse-pointer'),
    $clickElements = $('a, button');
    function moveCursor(e){
        $mousePointer.css({
            "left" : e.pageX,
            "top" : e.pageY
        })
    }

    $clickElements.mouseenter(function(){
        console.log('마우스 들어왔다');
        $mousePointer.addClass('hover');

    })
    
    $clickElements.mouseleave(function(){
        console.log('마우스 나갔다');
        $mousePointer.removeClass('hover');

    })
    $(window).on('mousemove', moveCursor);



    
      //sub_stores


      $('.store_info li:first-child').addClass('active');
      $('.store_info li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });


    
  
    



    //sub_products
    $('.sb_list').hide();
    $('.sb_menu').click(function(){
        $('.sb_list').stop().slideToggle();
           $('.down').toggleClass('active');
      
       
    });

 

    $(window).scroll(function () {
        if ($(this).scrollTop() > 920) {
           
            $('.contents .tab').addClass('fix');

        }
        else {
            $('.contents .tab').removeClass('fix');
                       


        }
    });

  
     


}); //문서준비이벤트 종료
