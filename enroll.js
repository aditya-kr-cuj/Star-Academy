document.getElementById("openForm").addEventListener("click", function(e) {
    document.getElementById("formPopup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("formPopup").style.display = "none";
});

window.addEventListener("click", function(event) {
    let popup = document.getElementById("formPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});