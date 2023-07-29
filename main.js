var imageUrls = [
    "./images/image1.jpg",
 "./images/image2.jpg",
  "./images/image3.jpg",
   "./images/image4.jpg", 
   "./images/image5.jpg", 
   "./images/image6.jpg", 
   "./images/image7.jpg", 
   "./images/image8.jpg"
];
var currentIndex = 0;
PhotoGalleryLib.onSizeClassChange (sizeChangeCallback);
function sizeChangeCallback(size){
    console.log(size);
    const galleryContainer = document.getElementById("mainBody");

    var heading = document.createElement("h1");
    heading.textContent = "My Photo Gallery";
    const gridElement = PhotoGalleryLib.generateGrid(imageUrls, size);

    galleryContainer.innerHTML = "";
    galleryContainer.appendChild(heading);
    galleryContainer.appendChild(gridElement);
}

function imageClickedCallback (imageIndex) {
    currentIndex = imageIndex;
    console.log ("Image clicked index: " + currentIndex);
    PhotoGalleryLib.setModalImgSrc (`./images/image${currentIndex+1}.jpg`);
    PhotoGalleryLib.openPresentationModal ();
}


function previousClickedCallback () {
    console.log ("Previous button clicked");
    if(currentIndex == 0){
        currentIndex = imageUrls.length-1;}
    else{currentIndex--;}
    
    PhotoGalleryLib.setModalImgSrc (`./images/image${currentIndex+1}.jpg`);
}

function nextClickedCallback () {
    console.log ("Next button clicked");
    if(currentIndex == imageUrls.length-1){
        currentIndex = 0;}
        else{currentIndex++;}
    PhotoGalleryLib.setModalImgSrc (`./images/image${currentIndex+1}.jpg`);
}
PhotoGalleryLib.createModal ();
PhotoGalleryLib.addImageClickHandlers (imageClickedCallback);
PhotoGalleryLib.initModal(closeClickedCallback, previousClickedCallback, nextClickedCallback);  
const button = document.getElementById("slideshow");
let intervalId;

function slideshowClickedCallback () {
    console.log ("Slideshow button clicked");
    intervalId = setInterval(nextClickedCallback, 1000);
    PhotoGalleryLib.openPresentationModal ()
}
function closeClickedCallback () {
    console.log ("Close button clicked");
    PhotoGalleryLib.closePresentationModal ();
    clearInterval(intervalId);
}

// 给按钮添加点击事件监听
button.addEventListener("click", slideshowClickedCallback);