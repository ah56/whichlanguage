var yourLanguage = funciton(val("#bug"), val("#bird"), val("#cat"), val("#blackkeys"), val("#indiferent"), val("#diamond"), val("#fly")){
 if(val(#bug)="yes"{
  var language = "Rust";
});
else if (#bird="yes"){
  var language = "JavaScript";
});
else if (val(#cat)="yes"){
  var language = "Python";
};
else if (val(#blackkeys)="yes"){
  var language ="C#";
};
else if (val(#indiferent)="yes"){
  var language ="Go";
};
else if (val(#diamond)="yes"){
  var language = "Ruby";
};
else{
var language = "Naught";
return language;
};
};

$(document).ready(function(){
$("form#btton").submit(function(event){
event.preventDefault();
$("#output").text(yourLanguage);
});
});
