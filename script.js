//nav
$('.nav__menu-item').on('click', function (event) {
    event.preventDefault();
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
    var nameActiveClass = 'menu-section__name--active';
    var imgActiveClass = 'menu-section__img--active';
    var starters = $('.menu-proposition[data-menu-section="starters"]');
    var dishes = $('.menu-proposition[data-menu-section="dishes"]');
    var deserts = $('.menu-proposition[data-menu-section="deserts"]');
    var drinks = $('.menu-proposition[data-menu-section="drinks"]');

    $('.restaurant-menu__proposition').removeClass(activeClass);
    $('.menu-section__name').removeClass(nameActiveClass);
    $('.menu-section__img').removeClass(imgActiveClass);
    $(this).find('.menu-section__name').addClass(nameActiveClass);
    $(this).find('.menu-section__img').addClass(imgActiveClass);

    if (menuNavSection === 'starters') {
        starters.addClass(activeClass);
    } else if (menuNavSection === 'dishes') {
        dishes.addClass(activeClass);
    } else if (menuNavSection === 'deserts') {
        deserts.addClass(activeClass);
    } else {
        drinks.addClass(activeClass);
    }
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
    modalImage.css('display', 'block');
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

$('.gallery__modal-image').on('click', function () {
    var imageIndex = $(this).index();
    console.log(imageIndex);
});

$('.gallery__modal-close').on('click', function () {
    $('body').css('overflow', 'auto');
    closeGallery();
});



