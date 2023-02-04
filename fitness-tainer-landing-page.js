
//HEADER BG COLOR CHANGE
// var position = $(window).scrollTop();

// // should start at 0

// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > position) {
//         $('.header').css('background-color', 'var( --primary-color)');

//     } else {
//         $('.header').css('background-color', 'transparent');
//     }
//     position = scroll;
// });
// HEADER SERVICES DROPDOWN

$('.services-a').mouseover(function () {
    if ($(window).width() >= 769) {


        $('.dropdown').css("padding-top", "178px");
        $(".service-dropdown-list").removeClass("slideup").addClass("slidedown");

    }
})

$('.home-page').mouseout(function () {
    if ($(window).width() >= 769) {
        $('.dropdown').css("padding-top", "22px");
        $(".service-dropdown-list").removeClass("slidedown").addClass("slideup");
    }
})

if ($(window).width() < 769) {
    $('.fa-bars').click(() => {
        $('.navList').css("display", "flex");
        $('.logo').css("display", "none");
        $('.fa-minus').css("display", "block");
        $('.fa-bars').css("display", "none");
    })

    $('.fa-minus').click(() => {
        location.reload();
        $('.navList').css("display", "none");
        $('.logo').css("display", "flex");
        $('.fa-minus').css("display", "none");
        $('.fa-bars').css("display", "flex");
    })


    $('.dropdown').css("padding-top", "22px");

    $('.service-responsive-dropdown-btn').click(() => {
        $(".service-dropdown-list").toggleClass('services-menu-open');

        $('.navList').toggleClass('navList-responsive-btn-click');

    })
}






