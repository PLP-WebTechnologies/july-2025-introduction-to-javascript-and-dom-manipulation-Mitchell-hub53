// Function for first button
function changeText() {
  document.getElementById("introText").textContent = " Edit the text with a click!";
}
// Add a note when button clicked
let noteBtn = document.getElementById("noteBtn");
let notesList = document.getElementById("notesList");

noteBtn.addEventListener("click", function () {
  let newNote = document.createElement("li");
  newNote.textContent = "Note added at: " + new Date().toLocaleTimeString();
  notesList.appendChild(newNote);
});
//Theme colors
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

//  CSS for dark mode
let style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: black;
    color: white;
  }
`;
document.head.appendChild(style);
