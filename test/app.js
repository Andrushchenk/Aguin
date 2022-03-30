
// let mask = document.querySelector('.mask')

//     window.addEventListener('load', () => {
//     mask.classList.add('.hide')
//     setTimeout(() => {
//             mask.remove();
//         }, 600)
//     });




let slider = $("#slider");


slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 2500,
});
