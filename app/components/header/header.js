(function menuButton() {
    var menuButton = document.querySelector('.header__btn');
    var headerMenu = document.querySelector('.header__nav');
    menuButton.addEventListener('click', function () {
        this.classList.toggle('header__btn_active');
        headerMenu.classList.toggle('header__nav_active');
    });
})();

(function scrollHeader() {
    var header = document.querySelector('.header_home');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 1) {
            header.classList.add('header_home-active');
        } else {
            header.classList.remove('header_home-active');
        }
    })
})();