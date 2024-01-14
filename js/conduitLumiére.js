const imageContainer = document.querySelector('.image-container');
const zoomImage = document.getElementById('bright1');

imageContainer.addEventListener('click', () => {
    imageContainer.classList.toggle('zoomed'); // Ajouter ou retirer la classe pour le zoom
});
