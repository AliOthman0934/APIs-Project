export function renderImages(data) {
    const slider = document.querySelector('.slider');
    slider.innerHTML = ''; 

    data.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.className = 'item';

        listItem.style.backgroundImage = `url(${item.urls.raw})`;

        const content = document.createElement('div');
        content.className = 'content';

        const title = document.createElement('h2');
        title.className = 'title';
        title.textContent = item.alt_description || 'Untitled';

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = item.description || '';

        const button = document.createElement('a');
        button.href =item.links.html;
        button.textContent = 'View';
        button.setAttribute('target','blank')

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(button);

        listItem.appendChild(content);
        slider.appendChild(listItem);
    });
}


export async function fetchRandomImages() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?count=5&client_id=ti8c27SmNez6qe6WmtC5qq9kMh1KCPvZu0dG7B8YrQI');
        
        if(!response.ok){
            window.alert("Error fetching random images. Please try again in an hour.");
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        renderImages(data);
    } catch (error) {
        console.error(`Error fetching random images: ${error}`);
    }


}
