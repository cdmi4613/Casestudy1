$(function(){		
    let mainSwiper=new Swiper(".mainSwiper", {function(){
        $
    },

    
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


    // loop: true,
    // autoplay: {
    // 	delay: 1000,
    // 	disableOnInteraction: false // added
    // },

    

    });

    $(".lang li").click(function(e){
        e.preventDefault();
    $(".lang li").removeClass("active");
    $(this).addClass("active");
    });

    $("#gnb > ul > li").hover(
    function(){
        $("#gnb").addClass("active");
        $(this).find("ul").addClass("active");
        $(".menu_bg").addClass("active");
    },
    function(){
        $("#gnb").removeClass("active");
        $(this).find("ul").removeClass("active");
        $(".menu_bg").removeClass("active");
    }
);

$("#gnb > ul > li > a").focusin(function(){
    $("#gnb").addClass("active");
    $(this).parent().addClass("active");
    $(this).next().addClass("active");
    $(".menu_bg").addClass("active");
});

$("#gnb li li:last-child").focusout(function(){
    $("#gnb").removeClass("active");
    $(this).parent().parent().removeClass("active");
    $(this).parent().removeClass("active");
    $(".menu_bg").removeClass("active");
});


/////////////////////////////////
$("#tab").click(function(e){
        e.preventDefault();


        $("body").addClass("fixed");
        $("#mobile").addClass("active")
        $(".dim").addClass("active")
    })


    $("#tab_menu").click(function(e){ // added
    e.preventDefault();

    // if($("#sitemap").addClass("on") == false){
        $("body").addClass("fixed");
        $("#sitemap").addClass("on");
    // }
    
    });


$("#exit").click(function(e){
    e.preventDefault();

    // if($("#sitemap").removeClass("on") == false){
        $("#sitemap").removeClass("on");
    // }
});


//////////////////////

    $(".dim").click(function(e){
        e.preventDefault();

        $("body").removeClass("fixed");
        $("#mobile").removeClass("active")
        $(".dim").removeClass("active")
    })
    $("#mobile > ul > li").click(function(e){
        e.preventDefault();

        if($(this).hasClass("active") == false){
        $("#mobile > ul > li").removeClass("active");
        $(this).addClass("active");
        $("#mobile ul ul").slideUp(300);
        $(this).children("ul").slideDown(300);
    }
    else{
        $(this).removeClass("active");
        $(this).children("ul").slideUp(300);
    }

    })

});