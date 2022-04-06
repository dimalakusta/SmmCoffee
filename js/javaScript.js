var tit = document.querySelector('.tit');
setTimeout(function () {
    tit.classList.add('active');
}, 3000)
var bottom = document.querySelector('.bottom-title');
setTimeout(function () {
    bottom.classList.add('active');
}, 2000)




function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 700);
    return false;
}
function slowScroller(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 700);
    return false;
}



$(window).scroll(function (e) {
    var height = $(this).scrollTop();
    $('.fixed-menu')[height >= 650 ? 'addClass' : 'removeClass']('active-fixed')
});



new WOW().init();


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('MySlides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className= dots[i].className.replace("active-dots","")
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += "active-dots";
}


 $(document).ready(function(){
            $('.slidebarBtn').click(function() {
                $('.slidebar').toggleClass('active-mobile');
                $('.slidebarBtn').toggleClass('toggle')
            })
        })


var modal = document.getElementById('MyModal');
var btn = document.getElementById('MyBtn');
var span = document.getElementsByClassName('close')[0];

btn.addEventListener('click', function(){ modal.style.display = 'block';})


span.onclick = function () {
    modal.style.display = 'none';
}
var account = document.getElementById('account');
account.addEventListener('click', function(){ modal.style.display = 'block';})
var modaccount = document.querySelector('.account-mobile');
modaccount.addEventListener('click', function(){ modal.style.display = 'block';})


$(".user-input").click(function () {
    $(this).parent().addClass('focus');
})

