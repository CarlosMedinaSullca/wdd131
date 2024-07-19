const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML= `<span>${oLastModif}</span>`;

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
