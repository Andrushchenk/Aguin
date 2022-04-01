
// SCROLL
var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;
$(function(){
    function updateAnchors() {
        anchors = [];
        $('.scroll').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        if( e.originalEvent.wheelDelta >= 0) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1)
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();
});



// SLAIDER
    let slider = $("#slaider");


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






//  MASK
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600)
});








$(document).ready(function () {
    $(".works__arts").show();
    $(".works__illustrations").hide();
    $(".works__others").hide();
            $(".btn1").click(function () {
                $(".works__arts").show();
                $(".works__illustrations").hide();
                $(".works__others").hide();
            });
        $(".btn2").click(function () {
                $(".works__illustrations").show();
                $(".works__arts").hide();
                $(".works__others").hide();
        });
        $(".btn3").click(function () {
            $(".works__others").show();
            $(".works__illustrations").hide();
            $(".works__arts").hide();
    });
  });


var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}