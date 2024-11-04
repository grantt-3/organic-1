const modal = document.getElementById("myModal");

// Get the input field that opens the modal
const inputField = document.getElementById("myInput");

// Get the <span> element that closes the modal
const closeModal = document.getElementById("closeModal");
const searchLocation = document.querySelector(".search_input");

searchLocation.addEventListener("input", (e) => {
    console.log(e.target.value);
});

function openModal() {
    modal.style.display = "flex"; // Show modal
    setTimeout(() => {
        modal.classList.add("show"); // Add class to show modal
        document.body.classList.add("modal-open"); // Add class to body
        // Show modal content
        const modalContent = modal.querySelector(".modal-content");
        modalContent.classList.add("show");
    }, 0); // Trigger the CSS transition after setting display
}

// Function to close the modal
function closeModalFunction() {
    const modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("show"); // Remove class to hide modal content
    modal.classList.remove("show"); // Remove class to hide modal
    setTimeout(() => {
        modal.style.display = "none"; // Hide the modal after the transition
        document.body.classList.remove("modal-open"); // Remove class from body
    }, 300); // Match the duration of the transition
}

// When the user clicks on the input field, open the modal
inputField.addEventListener("click", openModal);

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener("click", closeModalFunction);

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModalFunction();
    }
});
