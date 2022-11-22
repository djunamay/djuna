$(document).ready(function(){
$('.clickButtons').click(function() {
  $("p.textC").attr('style','display:none;')
     var index = $("li").index(this); $("p.textC").eq(index).attr('style','display:block;')

});
});
