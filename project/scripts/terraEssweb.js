const hamButton = document.querySelector('#hamMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML= `<span>${oLastModif}</span>`;