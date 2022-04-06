$(document).ready(() =>{

    $('.bars').click(function(){
        $('.navlist').slideToggle();
    });

    // navbar background change scroll
    $(window).scroll(() => {
        let position = $(this).scrollTop();
        if (position > 90){
            $(".nav").addClass("bg-navbar");
        }
        else {
            $('.nav').removeClass('bg-navbar')
        }
    });
});