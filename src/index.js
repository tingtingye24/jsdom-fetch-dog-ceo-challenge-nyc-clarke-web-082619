console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchimgURl(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(json =>renderImgURl(json));
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(json => renderBreeds(json));
}

function renderImgURl(json){
    const ultag = document.getElementById("dog-image-container")
    json.message.forEach(element => {
        let img = document.createElement('img');
        img.src = element;
        ultag.append(img);
    });
}

function renderBreeds(json){
    const ultag = document.getElementById('dog-breeds');
    let allbreed =Object.keys(json.message);
    allbreed.forEach(element => {
        let breed = document.createElement('li')
        breed.id = element;
        breed.innerText = element;
        ultag.append(breed);
    })
}

document.addEventListener("DOMContentLoaded", function(){
    fetchimgURl();
    fetchBreeds();
    const ultag = document.getElementById('dog-breeds');
    ultag.addEventListener('click', () => {
        let breed = document.getElementById(event.target.id);
        breed.style.color = "red";
        console.log(event.target)   
    });
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', ()=>{
        let childrenlist = ultag.children;
        for(let i = 0; i<childrenlist.length; i++){
            if (childrenlist[i].innerText.charAt(0) == event.target.value){
                childrenlist[i].style.display = "block";
            } else {
                childrenlist[i].style.display = "none";
            }
        }
        
        // console.log(array);
        // ultag.children.filter(function(element){
        //     console.log(element);
        //     return element.charAt[0]==event.target.value;
        // })
    })
    
}); 