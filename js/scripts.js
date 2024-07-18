const items = document.getElementById('items');

items.innerHTML += `
<div class="item col-10 active">
    <img src="img/01.webp">
</div>
<div class="item col-10">
    <img src="img/02.webp">
</div>
<div class="item col-10">
    <img src="img/03.webp">
</div>
<div class="item col-10">
    <img src="img/04.webp">
</div>
<div class="item col-10">
    <img src="img/05.webp">
</div>
`

const singleItem = document.getElementsByClassName('item');

const thumbContainer = document.getElementById('thumbnail-images');
thumbContainer.innerHTML += `
<div class="thumb-img opacity-1">
    <img src="img/01.webp">                    
</div>
<div class="thumb-img">
    <img src="img/02.webp">
</div>
<div class="thumb-img">
    <img src="img/03.webp">
</div>
<div class="thumb-img">
    <img src="img/04.webp">
</div>
<div class="thumb-img">
    <img src="img/05.webp">
</div>
`

const thumbImg = document.getElementsByClassName('thumb-img');


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
            thumbImg[activeItem].classList.remove('opacity-1');

            activeItem++;

            singleItem[activeItem].classList.add('active');
            thumbImg[activeItem].classList.add('opacity-1');
        }

        else if (activeItem == imageCarousel.length - 1) {
            singleItem[activeItem].classList.remove('active');
            thumbImg[activeItem].classList.remove('opacity-1');

            activeItem = 0;

            singleItem[activeItem].classList.add('active');
            thumbImg[activeItem].classList.add('opacity-1');
        }
    }
)

prevButton.addEventListener('click',
    function() {
        if (activeItem > 0) {
            singleItem[activeItem].classList.remove('active');
            thumbImg[activeItem].classList.remove('opacity-1');

            activeItem--;

            singleItem[activeItem].classList.add('active');
            thumbImg[activeItem].classList.add('opacity-1');
        }

        else if (activeItem == 0) {
            singleItem[activeItem].classList.remove('active');
            thumbImg[activeItem].classList.remove('opacity-1');

            activeItem = imageCarousel.length - 1;

            singleItem[activeItem].classList.add('active');
            thumbImg[activeItem].classList.add('opacity-1');
        }
        }
)


const imageButton = document.getElementById('imageUpload');

imageButton.addEventListener('submit',
    function(event) {
    event.preventDefault();

    const newImage = document.getElementById('newImage').files[0];

    let imageURL = URL.createObjectURL(newImage);
    
    imageCarousel.push(imageURL);
    console.log(imageCarousel);

    items.innerHTML += `
        <div class="item">
            <img src="${imageURL}">
        </div>
    `
    thumbContainer.innerHTML += `
        <div class="thumb-img">
            <img src="${imageURL}">                    
        </div>
    `

    console.log(items)
  
    }
)

