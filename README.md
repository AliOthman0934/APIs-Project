# APIs-Project
# Image Gallery

Welcome to the image gallery! Use the buttons to navigate through the pictures.

<div class="gallery">
  <button id="prev">Previous</button>
  <img id="gallery-img" src="image1.jpg" alt="Gallery Image" width="300" />
  <button id="next">Next</button>
</div>

<script>
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
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

<style>
  .gallery {
    display: flex;
    align-items: center;
  }
  button {
    margin: 0 10px;
  }
</style>
