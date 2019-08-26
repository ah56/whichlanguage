$(document).ready(function(){
  //alert("the fire");
$('#someform').submit(function(event){
  $(".jss").hide();
  $(".python").hide();
  $(".go").hide();
  //alert("the second fire");
  var imputBug = parseInt($("select#bug").val());
  //alert("the third fire");
  var imputBird= parseInt($("select#bird").val());
  //alert("the forth fire");
  var imputCat=parseInt($("select#cat").val());

  var imputBlackKeys=parseInt($("select#blackkeys").val());

  var imputIndiferent=parseInt($("select#indiferent").val());

  var imputDiamond=parseInt($("select#diamond").val());

  var imputFly=parseInt($("select#fly").val());

    if ((imputBug+imputCat+imputFly+imputBird+imputDiamond+imputBlackKeys+imputIndiferent)===0){
      $(".go").show();
    }
    else if ((imputBug+imputCat+imputFly+imputBird+imputDiamond+imputBlackKeys+imputIndiferent)===1){
      $(".python").show();
    }
    else if ((imputBug+imputCat+imputFly+imputBird+imputDiamond+imputBlackKeys+imputIndiferent)>= 2){
      $(".jss").show();
    }
  event.preventDefault();
  //alert("the fifth fire");
});
//$("button").click(function(){
//$("button").fadeOut();
//});
});
