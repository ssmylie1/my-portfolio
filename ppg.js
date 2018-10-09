$(document).ready(function(){

//When you click on the before image, fade that image out.

 $(".before").click(function(){
    $(".before").fadeOut(1000);
});  

 //When you click on the after image,fade the before image back in

$(".after").click(function(){
    $(".before").fadeIn(1000);
}); 

//When you click on the after image, fade the before   
});