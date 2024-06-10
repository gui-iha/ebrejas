function showDiv() {
    document.getElementById("RGBChooser").style.display = "block";
}

function changeRed(value) {
    document.getElementById("valRed").innerHTML = value;
    changeAll();
}
function changeGreen(value) {
    document.getElementById("valGreen").innerHTML = value;
    changeAll();
}
function changeBlue(value) {
    document.getElementById("valBlue").innerHTML = value;
    changeAll();
}

function changeAll() {
    var r = document.getElementById("valRed").innerHTML;
    var g = document.getElementById("valGreen").innerHTML;
    var b = document.getElementById("valBlue").innerHTML;
    document.getElementById("colorchanger").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("gallerycolorchanger").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("footercolorchanger").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";

}

function changetrends(value) {

    var galleryRvalue,galleryGvalue,galleryBvalue;
    var footerRvalue, footerGvalue,footerBvalue;
    if(value == 2050){
        galleryRvalue = 0;
        galleryGvalue = 255;
        galleryBvalue = 159;
        footerRvalue = 214;
        footerGvalue =  0;
        footerBvalue = 255;
    }else if(value == 2024){
        galleryRvalue = 254;
        galleryGvalue = 216;
        galleryBvalue = 177;
        footerRvalue = 111;
        footerGvalue =  78;
        footerBvalue = 55;
    }else if(value == 2020){
        galleryRvalue = 65;
        galleryGvalue = 244;
        galleryBvalue = 248;
        footerRvalue = 82;
        footerGvalue =  193;
        footerBvalue = 190;
    }else if(value == 2015){
        galleryRvalue = 171;
        galleryGvalue = 94;
        galleryBvalue = 95;
        footerRvalue = 32;
        footerGvalue =  66;
        footerBvalue = 83;
    }else if(value == 2010){
        galleryRvalue = 208;
        galleryGvalue = 93;
        galleryBvalue = 40;
        footerRvalue = 40;
        footerGvalue =  156;
        footerBvalue = 210;
    }else if(value == 2000){
        galleryRvalue = 166;
        galleryGvalue = 192;
        galleryBvalue = 213;
        footerRvalue = 127;
        footerGvalue =  147;
        footerBvalue = 147;
    }
    document.getElementById("gallerycolorchanger").style.backgroundColor =
        "rgb(" + galleryRvalue + "," + galleryGvalue + "," + galleryBvalue + ")";
    document.getElementById("footercolorchanger").style.backgroundColor =
        "rgb(" + footerRvalue + "," + footerGvalue + "," + footerBvalue + ")";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
