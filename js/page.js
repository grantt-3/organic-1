const modal = document.getElementById("myModal");
const inputField = document.getElementById("myInput");
const closeModal = document.getElementById("closeModal");
const searchLocation = document.querySelector(".search_input");

searchLocation.addEventListener("input", (e) => {
    console.log(e.target.value);
});

function openModal() {
    modal.style.display = "flex"; 
    setTimeout(() => {
        modal.classList.add("show"); 
        document.body.classList.add("modal-open"); 
        const modalContent = modal.querySelector(".modal-content");
        modalContent.classList.add("show");
    }, 0); 
}

function closeModalFunction() {
    const modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("show"); 
    modal.classList.remove("show"); 
    setTimeout(() => {
        modal.style.display = "none"; 
        document.body.classList.remove("modal-open"); 
    }, 300); 
}

inputField.addEventListener("click", openModal);

closeModal.addEventListener("click", closeModalFunction);

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModalFunction();
    }
});
