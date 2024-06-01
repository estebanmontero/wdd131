const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bogota Colombia",
        location: "Bogota Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/320%2C/0/default.jpg"
    },
    {
        templeName: "Columbia River Washington",
        location: "Washington, United States",
        dedicated: "2001, November, 18",
        area: 16880,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/400x250/columbia-river-temple-lds-130323-wallpaper.jpg"
    }
];

const gallery = document.getElementById('gallery');
const filterCriteria = document.getElementById('filterCriteria');

function displayTemples(filteredTemples) {
    gallery.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeDiv = document.createElement('div');
        templeDiv.classList.add('temple-card');
        templeDiv.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        gallery.appendChild(templeDiv);
    });
}

function filterTemples() {
    const criteria = filterCriteria.value;
    let filteredTemples = temples;

    if (criteria === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
    } else if (criteria === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) <= new Date('2000-01-01'));
    }

    displayTemples(filteredTemples);
}

filterCriteria.addEventListener('change', filterTemples);

// Initial display
displayTemples(temples);

// Updating the year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
