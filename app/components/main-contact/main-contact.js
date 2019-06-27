(function () {

    var inputs = document.querySelectorAll('.contact__input-field');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function (e) {
            e.target.parentNode.classList.add('contact__input_active');
        });
        inputs[i].addEventListener('blur', function (e) {
            if (!e.target.value) {
                e.target.parentNode.classList.remove('contact__input_active');
            }
        });
    }

})();

jQuery(function () {
    jQuery('textarea').autoResize({
        extraSpace: 0
    });
});