const hamButton = document.querySelector('#hamMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
/*
const curYear = document.querySelector("#currentYear");
const lmod = document.querySelector("#lastModified");
const today = new Date();
curYear.innerHTML = `${today.getFullYear()}`;
lmod.innerHTML = `Last Modification: ${new Date(document.lastModified)}`;*/
const curYear = document.querySelector("#currentYear");
const lmod = document.querySelector("#lastModified");
const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML= `<span>${oLastModif}</span>`;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temples from here
    {
      templeName: "Anchorage Alaska",
      location: "Anchorage, Alaska, United States",
      dedicated: "1999, January, 9",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x250/anchorage-temple-lds-746769-wallpaper.jpg"
    },
    {
      templeName: "Arequipa Perú",
      location: "Arequipa, Perú",
      dedicated: "2019, December, 15",
      area: 26969,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
    },
    {
      templeName: "Los Angeles California",
      location: "Los Angeles, California, United States",
      dedicated: "1956, March, 1956",
      area: 190614,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
    },
    {
      templeName: "Cochabamba Bolivia",
      location: "Cochabamba, Bolivia",
      dedicated: "2000, Abril, 30",
      area: 33302,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/e012ebb4075dc7976a314471fc0a3b3058e37c1a/full/320%2C/0/default"
    },
    // Add more temple objects here...
  ];

createTempleCard(temples);

const oldLink= document.querySelector("#oldTemples");
const newLink= document.querySelector("#newTemples");
const largeLink= document.querySelector("#largeTemples");
const smallLink= document.querySelector("#smallTemples");
const homeLink= document.querySelector("#returnHome");


largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area>90000
    ));
});

smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area<100000  
  ));
});

oldLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated)<1900
  ));
});

newLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated)>2000
  ));
});

homeLink.addEventListener("click", () => {
  createTempleCard(temples)
});

function createTempleCard(filteredTemples) {
    document.querySelector(".filtTemples").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".filtTemples").appendChild(card);
    });
}