const burger = document.querySelector('nav svg');

burger.addEventListener('click' ,() =>{

    if(burger.classList.contains("active")){
        gsap.to('.links',{x: '100%'});
        gsap.set('body',{overflow:'auto'});
    }
    else{
        gsap.to('.links',{x: '0%'});
        gsap.fromTo('.links a', {opacity:0, y:0}, {opacity:1, delay:0.5, stagger:0.25, y:20});
        gsap.set('body',{overflow:'hidden'});
    }
    burger.classList.toggle("active");
});

const images = gsap.utils.toArray('.images');
gsap.set(images,{opacity:0});

images.forEach(image =>{
    ScrollTrigger.create({
        trigger:image,
        start:'top center',
        end:'bottom center',
        markers:false,
        onEnter: () =>{
            gsap.to(image,{opacity:1})
        }
    });
});
