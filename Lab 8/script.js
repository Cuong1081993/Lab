"use strict";

const modal = document.querySelector(".modal");
const overplay = document.querySelector(".overplay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const onpenModal = function () {
  modal.classList.remove("hidden");
  overplay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overplay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", onpenModal);

  btnCloseModal.addEventListener("click", closeModal);
  overplay.addEventListener("click", closeModal);
}
//kiểm tra class và gán nút ESC cho việc close modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


