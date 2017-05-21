//nav
$('.nav__menu-item').on('click', function (event) {
    var itemaActiveClass = 'nav__menu-item--active';
    $(this)
        .addClass(itemaActiveClass)
        .siblings().removeClass(itemaActiveClass);
});

$('.nav__button').on('click', function (event) {
    event.preventDefault();
    var buttonActiveClass = 'nav__button--active';
    $(this).toggleClass(buttonActiveClass);
    $('.nav__menu-list').toggleClass('visible');
});

//slider
var activeClass = 'slider__item--active';
var activeIndexPhoto = $('.slider__item--active').index();
var nextPhotoIndex;
var slide = $('.slider__item');

$('.slider__button--left').on('click', function () {
    slide.eq(activeIndexPhoto - 1).removeClass(activeClass);

    if (activeIndexPhoto === 1) {
        activeIndexPhoto = slide.length;
        nextPhotoIndex = slide.length;
    } else {
        nextPhotoIndex = activeIndexPhoto - 1;
        activeIndexPhoto--;
    }

    slide.eq(nextPhotoIndex - 1).addClass(activeClass);
});

$('.slider__button--right').on('click', function () {
    slide.eq(activeIndexPhoto - 1).removeClass(activeClass);

    if (activeIndexPhoto === slide.length) {
        activeIndexPhoto = 1;
        nextPhotoIndex = 1;
    } else {
        nextPhotoIndex = activeIndexPhoto + 1;
        activeIndexPhoto++;
    }

    slide.eq(nextPhotoIndex - 1).addClass(activeClass);
});

//restaurant-menu
$('.menu-section').on('click', function () {
    var menuNavSection = $(this).attr('data-menu-nav-section');
    var activeClass = 'menu-proposition--active';
    var menuSectionActiveClass = 'menu-section--active';

    $('.restaurant-menu__proposition').removeClass(activeClass);
    $(this)
        .addClass(menuSectionActiveClass)
        .siblings().removeClass(menuSectionActiveClass);

    $('.menu-proposition[data-menu-section="' + menuNavSection + '"]').addClass(activeClass);
});

//gallery slider
var openGallery = function () {
    $('.gallery__modal').css('display', 'block');
};

var closeGallery = function () {
    $('.gallery__modal').css('display', 'none');
};

var hideModalImages = function () {
    var modalImages = $('.gallery__modal-wrapper');
    modalImages.css('display', 'none');
};

var showModalImage = function (imageIndex) {
    var modalImage = $('.gallery__modal-wrapper').eq(imageIndex);
    var modalImages = $('.gallery__modal-image');
    modalImage.css('display', 'block');
    modalImages
        .css({left: '18px'})
        .eq(imageIndex).animate({left: '0'}, 300);

};

$('.gallery__image-wrapper').on('click', function () {
    var imageIndex = $(this).index();
    $('body').css('overflow', 'hidden');
    openGallery();
    hideModalImages();
    showModalImage(imageIndex);
});

$('.gallery__slide').on('click', function () {
    var slideIndex = $(this).index();
    hideModalImages();
    showModalImage(slideIndex);

});

$('.gallery__modal-wrapper').on('click', function () {
    var slides = $('.gallery__modal-wrapper');
    var slide = $('.gallery__modal-image');
    var firstSlide = $('.gallery__modal-wrapper[data-image-number="1"]');
    var imageNumber = parseInt($(this).attr('data-image-number'));
    var nextImageNumber = imageNumber + 1;
    var nextImage = $('.gallery__modal-wrapper[data-image-number=' + nextImageNumber + ']');

    slide.css({left: '18px'});
    $(this).css('display', 'none');
    nextImage.css('display', 'block');
    nextImage.find('.gallery__modal-image').animate({left: '0'}, 300);
    if (nextImageNumber > slides.length) {
        firstSlide.css('display', 'block');
        firstSlide.find('.gallery__modal-image').animate({left: '0'}, 300);
    }
});


$('.gallery__modal-close').on('click', function () {
    $('body').css('overflow', 'auto');
    closeGallery();
});



