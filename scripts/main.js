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
    document.getElementById("footercolorchanger").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("footer").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
}
function changetrends() {
    var r = document.getElementById("valRed").innerHTML;
    var g = document.getElementById("valGreen").innerHTML;
    var b = document.getElementById("valBlue").innerHTML;
    document.getElementById("colorchanger").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("footercolorchanger").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("footer").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("slidescolorchanger").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
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
