//hamburgesa//
function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    nav.classList.toggle("show-menu");
}


document.getElementById("exploreMore").addEventListener("click", function() {
    const extraContent = document.getElementById("extraContent");

    // Toggle visibility
    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        this.innerText = "Show Less"; // Change button text
    } else {
        extraContent.style.display = "none";
        this.innerText = "Explore More"; // Reset button text
    }
});
