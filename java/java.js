$(document).ready(function(){
  alert("the fire");
$('#someform').submit(function(event){
  alert("the second fire");
  var imputBug = $("#bug").val();
  if (imputBug= 0){
    $('#js').show();
  };
  alert("the third fire");
  var imputBird= $("#bird").val();
  if (imputBird= 0){
    $('#js').show();
  };
  alert("the forth fire");
  var imputCat=$("#cat").val();
  if (imputBird= 0){
    $('#js').show();
  };
  event.preventDefault();
  alert("the second fire");
});
/*$("button").click(function(){
$("button").fadeOut();
});*/
});
