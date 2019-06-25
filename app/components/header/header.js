(function () {
    //navigation button
    var menuButton = document.querySelector('.header__btn');
    var headerMenu = document.querySelector('.header__nav');
    menuButton.addEventListener('click', function () {
        this.classList.toggle('header__btn_active');
        headerMenu.classList.toggle('header__nav_active');
    });
    //END navigation button

    //scroll header

    function scrollHeader(elem) {
        var header = document.querySelector('.header');
        var breadCrumbs = document.querySelector('.breadcrumbs');
        var scrollHeight = (breadCrumbs) ? header.offsetHeight + breadCrumbs.offsetHeight : header.offsetHeight;
        return function () {
            if (window.pageYOffset > scrollHeight) {
                elem.classList.add('header_home-active');
            } else {
                elem.classList.remove('header_home-active');
            }
        }
    }

    window.addEventListener('scroll', scrollHeader(document.querySelector('.header'), 100));
    //END scroll header

    //lang switcher
    var langButton = document.querySelector('.lang');
    var langItems = document.querySelectorAll('.lang__item');
    var langMainFlag = document.querySelector('.lang__flag_main');
    var cdnPath = window.cdn_path || '';

    langButton.addEventListener('click', function () {
        this.classList.toggle('lang_active');
    });

    for (var i = 0; i < langItems.length; i++) {
        langItems[i].addEventListener('click', function () {
            langMainFlag.style.backgroundImage = 'url(' + cdnPath + 'img/' + this.dataset.lang + '.png)';
        });
    }
    //END lang switcher

})();