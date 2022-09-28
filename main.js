let index = 1;
showSliders(index);

function fade(n){
    showSliders(index+=n);
}

function positionSlider(n){
    showSliders(index=n);
}

setInterval(function time(){
    showSliders(index+=1)
},10000);

function showSliders(n){
    let i;
    let sliders = document.getElementsByClassName('mySlider');
    let bars = document.getElementsByClassName('bar');

    if(n > sliders.length){
        index = 1;
    }

    if(n < 1){
        index = sliders.length();
    }

    for(i = 0; i < sliders.length; i++){
        sliders[i].style.display = 'none';
    }

    for(i = 0; i < bars.length; i++){
        bars[i].className = bars[i].className.replace("active", "");
    }

    sliders[index-1].style.display = 'block';
    bars[index-1].className += ' active';
}