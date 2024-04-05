$(function(){	
    


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



    // 
    const swiperData=[
		{
			sub: "Taycan",
			title : "전기 모터",
			content : ["꿈은 가장 강력한 원동력입니다.<br> 포르쉐는 타이칸을 통해 이러한 신념을<br> 전기 모빌리티 영역에 반영하여 포르쉐<br>  E-퍼포먼스라는 새로운 장을 열었습니다."]
		},

		{
			sub: "911",
			title : "휘발유",
			content : ["시대를 초월하는 디자인, 스포티한 캐릭터,<br> 인체 공학적 설계: GT 스포츠 스티어링 휠,<br> 인스트루먼트 클러스터 및 스포츠 시트<br>  플러스가 포함된 콕핏."]
		},

		{
			sub: "Macan",
			title : "전기 모터",
			content : ["전율이 느껴지는 퍼포먼스. 나만을 위한<br>  맞춤형 드라이빙 모드. 심장에 새겨지는<br>  강렬한 주행 경험. 마칸 일렉트릭 터보는<br>  스포티한 SUV 그 이상을 실현합니다."]
		},
        {
			sub: "Panamera",
			title : "휘발유 ",
			content : ["완벽한 재생 사운드를 선사합니다.<br> ", "새로운 차원의 디테일.", "조형적 디자인.<br>", "형태와 기능의 조화."]
		}
	];

	function keytextFunction(n){
		let mainData="";
		let listData="";

		/*
		<p class="title">메탈의 경이로움 <span class="product">Beosound A5</span></p>
		<p class="subtitle">
			<span>어떤 포터블 스피커도 결코 갈 수 없었던 곳으로 향합니다.<span>
			<span>전에 만나볼 수 없던 음향.</span>
			<span>전에 만나볼 수 없던 미학.<span>
			<span>전에 만나볼 수 없던 자연스러움.<span>
		</p>
		*/

		for(let i=0; i<swiperData[n].content.length; i++){
			listData+=`<span>${swiperData[n].content[i]}</span>`;
		}

		mainData=`
			<p class="title">${swiperData[n].sub} <span class="product">${swiperData[n].title}</span></p>
			<p class="subtitle">
				${listData}
			</p>
		`;

		$(".textbox .textbox_inner").html(mainData);
	}

    let mainCurrent, mainTotal;
    
    let mainSwiper=new Swiper(".mainSwiper", {function(){
        
    },
    on :{ 
        init: function(){
            mainCurrent=this.realIndex+1;
            mainTotal=this.slides.length;
            $("span.current").text(mainCurrent);
            $("span.total").text(mainTotal);

            keytextFunction(this.realIndex);
        },
        slideChange: function(){
            mainCurrent=this.realIndex+1;
            $("span.current").text(mainCurrent);

            keytextFunction(this.realIndex);
        }
    },

    
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // 
});
});