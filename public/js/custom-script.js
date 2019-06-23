// JavaScript Document

$(document).ready(function () {

    $(".uclheader_btnSearch").click(function () {
        $(this).toggleClass("sel");
        $(".allfooterLink").slideToggle();
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    });

    $(".top-left-links a").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var targetDiv = $(this).attr('data-targetDiv')
        $("." + targetDiv).addClass('active').siblings().removeClass('active');

    })

    $(".ExistingCustomerWrap").click(function () {
        $(this).toggleClass('active')
    })

    $(".mainMenu > li").each(function () {
        $(this).click(function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass("active").siblings().removeClass("active")
            } else {
                $(this).toggleClass("active")
            }
        })
    })

    $(".humburgurMenu").click(function () {
        $(".mainLinks").toggleClass("active");
        if (window.innerWidth < 768) {
            $("body").toggleClass("overflowH");
        }
    })


    $(".backMenu").click(function () {
        $(".mainMenu > li").each(function () {
            if ($(this).hasClass("active")) {
                $(this).addClass("active")
            }
        })
    }) 
    
    $(".expandBTN").click(function () {
        $(this).toggleClass("sel");
        $(".allfooterLink").slideToggle();
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    });

    $(".scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
    faqsAccordion();
    readMoreText()

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

    $('.BannerSlider').not('.slick-initialized').slick({
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

    $(".LoanTypeSlider").not('.slick-initialized').slick({
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
    $('.minimized').click(function () {
        init();
    });
    $(".ReasonstobuySlider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".FeaturesBenefitsSlider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [

            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".StapeSlider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [

            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".AboutInsuranceSlider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(window).on("scroll", function () {
        if ($('body').find('div').hasClass('secondaryMenuWrapper')) {
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

    $(".uploadfile").each(function (index, element) {
        $(this).find(".inputfile").on("change", function () {
            var FullFileName = $(this).val();
            var FileName;
            var rxFile;
            if (FullFileName.lastIndexOf("\\") > 0) {
                FileName = FullFileName.substr(FullFileName.lastIndexOf("\\"));
                rxFile = FileName.split("\\")[1];
            } else {
                rxFile = FullFileName;
            }
            $(this).closest(".uploadfile").find(".nameuploadfile").addClass("active").html(rxFile)
        })
    });
   
    $(".closeBtn").click(function () {
       // alert()
        $('.MessageBox').fadeOut();
    });
	$(".TABHead").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var thisI = $(this).index();
            $(".contant .TABCont").eq(thisI).slideDown().siblings().hide()
    });
     $('.csrBg').each(function (index, element) {
         $(this).css('opacity', '0').parent().css({ 'background': 'url(' + $(this).attr("src") + ') no-repeat center top', 'background-size': 'cover' });
     });
     $('.imgCircle img').each(function (index, element) {
         $(this).css('opacity', '0').parent().css({ 'background-image': 'url(' + $(this).attr("src") + ')' });
     });
     $('.mHeight li, .equalh, .mye, .OtherInsurans .benefitBoxK,  .PoliciesWapper .PoliciesBox .subText, .TimeContaineBox .intimationBox .bg2, .CurrentOpenings, .resultBox').matchHeight();
})

function readMoreText() {
    $(".readMoreText").click(function () {
        $(this).toggleClass('active')
        $(this).next('.readMoreContant').toggleClass('active')
        if ($(this).hasClass("active")) {
            $(this).text('Read More -');
            $(this).hide();
        } else {
            $(this).text('Read More +')
        }
    })
}
function stickyMenu() {
    $(".secondaryMenuWrapper")
}

function faqsAccordion() {
    $(".accordionBox .que").click(function () {
        var parentEle = $(this).parent()
        parentEle.addClass('active').siblings().removeClass('active')
    })

    $(".faqSection .linkTab").click(function () {
        $(this).addClass('active').siblings('.linkTab').removeClass('active')
        var targetDiv = $(this).attr('data-target')
        $("." + targetDiv).addClass("active").siblings(".contantTab").removeClass('active')
    })

    $(".selectFaqs").change(function () {
        var targetDiv = $(this).val()
        $("." + targetDiv).addClass("active").siblings(".contantTab").removeClass('active')
    })
}

$(function () {
    $("#Salaried").find(".SalarridActive").addClass("pactive")
    $("#Selfemployed").find(".SelfActive").addClass("pactive")
    $("#Businesses").find(".BusinessesActive").addClass("pactive")
    $("#Moresolution").find(".top-left-links a.moresolution").addClass("active").siblings().removeClass('active')
    $("#Moresolution").find(".mainNav .mainLinks ul.MoreSolutions").addClass("active").siblings().removeClass('active')

});

function myFunction(x) {
    x.classList.toggle("change");
}

//Menu start//

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(function () {
    if (isMobile.any()) {
        $(".rx-tab1").each(function (index, element) {
            $(this).on("click", function () {
                var targetOption = $(this).attr("data-sublinks")
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active")
                    $("." + targetOption).removeClass("active")
                } else {
                    $(this).addClass("active").siblings().removeClass("active")
                    $("." + targetOption).addClass("active").siblings(".AllMenuLinkData").removeClass("active")
                }
            })
        })
    } else {
        $(".rx-tab1").each(function (index, element) {
            $(this).on("mouseover", function () {
                $(this).addClass("active").siblings("li").removeClass("active")
                $(".AllMenuLinkData").removeClass("active")
                var targetOption = $(this).attr("data-sublinks")
                $("." + targetOption).addClass("active")
            })
            $(".ThirdMenu-MainWapper").on("mouseleave", function () {
                $(".AllMenuLinkData.active").removeClass("active")
                $(".rx-tab1.active").removeClass("active")
            })
        });
        
        $(".ProdectSection").on("mouseover", function () {
            var bodyid = $('body').attr('id');
            $(this).addClass("active").siblings().removeClass("active");
            $(".AllMenuLinkData").removeClass("active");
            $(".rx-tab1").each(function (index, element) { 
                var DataNull = $(this).hasClass('pactive');
                if ($(this).hasClass('pactive')) {
                    var DataClass = $(this).attr('data-sublinks');
                    $("." + DataClass).addClass("active");
                }
            });
            if (bodyid == null) {
                $(".rx-tab1.SalarridActive").addClass("active");
                var targetOption = $(".ProdectSection").attr("data-sublinks");
                $("." + targetOption).addClass("active");
                console.log("Else if Condition " + targetOption);
            }
        });
        $(".ProdectSection").on("mouseleave", function () {
            $(".AllMenuLinkData.active").removeClass("active")
            $(".rx-tab1.active").removeClass("active")
        })
    };
});
  
 
$(function() {
    $(".mobileMenu").click(function(e) {
        $(".subMenu").toggleClass("active")
    });

    $("li").click(function(e) {
        if ($(this).parents(".subMenu").hasClass("active")) {
            $(this).toggleClass("active")
        }
    });
	 $(".footerSection .arrow").click(function(e) {
            $(this).toggleClass("active")
			$(".footerSection .container").slideToggle();
			$(".FText").slideToggle();
			$('html, body').animate({scrollTop:$('.footerSection').position().top}, 1000);
    });
	$(".topMenu .arrow").click(function(e) {
            $(this).toggleClass("active")
			$(".topMenu .container").slideToggle();
		
    });
	 $(".quesBox").each(function (index, element) {
        $(this).find(".ques").click(function (e) {
            $(this).parent().addClass("active").siblings().removeClass("active")
        });
    });
	
	$("a.App").click(function(e) {
            $(this).toggleClass("active")
			$(".AppBox").fadeToggle();
    });
    $(".ViewAll").click(function (e) {
        $(".OverlayBg").fadeIn();
        $(".AllProductWapper").slideDown();
		$(".ViewAll").fadeOut("fast");
        $('html, body').animate({ scrollTop: $('.OurproductWapper').position().top }, 1000);
    });
     $(".ProdectSection").click(function (e) {
          $('html, body').animate({ scrollTop: $('.OurproductWapper').position().top }, 1000);
     });

     $(".showless, .closeBtn").click(function (e) {
         $(".OverlayBg").fadeOut();
        $(".AllProductWapper").slideUp();
		 $(".ViewAll").fadeIn("fast");
    });
	
})


//Menu end//

function searchBtn() {
    $(".search img").click(function (e) {
        $(this).parent(".search").toggleClass("active")
        $(this).parent(".search").find("input[type='text']").focus()
    });

    $(".searchclose").click(function () {
        $(".search").removeClass("active");
    });
}


$(function() {
    $('.Dropdown select').change(function () {

	   $('.' + $(this).val()).fadeIn().addClass('scale-anm').siblings().fadeOut().removeClass('scale-anm');
  });
});

function selectDropDown() {
    $(".Dropdown, .PLDropdown").each(function (index, element) {
        var val = $(this).find("select").find("option:selected").text();
        $(this).find("select").wrap("<div class='selectWrap'>").before("<div class='selectSpan'>" + val)
        $(this).find("select").change(function (e) {
            $(this).siblings(".selectSpan").text($(this).find("option:selected").text())
        });
    });
}		

function SelectControl() {
    $(".select-group").each(function (index, element) {
        if ($(this).find(".selectWrap").length < 1) {
            var val = $(this).find("select").find("option:selected").text();
            console.log(val)
            $(this).find("select").wrap("<div class='selectWrap'>").before("<div class='selectSpan'>" + val)
        }
        SelectFn($(this).find("select"))
        $(this).find("select").change(function (e) {
            SelectFn($(this))
        });
        function SelectFn(thisO) {
            thisO.siblings(".selectSpan").text(thisO.find("option:selected").text());
            if (thisO.find("option:selected").val() == 0) {
                thisO.parents('.selectWrap').find(".selectSpan").removeClass('active');
            } else {
                thisO.parents('.selectWrap').find(".selectSpan").addClass('active');
            }
        }
        console.log($(this).attr("class"))
    });
}

