$('#sidemenubar').find('> li').click(function() {
    $('#sidemenubar > li').not(this).find('ul').slideUp();
    $(this).find('ul').stop(true, true).slideToggle(400);
    return false;
});
$(window).on('scroll', function(){
    if(result= $(window).scrollTop() > 50){
        console.log(result);
        $('.header').addClass('stickynavbar');
        $('.header').css('background-color','rgb(27 20 38)');
        $('.menu_btn').css('padding','10px 20px');
        $('.dropdownmenu').css('top','3rem');
        
        // $('.menu > a').css('background-color','rgb(255 255 255 / 90%)');
    }else{
        $('.header').removeClass('stickynavbar');
        $('.header').css('background-color','');
        $('.menu_btn').css('padding','');
        $('.dropdownmenu').css('top','');
    }
});
// $(window).on('scrollend', function(event){
//     $('.sidebar').css('height', '80vh');

// });

// Dropdownmenu Toggle
$(document).ready(function(){
    
    const menu_btn = $('.action_btn');
    const dropdownmenu = $('.dropdownmenu');
    $(menu_btn).click(function(){
        $(dropdownmenu).toggleClass('open');

        if($(dropdownmenu).hasClass('open')){
            console.log(dropdownmenu);
           $(menu_btn).find('i').attr('class','fa-solid fa-xmark fa-lg');

        }else{
            $(menu_btn).find('i').attr('class','fa-solid fa-bars');
        };
    });
});