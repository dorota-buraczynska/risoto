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