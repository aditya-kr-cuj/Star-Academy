/* Enroll now courses */
document.querySelectorAll(".enroll-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("Popupform").style.display = "flex";
    });
});

document.getElementById("Popupclose").addEventListener("click", function() {
    document.getElementById("Popupform").style.display = "none";
});

window.addEventListener("click", function(event) {
    let popup = document.getElementById("Popupform");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
