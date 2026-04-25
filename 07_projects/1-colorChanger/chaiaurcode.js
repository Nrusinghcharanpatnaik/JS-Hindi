const body = document.querySelector('body');
const button = document.getElementsByClassName('button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(e){
        console.log(e.target); 
        body.style.backgroundColor = e.target.id;
    }); 
};


