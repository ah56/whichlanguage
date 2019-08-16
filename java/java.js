$(document).ready(function(){
$("form#someform").submit(function(event){
event.preventDefault();
var yourLanguage= funciton(val(#bug), val(#bird), val(#cat), val(#blackkeys), val(#indiferent), val(#diamond), val(#fly)) {
if (val(#bug)=1){
  var language = "Rust";
};
else if (val(#bird)=1){
  var language = "JavaScript";
};
else if (val(#cat)=1){
  var language = "Python";
};
else if (val(#blackkeys)=1){
  var language ="C#";
};
else if (val(#indiferent)=1){
  var language ="Go";
};
else if (val(#diamond)=1){
  var language = "Ruby";
};
else if (val(#fly)=1){
  var language = "Swift";
};
else {
  var language ="Naught";
};
return language;
};

$("#output").text(yourLanguage);
});
});
