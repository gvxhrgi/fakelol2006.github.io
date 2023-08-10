var modal = document.getElementById("myModal");
var btn = document.getElementById("submin-btn");
var closebtn = document.getElementById("close-btn");

btn.onclick = function() {
    modal.style.display = "block";
}

closebtn.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}