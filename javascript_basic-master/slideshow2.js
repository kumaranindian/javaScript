var pos = document.getElementById("slide")
var text = document.getElementById("slideshow")

counter = 1;
counter1 = 10;

slideShowFunction = function(){
    if(counter <=5 ){
        
        pos.src = "image00" + counter + ".jpg"
        text.style.backgroundColor ="red"
       
        pos.style.left=counter1+"px"
        counter++
        counter1 = counter1+10
    }else{
        counter = 1;
        counter1=10;
    }
}

setInterval(slideShowFunction, 4000)