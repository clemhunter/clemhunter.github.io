document.querySelector('.button').addEventListener('click', function() {
    alert('Hurra!!!');
});


function setGifHeight() {
    const gifRow = document.querySelector('.gif-row');
    const screenHeight = window.innerHeight;
    const gifHeight = screenHeight / 5;
    gifRow.style.height = `${gifHeight}px`;
}

// Set gif height on page load and whenever the window is resized
window.addEventListener('load', setGifHeight);
window.addEventListener('resize', setGifHeight);

window.onload = function() {
    var poemContainer = document.getElementById('poem-container');
    var photoContainer = document.getElementById('photo-container');
    var poemHeight = poemContainer.offsetHeight;

    photoContainer.style.height = poemHeight + 'px';
}

