// Get all elements with the class "droptoggle"
const droptoggleElements = document.getElementsByClassName("droptoggle");

// Function to remove the "active" class from the next sibling element
const removeActiveClass = (currentElement) => {
  Array.from(droptoggleElements).forEach((element) => {
    if (
      (currentElement.classList === undefined && element !== currentElement) ||
      (!currentElement.classList.contains("hijo") && element !== currentElement)
    ) {
      const nextSibling = element.nextElementSibling;
      const iconSpan = element.querySelector(".icon");
      // Remove the class name from the next sibling element
      if (nextSibling) {
        nextSibling.classList.remove("active");
        iconSpan.classList.add("fa-folder");
        iconSpan.classList.remove("fa-folder-open")
      }
    }
  });
};

// Iterate through each element and add a click event listener
Array.from(droptoggleElements).forEach((element) => {
  // Add a click event listener to the current element
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    const nextSibling = element.nextElementSibling;
    const iconSpan = element.querySelector(".icon");
    // Toggle the class name on the next sibling element
    if (nextSibling) {
      console.log(nextSibling)
      nextSibling.classList.toggle("active");
      iconSpan.classList.toggle("fa-folder");
      iconSpan.classList.toggle("fa-folder-open")
    }
    removeActiveClass(element);
  });
});

//animation typing

const titleElement = document.getElementById("typing-title");
const titleText = `> Sullivan's Hacking`;
let charIndex = 0;
let cursorVisible = true;

function typeTitle() {
  const currentText = titleText.substring(0, charIndex);
  const cursor = cursorVisible ? "_" : "";
  titleElement.textContent = currentText + cursor;
  charIndex++;

  if (charIndex <= titleText.length) {
    setTimeout(typeTitle, 150); // Delay between each character typing (adjust as needed)
  } else {
    setInterval(() => {
      cursorVisible = !cursorVisible;
      titleElement.textContent = currentText + (cursorVisible ? "_" : "");
    }, 500); // Cursor blinking interval (adjust as needed)
  }
}

typeTitle();