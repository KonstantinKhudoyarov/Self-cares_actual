(function menuButton() {
    var menuButton = document.querySelector('.header__btn');
    var headerMenu = document.querySelector('.header__nav');
    menuButton.addEventListener('click', function () {
        this.classList.toggle('header__btn_active');
        headerMenu.classList.toggle('header__nav_active');
    });
})();