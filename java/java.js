$(document).ready(function(){
  alert("the fire");
$('#someform').submit(function(event){
  alert("the second fire");
  var imputBug = parseInt($("select#bug").val());
  if (imputBug= 0){
    $("jss").append("You Speak JS!");
  };
  alert("the third fire");
  var imputBird= parseInt($("select#bird").val());
  if (imputBird= 1){
    $(".jss").text("You Speak JS!");
  };
  alert("the forth fire");
  var imputCat=parseInt($("select#cat").val());
  if (imputCat= 0){
    $('.jss').show();
  };
  var imputBlackKeys=parseInt($("select#blackkeys").val());
  if (imputBlackKeys= 1){
    $('.python').show();
  };
  var imputIndiferent=parseInt($("select#indiferent").val());
  if (imputIndiferent= 0){
    $('.python').show();
  };
  var imputDiamond=parseInt($("select#diamond").val());
  if (imputDiamond= 0){
    $('.go').show();
  };
  var imputFly=parseInt($("select#fly").val());
  if (imputFly= 1){
    $('.go').show();
  };
  event.preventDefault();
  alert("the fifth fire");
});
$("button").click(function(){
$("button").fadeOut();
});
});
