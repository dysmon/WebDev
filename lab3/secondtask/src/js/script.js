"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".todo__list"),
    addButton = document.querySelector(".todo__button"),
    addInput = document.querySelector('.todo__add input[type="text"]');

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (addInput.value != "") {
      list.insertAdjacentHTML(
        "beforeend",
        `
	<li class="todo__list-item">
	  <input type="checkbox" class="todo__checkbox" />
	  ${addInput.value}
	  <div class="delete"></div>
	</li>
	`
      );
    }
    addInput.value = "";
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    } else if (e.target.classList.contains("todo__checkbox")) {
      const input = e.target.parentNode;
      if (e.target.checked) {
        input.style.textDecoration = "line-through";
      } else {
        input.style.textDecoration = "none";
      }
    }
  });
});
