const display = document.getElementById('image');
const originalText = 'Hover over an image below to display here.';

function upDate(previewPic) {
  display.style.backgroundImage = "url('" + previewPic.src + "')";
  display.textContent = previewPic.alt;
}

function unDo() {
  display.style.backgroundImage = "url('')";
  display.textContent = originalText;
}