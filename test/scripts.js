
console.log('ciao')

const imageButton = document.getElementById('imageUploadForm');

console.log(imageButton)

imageButton.addEventListener('submit',
    function(e) {
    e.preventDefault();

    console.log('sono nella funzione')

    const newImage = document.getElementById('newImage').files[0];

    let imageURL = URL.createObjectURL(newImage);
    console.log(imageURL)
    
    // imageCarousel.push(imageURL);
  
    }
)

