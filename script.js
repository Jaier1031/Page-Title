$("button").click(function(){
    var brave = $(".brave").val();
    var  age = $(".age").val();
    
if (brave === "yes" && age <=15){
    $("p").text("Peter Parker(Spider-Man)");
 }else if ( brave === "no" && age >15){
        $("p").text("Flash Thompson");

}else if ( brave === "yes" && age >15){
        $("p").text("Michelle");
}else if ( brave === "no" && age <=15){
        $("p").text("Ned Leeds");
}
});