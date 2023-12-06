const fontSizes = document.querySelector(".book__control");
const fontSize = [...fontSizes.children];
const bookContent = document.querySelector(".book__content");
fontSizes.addEventListener("click", (e) => {
  if (e.target.tagName == "DIV") {
    e.preventDefault()
  }
  else {
    removeClass(fontSize, "font-size_active");
    e.preventDefault();
    e.target.classList.add("font-size_active");
    deleteClass(bookContent, "font-size_big", "font-size_small");
    if (e.target.getAttribute("data-size") == "big") {
      bookContent.classList.add("font-size_big");
    } else if (e.target.getAttribute("data-size") == "small") {
      bookContent.classList.add("font-size_small");
    }
  }
});
const colorText = document.querySelector(".book__control.book__control_color");
const colorTextArray = [...colorText.children];
colorTextArray.splice(0, 1);
colorText.addEventListener("click", (e) => {
  if ((e.target.className == "color__title") || (e.target.className == "book__control book__control_color")) {
    e.preventDefault();
  }
  else {
    e.preventDefault();
    removeClass(colorTextArray, "color_active");
    e.target.classList.add("color_active");
    deleteClass(
      bookContent,
      "book_color-black",
      "book_color-gray",
      "book_color-whitesmoke"
    );
    if (e.target.getAttribute("data-text-color") == "black") {
      e.target.classList.add("book_color-black");
    } else if (e.target.getAttribute("data-text-color") == "gray") {
      bookContent.classList.add("book_color-gray");
    } else if (e.target.getAttribute("data-text-color") == "whitesmoke") {
      bookContent.classList.add("book_color-whitesmoke");
    }
  }
});
const colorbg = document.querySelector(
  ".book__control.book__control_background"
);
let colorbgArray = [...colorbg.children];
colorbgArray.splice(0, 1);
colorbg.addEventListener("click", (e) => {
  e.preventDefault();
  deleteClass();
  if ((e.target.className == "color__title") || (e.target.className == "book__control book__control_background")) {
    e.preventDefault()}
  else {
      removeClass(colorbgArray, "color_active");
      e.target.classList.add("color_active");
      deleteClass(
        bookContent,
        "bg_color_black",
        "bg_color_gray",
        "bg_color_white"
      );
      if (e.target.getAttribute("data-bg-color") == "black") {
        bookContent.classList.add("bg_color_black");
      } else if (e.target.getAttribute("data-bg-color") == "gray") {
        bookContent.classList.add("bg_color_gray");
      } else if (e.target.getAttribute("data-bg-color") == "white") {
        bookContent.classList.add("bg_color_white");
      }
  }
});

// функция по обнулению активного класса
function removeClass(array, className) {
  for (i = 0; i < array.length; i++) {
    if (array[i].classList.contains(className)) {
      array[i].classList.remove(className);
    }
  }
}

// функция по удалеию ненужных классов
function deleteClass(element, ...classes) {
  for (let i = 0; i < classes.length; i++) {
    if (element.classList.contains(classes[i])) {
      element.classList.remove(classes[i]);
    }
  }
}