var hamburger = document.getElementById("hamburger");
var primary_navigation = document.getElementById("primary-navigation");
hamburger.addEventListener("click", function(){
    if(primary_navigation.classList.contains("active-nav")) {
    	primary_navigation.classList.remove("active-nav");
    	primary_navigation.classList.add("deactive-nav");
    }else{
    	primary_navigation.classList.add("active-nav");
    	primary_navigation.classList.remove("deactive-nav");
    }
});

//Begin your custom JS here...
