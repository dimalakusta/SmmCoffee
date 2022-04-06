 $(document).ready(function(){
            $('.slidebarBtn').click(function() {
                $('.slidebar').toggleClass('active-mobile');
                $('.slidebarBtn').toggleClass('toggle')
            })
        })



var modal = document.getElementById('MyModal');

var span = document.getElementsByClassName('close')[0];




span.onclick = function () {
    modal.style.display = 'none';
}
var account = document.getElementById('account');
account.addEventListener('click', function(){ modal.style.display = 'block';})
var modaccount = document.querySelector('.account-mobile');
modaccount.addEventListener('click', function(){ modal.style.display = 'block';})







$(document).ready(function(){
    $('.down').click(function() {
        $('.item-info').addClass('active-info');
        $('.down').css('display', 'none');
    })
    $('.up-key').click(function() {
        $('.item-info').removeClass('active-info');
        $('.down').css('display', 'inline');
    })
});
$(document).ready(function(){
    $('.more-img').click(function() {
        $('.nowadays').addClass('active-nowadays');
        $('.more').css('display', 'none');
    })
    $('.up-img').click(function() {
        $('.nowadays').removeClass('active-nowadays');
        $('.more').css('display', 'block');
    })
});


 function slowScroller(id) {
     var offset = 0;
     $('html, body').animate({
         scrollTop: $(id).offset().top - offset
     }, 700);
     return false;
 }