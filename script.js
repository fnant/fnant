// Get the start time when the page starts loading
const startTime = performance.now();

// Add an event listener for the 'load' event
window.addEventListener('load', () => {
  // Calculate the load time
  const loadTime = (performance.now() - startTime) / 1000;
  // Get the existing p tag element with id 'load_time'
  const loadTimeElement = document.getElementById('load_time');

  // Set the text of the existing p tag to the load time
  loadTimeElement.textContent = `Load time: ${loadTime.toFixed(3)} s`;
});

function changeImage() {
	console.log("change image");
    document.getElementById("image_on").src = "image.webp";
}