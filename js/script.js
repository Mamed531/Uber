$(document).ready(function() {
   var mobBtn = $('.mob_btn');
   var menu = $('.menu');
   mobBtn.on('click', function() {
      menu.toggleClass('menu_active');
      mobBtn.toggleClass('mob_btn_active')
   })
});