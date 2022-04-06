 $(document).ready(function () {
     $('.slidebarBtn').click(function () {
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
 account.addEventListener('click', function () {
     modal.style.display = 'block';
 })
 var modaccount = document.querySelector('.account-mobile');
 modaccount.addEventListener('click', function () {
     modal.style.display = 'block';
 })



 function slowScroller(id) {
     var offset = 0;
     $('html, body').animate({
         scrollTop: $(id).offset().top - offset
     }, 700);
     return false;
 }

 $(".user-input").focus(function () {
     $(this).parent().addClass('focus');
 })


 var kupchaA = document.querySelector('.kupcha-a');
 var kupcha = document.querySelector('.kupcha');
 kupchaA.addEventListener('click', function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
     kupcha.innerHTML = ( randomInteger(1, 3) );
}

)


 
