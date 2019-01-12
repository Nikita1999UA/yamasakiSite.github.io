$(function() {
    $('.slider_main').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.aside-nav').toggleClass('active');
	})
});