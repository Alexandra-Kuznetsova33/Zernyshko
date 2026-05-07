// Данные меню
const menuData = {
    coffee: [
        { img: './img/menu/menu-img-1.png', price: '240₽', desc: 'Капучино на миндальном молоке с кокосовым сиропом', vol: '350 мл' },
        { img: './img/menu/menu-img-2.png', price: '270₽', desc: 'Латте на кокосовом молоке с кленовым сиропом', vol: '350 мл' },
        { img: './img/menu/menu-img-3.png', price: '360₽', desc: 'Раф с карамельным сиропом и шоколадом', vol: '250 мл' },
        { img: './img/menu/menu-img-4.png', price: '160₽', desc: 'Классический американо с зарядом бодрости', vol: '300 мл' },
        { img: './img/menu/menu-img-5.png', price: '160₽', desc: 'Флет уайт с насыщенным вкусом эфиопского эспрессо', vol: '300 мл' },
        { img: './img/menu/menu-img-6.png', price: '270₽', desc: 'Латте на овсяном молоке с добавлением корицы', vol: '300 мл' },
        { img: './img/menu/menu-img-7.png', price: '180₽', desc: 'Двойной эспрессо с высоким зарядом энергии', vol: '300 мл' },
        { img: './img/menu/menu-img-8.png', price: '240₽', desc: 'Капучино на соевом молоке с ореховым сиропом', vol: '300 мл' }
    ],
    desserts: [
        { img: './img/menu/dessert-1.png', price: '240₽', desc: 'Синабон с ароматной корицей и глазурью', vol: '250 гр' },
        { img: './img/menu/dessert-2.png', price: '270₽', desc: 'Воздушная датская слойка с нежным кремом', vol: '250 гр' },
        { img: './img/menu/dessert-3.png', price: '360₽', desc: 'Нежный крем-брюле с ягодами и карамельной корочкой', vol: '150 гр' },
        { img: './img/menu/dessert-4.png', price: '270₽', desc: 'Улитка с яблочно-лимонным джемом и изюмом', vol: '250 гр' },
        { img: './img/menu/dessert-5.png', price: '160₽', desc: 'Шоколадно-кофейный торт с глубоким вкусом какао', vol: '170 гр' },
        { img: './img/menu/dessert-6.png', price: '180₽', desc: 'Шоколадная тарталетка с кремом и  малиной', vol: '150 гр' },
        { img: './img/menu/dessert-7.png', price: '240₽', desc: 'Классический медовик со сливочным кремом', vol: '250 гр' },
        { img: './img/menu/dessert-8.png', price: '160₽', desc: 'Торт с нежным кремом, корицей и шоколадом', vol: '300 гр' }
    ],
    snacks: [
        { img: './img/menu/snack-1.png', price: '240₽', desc: 'Миндаль — идеальная закуска для перекуса', vol: '200 гр' },
        { img: './img/menu/snack-2.png', price: '360₽', desc: 'Классическое печенье с кусочками шоколада', vol: '250 гр' },
        { img: './img/menu/snack-3.png', price: '270₽', desc: 'Баранки с легкой солью — отличное дополнение к кофе', vol: '350 гр' },
        { img: './img/menu/snack-4.png', price: '270₽', desc: 'Булочка с маком, покрытая нежной сахарной глазурью', vol: '300 гр' },
        { img: './img/menu/snack-5.png', price: '160₽', desc: 'Свежий, хрустящий кешью — полезный перекус', vol: '150 гр' },
        { img: './img/menu/snack-6.png', price: '180₽', desc: 'Мягкое печенье с начинкой из шоколада', vol: '300 гр' },
        { img: './img/menu/snack-7.png', price: '240₽', desc: 'Нежные панкейки с сладким медом и маслом', vol: '250 гр' },
        { img: './img/menu/snack-8.png', price: '240₽', desc: 'Сытные треугольники с сырной начинкой', vol: '250 гр' },

    ]
};

// Функция создания одной карточки
function createCard(item) {
    return `
    <div class="menu-card">
      <div class="menu-card__img-wrapper">
        <img class="menu-card__img" src="${item.img}" alt="Menu">
      </div>
      <div class="menu-card__content">
        <h2 class="menu-card__price">${item.price}</h2>
        <p class="menu-card__description">${item.desc}</p>
        <p class="menu-card__volume">${item.vol}</p>
      </div>
    </div>
  `;
}

// Отрисовка меню для выбранной категории
function renderMenu(category) {
    const container = document.getElementById('menu-cards');
    const cards = menuData[category].map(createCard).join('');
    container.innerHTML = cards;
}

// Логика переключения кнопок
const buttons = document.querySelectorAll('.category-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        // Снимаем active со всех кнопок
        buttons.forEach(b => b.classList.remove('active'));
        // Ставим active на нажатую
        this.classList.add('active');
        // Получаем категорию из data-атрибута и рендерим
        const category = this.dataset.category;
        renderMenu(category);
    });
});

// При загрузке страницы отображаем кофе (уже с классом active)
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('coffee');
});


let map;
let mapRoute;

ymaps.ready(() => {
    map = new ymaps.Map('map', {
        center: [59.94428, 30.304020],
        zoom: 12,
        controls: ['zoomControl']
    });

    const placemark = new ymaps.Placemark([59.959999, 30.305868], {
        hintContent: '<strong>Кофейня «Зернышко»</strong><br>СПб, Коржекова, 5<br>Чашка кофе и уют ☕',
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/metka.svg',
        iconImageSize: [39, 70],
    });

    map.geoObjects.add(placemark);
});


