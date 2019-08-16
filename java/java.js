$(document).ready(function(){
  alert("the fire");
$("btn").submit(function(event){
  alert("the fire");
  var yourLanguage= "alkdjfldsajkfl";
  $("p#output").append(yourLanguage);
  event.preventDefault();
});
/*$("button").click(function(){
$("button").fadeOut();
});*/
});
