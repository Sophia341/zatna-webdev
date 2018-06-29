var isVisible = false;

function toggleInfo(){
   if(isVisible == true){
       document.getElementById("Ph").style.visibility = "hidden";
       document.getElementById("btn").innerHTML = "&darr; show more";
       isVisible = false;
       
       /*document.getElementById("test").innerHTML="show more";*/
       
   } 
    else{
        document.getElementById("Ph").style.visibility = "visible";
        document.getElementById("btn").innerHTML = "&uarr; show less";
        isVisible = true;
        
        
    }
    
}