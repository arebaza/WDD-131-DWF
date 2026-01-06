// Footer dates required by WDD 131 rubric
const spanAnioActual = document.querySelector("#currentyear");
spanAnioActual.textContent = new Date().getFullYear();

const spanUltimaModificacion = document.querySelector("#lastmodified");
spanUltimaModificacion.textContent = document.lastModified;
