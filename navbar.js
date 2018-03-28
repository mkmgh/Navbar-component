function myFunction() {
    var x = $(this).attr("mynavbar");
    console.log(x);
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
