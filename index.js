const images = document.querySelectorAll(".slide")
const nextBtn = document.getElementsByClassName("right")
const prevBtn = document.getElementsByClassName("left")
let currentImageIndex = 0;
console.log(images.length)



function nextImage(){
    currentImageIndex++
    if(currentImageIndex < images.length){
        console.log(images[currentImageIndex])
        showImage()
    }
}

function prevImage(){
    currentImageIndex--;

    if(currentImageIndex >= images.length){
        console.log(images[currentImageIndex])

        showImage()
    }
}


function showImage(){
    for(var i=0;i<=images.length;i++){
        images[i].style.display = "block";
        
    }
    

    images[i].style.dispayc="none";
}

showImage()
