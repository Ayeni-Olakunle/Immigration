function clickMe2(value) {
    if (document.getElementById("clickMe" + value).style.height == "0px") {
        document.getElementById("clickMe" + value).style.height = "auto";
        document.getElementById("imag" + value).style.transform = "rotate(180deg)";
    }
    else {
        document.getElementById("clickMe" + value).style.height = "0px"
        document.getElementById("clickMe" + value).style.overflow = "hidden";
        document.getElementById("imag" + value).style.transform = "rotate(0deg)";
    }
}