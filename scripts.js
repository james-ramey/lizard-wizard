// text loop
const textArray = ['analyst', 'podcaster', 'strategist', 'writer', 'audio producer', 'musician', 'dog lover'];
let currentTextIndex = 0;
setInterval(function() {
    document.getElementById('text-loop').textContent = textArray[currentTextIndex];
    currentTextIndex++;
    if (currentTextIndex >= textArray.length) {
      currentTextIndex = 0;
    }
  }, 1000); // change the value to adjust the duration between each loop
  