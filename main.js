console.log('js-ok');



const next= document.getElementById('next');
const prev = document.getElementById('prev');
const thumbnails = document.querySelectorAll('.thumbnails img');



const sources = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp' ]
const gallery= document.querySelector('.gallery');


let imageElements='';


for(let i = 0 ; i < sources.length ; i++){
    
    imageElements += `<img src="${sources[i]}" alt="supereroe">`
    
}

gallery.innerHTML=imageElements;

const images= document.querySelectorAll('#carousel img');

let currentIndex = 0;

images[currentIndex].classList.add('active');

thumbnails[currentIndex].classList.add('active');


next.addEventListener('click', function(){

    images[currentIndex].classList.remove('active');

    thumbnails[currentIndex].classList.remove('active');

    currentIndex++;

    if(currentIndex === images.length ) currentIndex = 0;

    images[currentIndex].classList.add('active');

    thumbnails[currentIndex].classList.add('active');

})

prev.addEventListener('click', function(){
    
    images[currentIndex].classList.remove('active');

    thumbnails[currentIndex].classList.remove('active');

    currentIndex--;

    if(currentIndex < 0) currentIndex = images.length - 1;

    images[currentIndex].classList.add('active');

    thumbnails[currentIndex].classList.add('active');

})


