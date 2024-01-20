import { renderImages, fetchRandomImages } from './data-images.js';

window.addEventListener('load', fetchRandomImages);

const section = document.createElement('section');
section.className = 'favorite';

const box = document.createElement('div');
box.className = 'box';

const searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.placeholder = 'Search for images';

const magnifyingGlass = document.createElement('i');
magnifyingGlass.className = 'fa-solid fa-magnifying-glass';

const magnifyingGlassLink = document.createElement('a');
magnifyingGlassLink.href = '#';
magnifyingGlassLink.appendChild(magnifyingGlass);

box.appendChild(searchInput);
box.appendChild(magnifyingGlassLink);

const slider = document.createElement('ul');
slider.className = 'slider';

const nav = document.createElement('nav');
nav.className = 'nav';

const prevButton = document.createElement('ion-icon');
prevButton.className = 'btn prev';
prevButton.name = 'arrow-back-outline';

const nextButton = document.createElement('ion-icon');
nextButton.className = 'btn next';
nextButton.name = 'arrow-forward-outline';

nav.appendChild(prevButton);
nav.appendChild(nextButton);

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

nav.addEventListener('click', activate);

searchInput.addEventListener('input', async function () {
    const inputValue = searchInput.value.trim();

    if (inputValue === '') {

        await fetchRandomImages();

    } else {

        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=ti8c27SmNez6qe6WmtC5qq9kMh1KCPvZu0dG7B8YrQI&per_page=5`);
            const searchData = await response.json();
            renderImages(searchData.results);
        } catch (error) {
            console.error(`Error fetching search images: ${error}`);
        }
    }
});

section.appendChild(box);
section.appendChild(slider);
section.appendChild(nav);

document.body.appendChild(section);
