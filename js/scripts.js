const items = document.getElementById('items');

items.innerHTML += `
<div class="item active">
    <img src="img/01.webp">
</div>
<div class="item">
    <img src="img/02.webp">
</div>
<div class="item">
    <img src="img/03.webp">
</div>
<div class="item">
    <img src="img/04.webp">
</div>
<div class="item">
    <img src="img/05.webp">
</div>
`

const singleItem = document.getElementsByClassName('item');

let activeItem = 0;

const imageCarousel = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click',
    function() {
        if (activeItem < imageCarousel.length - 1) {
            singleItem[activeItem].classList.remove('active');

            activeItem++;

            singleItem[activeItem].classList.add('active');
        }

        else if (activeItem == imageCarousel.length - 1) {
            singleItem[activeItem].classList.remove('active');

            activeItem = 0;

            singleItem[activeItem].classList.add('active');
        }
    }
)

prevButton.addEventListener('click',
    function() {
        if (activeItem > 0) {
            singleItem[activeItem].classList.remove('active');

            activeItem--;

            singleItem[activeItem].classList.add('active');
            }

        else if (activeItem == 0) {
            singleItem[activeItem].classList.remove('active');

            activeItem = imageCarousel.length - 1;

            singleItem[activeItem].classList.add('active');
        }
        }
)