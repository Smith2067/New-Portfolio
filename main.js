const navDiv = document.getElementById("navDiv");
function displayMenu(){
    if(navDiv.style.display == "none"){
        navDiv.style.display = "flex";
    }
    else{
        navDiv.style.display = "none";
    }
}

document.getElementById("hamburgerButton").addEventListener('click', displayMenu);