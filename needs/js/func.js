'use strict';

// Element toggle function
const toggleElement = function (element) {
  element.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  toggleElement(sidebar);
});

// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

// Modal toggle function
const toggleTestimonialsModal = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all testimonials items
for (const item of testimonialsItems) {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    toggleTestimonialsModal();
  });
}

// Add click event to modal close button and overlay
modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
overlay.addEventListener("click", toggleTestimonialsModal);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");

// Add event listener to the select
select.addEventListener("click", function () {
  toggleElement(select);
});

// Add event listener to all select items
for (const item of selectItems) {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    toggleElement(select);
    filterFunc(selectedValue);
  });
}

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

// Filter function
const filterFunc = function (selectedValue) {
  for (const item of filterItems) {
    item.classList.toggle("active", selectedValue === "all" || selectedValue === item.dataset.category);
  }
};

// Add event listener to all filter button items for large screen
let lastClickedBtn = filterBtns[0];

for (const btn of filterBtns) {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add input event listener to all form input fields
for (const input of formInputs) {
  input.addEventListener("input", function () {
    formBtn.toggleAttribute("disabled", !form.checkValidity());
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add click event listener to all navigation links
for (const link of navigationLinks) {
  link.addEventListener("click", function () {
    const pageName = this.innerHTML.toLowerCase();
    for (const page of pages) {
      page.classList.toggle("active", page.dataset.page === pageName);
    }
    for (const navLink of navigationLinks) {
      navLink.classList.toggle("active", navLink === this);
    }
    window.scrollTo(0, 0);
  });
}
