// Footer dates required by WDD 131 rubric

const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector("#lastmodified");
modifiedSpan.textContent = document.lastModified;
