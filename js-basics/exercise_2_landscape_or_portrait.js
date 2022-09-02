/*
    * write a function that takes width and height of an image
     return true if the image is landscape, means width id greater than height
     else return false 
*/
function isLandscape(width, height) {
    // if (width > height)
    //     return true;
    // return false;

    return (width > height);
}

console.log(isLandscape(300, 600));