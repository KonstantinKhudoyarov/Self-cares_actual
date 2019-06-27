//show more

function ShowMore(selector, settings) {
    this.element = document.querySelector(selector);
    this.items = settings.items;
    this.element.addEventListener('click', this.renderProducts.bind(this, this.items));
}

ShowMore.prototype.renderProducts = function (settings) {
    var productsContainer = document.querySelector('.products');
    var wrapper = document.querySelector('.main_products');
    var buffer = document.createDocumentFragment();
    var cdnPath = window.cdn_path || '';

    for (var i = 0; i < settings.length; i++) {
        var product = document.createElement('li');
        product.classList.add('products__item');
        product.innerHTML =
            '<div class="products__pack"><img src="' + cdnPath + settings[i].imgSrc +
            '" alt="" class="products__pack-img"></div><div class="products__content"><div class="products__item-title">' +
            settings[i].title + '</div><div class="products__item-subtitle">' + settings[i].subtitle +
            '</div><ul class="products__advantages"><li class="product__advantage">' + settings[i].advantage1 +
            '</li><li class="product__advantage">' + settings[i].advantage2 +
            '</li><li class="product__advantage">' + settings[i].advantage3 +
            '</li></ul></div>';

        buffer.appendChild(product);
    }

    productsContainer.appendChild(buffer);
    this.element.parentNode.removeChild(this.element);
    wrapper.classList.add('main_products-deleted-btn');
}

var showMore = new ShowMore('.btn-products',
    {
        items: [
            {
                imgSrc: 'img/luray-intense.png',
                title: 'Luray intense',
                subtitle: 'Капсулы для отбеливания кожи',
                advantage1: 'Осветляет кожу и убирает пигментные пятна',
                advantage2: 'Освежает и тонизирует кожу',
                advantage3: 'Продлевает молодость кожи'
            },
            {
                imgSrc: 'img/intoderm.png',
                title: 'Intoderm',
                subtitle: 'Таблетки от псориаза',
                advantage1: 'Оказывает противовоспалительное действие',
                advantage2: 'Устраняет зуд и шелушение кожи',
                advantage3: 'Восстанавливает поврежденные участки кожи'
            },
            {
                imgSrc: 'img/papilovit.png',
                title: 'Papilovit',
                subtitle: 'Капсулы против папиллом',
                advantage1: 'Подавляет активность вируса папилломы человека',
                advantage2: 'Повышает иммунитет',
                advantage3: 'Предупреждает вирусные и бактериальные заболевания'
            }
        ]
    });

//END show more