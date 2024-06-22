# APIs-Project
# Image Gallery

Welcome to the image gallery! Here are some example images. Use the buttons in your application to navigate through the pictures.

## Gallery

![Image 1](path/to/image1.jpg)
![Image 2](path/to/image2.jpg)
![Image 3](path/to/image3.jpg)

## HTML and JavaScript for Interactive Gallery

If you want to create an interactive gallery with previous and next buttons, you can use the following HTML and JavaScript code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery</title>
  <style>
    .gallery {
      display: flex;
      align-items: center;
    }
    button {
      margin: 0 10px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="gallery">
    <button id="prev">Previous</button>
    <img id="gallery-img" src="path/to/image1.jpg" alt="Gallery Image" width="300" />
    <button id="next">Next</button>
  </div>

  <script>
    const images = ['path/to/image1.jpg', 'path/to/image2.jpg', 'path/to/image3.jpg'];
    let currentIndex = 0;

    const imgElement = document.getElementById('gallery-img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      imgElement.src = images[currentIndex];
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      imgElement.src = images[currentIndex];
    });
  </script>
</body>
</html>

