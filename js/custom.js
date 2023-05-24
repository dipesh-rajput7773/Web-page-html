
// $('#banner-carousal').owlCarousel({
//     margin:30,
//     nav:true,
//     dots:true,
//     responsive:{
//         0:{
//             items:1,
//             margin:15
//         },
//         480:{
//             items:1,
//             margin:15
//         },
//         991:{
//             items:1,
//             margin:15
//         },
//         1450:{
//             items:1,
//         }
//     }
// })


        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                items:1,
                loop:true,
                nav:true,
                dots:true,
                autoplay:true,
                autoplaySpeed:1000,
                smartSpeed:1500,
                autoplayHoverPause:true
            });
        });
  

/*

$(window).scroll(function(){
    if($(document).scrollTop() > 60) {
        $("header").addClass("header-chng");
    }
    else{
        $("header").removeClass("header-chng");
    }
})*/


