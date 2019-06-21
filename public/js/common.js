$(document).ready(function () {
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
     //$(window).scroll(function () {
//         // var pos = $('.SocialWapper').offset().top;
//         if ($(this).scrollTop() > 0) {
//             $('.SocialWapper').addClass('fixed');
//         } else {
//             $('.SocialWapper').removeClass('fixed');
//         }
//     });

    
});

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
    /* $(".rx-tab1").each(function(index, element) {
        $(".ThirdMenu-MainWapper .rx-contant-wrapper .rx-contant").hide()
                $(this).on("mouseover click", function () {
                    $(".ThirdMenu-MainWapper .rx-contant-wrapper .rx-contant").show()
                    $(this).addClass("active").siblings("li").removeClass("active")
                    var targetOption = $(this).attr("data-sublinks")
                    $(".rx-tab2").removeClass("active")
                    $("." + targetOption).addClass("active")
                });		
        });
        $(".rx-tab2").each(function(index, element) {
            $(this).on("mouseover click", function () {
                $(this).addClass("activeTab").siblings().removeClass("activeTab")
                var targetDiv = $(this).attr("data-targetDiv")
                $(".AllMenuLinkData").removeClass("active")
                $("." + targetDiv).addClass("active")
            });		
        });
        $(".rx-tab1").on("mouseleave", function () {
            $(".rx-tab1.active, .AllMenuLinkData.active").removeClass("active activeTab")
            $(".ThirdMenu-MainWapper .rx-contant-wrapper .rx-contant").hide()
        }); */
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

$(document).ready(function (){
    customRadio("grpuserfrd");
    customRadio("grphear");            
    customRadio("grprec");
    customRadio("grpothrprod");
    customRadio("grpexitcust");
	customRadio("grpOccupation");
    customCheckbox("sport[]");
    customCheckbox("car[]");
    customCheckbox("chkauth"); 
	searchBtn() ;
    selectDropDown();
    SelectControl();
})

/*  set Custom Radio   */
	function customRadio(radioName){
	    var radioButton = $('input[name="'+ radioName +'"]');
	    $(radioButton).each(function () {	        
	        if (!$(this).parent().hasClass("custom-radio")) {
	            $(this).wrap("<span class='custom-radio'></span>");
	        }
	        
	        if ($(this).is(':checked')) {
	            $(this).parent().addClass("selected");
	        } else {
	            $(this).parent().removeClass("selected");
	        }
	    });
	    $(radioButton).click(function(){
	        if($(this).is(':checked')){
	            $(this).parent().addClass("selected");
	        }
	        $(radioButton).not(this).each(function(){
	            $(this).parent().removeClass("selected");
	        });
	    });
	}	
			
   /*  set Custom Checkbox   */
	function customCheckbox(checkboxName){
	    var checkBox = $('input[name="'+ checkboxName +'"]');
	    $(checkBox).each(function(){
	        $(this).wrap( "<span class='custom-checkbox'></span>" );
	        if($(this).is(':checked')){
	            $(this).parent().addClass("selected");
	        }
	    });
	    $(checkBox).click(function(){
	        $(this).parent().toggleClass("selected");
	    });
	}