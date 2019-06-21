// JavaScript Document

$(document).ready(function(){

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
        
        