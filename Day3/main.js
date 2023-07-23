const modal = document.querySelector(".modal")
const openModal = document.querySelector('.open-modal-btn')
const iconClose = document.querySelector('.modal__header i')
const btnClose = document.querySelector('.modal__footer button')

function toggleModal() {
    modal.classList.toggle('hide')
}
openModal.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
