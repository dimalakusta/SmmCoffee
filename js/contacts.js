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




 $(".user-input").focus(function () {
     $(this).parent().addClass('focus');
 });





 function slowScroller(id) {
     var offset = 0;
     $('html, body').animate({
         scrollTop: $(id).offset().top - offset
     }, 700);
     return false;
 }