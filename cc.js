let container5 = document.querySelector('.header')
let container4 = document.querySelectorAll('nav a ')
let car = document.getElementById('cr')
let container3 = document.getElementById('drt')
let container1 = document.querySelector('.hh')
let container6 = document.querySelector('.ffd a')

window.onscroll = function(){
    let value = scrollY;
    car.style.paddingRight= value*3 + 'px';
    if(scrollY>=200){
        car.style.paddingRight=200
    }

     if(scrollY>=700){
        container5.classList.add ('yy') ; 
        container4[0].classList.add ('zz')
        container4[1].classList.add ('zz')
        container4[2].classList.add ('zz')
        container1.classList.add ('zz')


        
    }
    
        else{
            container5.classList.remove ('yy')
            container4[0].classList.remove ('zz')
            container4[1].classList.remove ('zz')
            container4[2].classList.remove ('zz')
            container1.classList.remove ('zz')}

}  
