// JavaScript Document

$(document).ready(function(){

    $('.verticalSlider').each(function (index, element) {
        //alert($(this).length);
        var status = $(this).prevAll('.PagingInfo');
        $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            // alert(i)			 
            status.html('<span>' + i + '</span>' + '/' + slick.slideCount);
        });

        $(this).slick({
            infinite: false,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });



    });




    $('.BannerSlider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.ourVisonSlider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    $(".LoanTypeSlider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".CustomerSlider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".uclheader_btnSearch").click(function () {
        $(this).toggleClass("sel");
        $(".allfooterLink").slideToggle();
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    });

    $(".top-left-links a").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var targetDiv = $(this).attr('data-targetDiv')       
        $("."+targetDiv).addClass('active').siblings().removeClass('active');
        
    })
    
    $(".ExistingCustomerWrap").click(function(){
        $(this).toggleClass('active')
    })
    
    $(".mainMenu > li").each(function(){
        $(this).click(function(){
            if(!$(this).hasClass('active')){
                $(this).addClass("active").siblings().removeClass("active")
            }else{
                $(this).toggleClass("active")
            }
        })
    })
    
    $(".humburgurMenu").click(function(){
        $(".mainLinks").toggleClass("active");
        if(window.innerWidth < 768){
            $("body").toggleClass("overflowH");
        }
    })
    
    
    $(".backMenu").click(function(){
        $(".mainMenu > li").each(function(){
            if($(this).hasClass("active")){
                $(this).addClass("active")
            }
        })        
    })
    
    
    
})
 


      

$(document).ready(function () {

    $(".scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");        
    })
            faqsAccordion();
            readMoreText()
            
    $(window).on("scroll", function () {
        if ($('body').find('div').hasClass('secondaryMenuWrapper')){
            var secondaryMenuWrapper = $(".secondaryMenuWrapper").offset().top
            if (parseInt(secondaryMenuWrapper) < parseInt($(window).scrollTop())) {
                var marT = parseInt($(window).scrollTop()) - parseInt(secondaryMenuWrapper)
                //console.log(marT)
                $(".secondaryMenuWrapper").addClass('active')//.css("top",marT + "px") 
            } else {
                $(".secondaryMenuWrapper").removeClass('active')//.css("top", "0px")

            }
        }                              
                
                
        if (parseInt($(window).scrollTop()) > 300) {
            $(".scrollToTop").addClass("active");
        } else {
            $(".scrollToTop").removeClass("active");
        }

                
    })

    $('.secondaryMenuSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
        })  

function readMoreText(){
    $(".readMoreText").click(function(){
        $(this).toggleClass('active')
        $(this).next('.readMoreContant').toggleClass('active')
        if($(this).hasClass("active")){
            $(this).text('Read More -');
            $(this).hide();
        }else{
            $(this).text('Read More +')
        }
    })
}
        function stickyMenu(){
            $(".secondaryMenuWrapper")
        }
    
        function faqsAccordion(){
            $(".accordionBox .que").click(function(){
                var parentEle = $(this).parent()
                parentEle.addClass('active').siblings().removeClass('active')
            })
            
            $(".faqSection .linkTab").click(function(){
                $(this).addClass('active').siblings('.linkTab').removeClass('active')
                var targetDiv = $(this).attr('data-target')
                $("." +targetDiv).addClass("active").siblings(".contantTab").removeClass('active')
            })
            
            $(".selectFaqs").change(function(){
                var targetDiv = $(this).val()
                $("." +targetDiv).addClass("active").siblings(".contantTab").removeClass('active')
            })
        }
        
        