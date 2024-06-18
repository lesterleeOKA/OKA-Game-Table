function updatePhonicsGameLink() {
    const unitPicker = document.getElementById('mpcard-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = window.location.origin + '/RainbowOne/webapp/OKAGames/Phonics/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl, '_self');
}
function updateSnakeGameLink() {
    const unitPicker = document.getElementById('snake-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = window.location.origin + '/RainbowOne/webapp/OKAGames/Snake/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl);
}
function updateTypingGameLink() {
    const unitPicker = document.getElementById('typing-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = window.location.origin + '/RainbowOne/webapp/OKAGames/Typing/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl);
}
function updateSpellingGameLink() {
    const unitPicker = document.getElementById('mspell-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = window.location.origin + '/RainbowOne/webapp/OKAGames/MotionSpelling/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl, '_self');
}


(function() {
    function nodoubletapzoom() {
      var touchStartTime, lastTouchTime, timeDiff, touches;
  
      this.addEventListener('touchstart', function preventZoom(event) {
        touchStartTime = event.timeStamp;
        lastTouchTime = this.dataset.lastTouch || touchStartTime;
        timeDiff = touchStartTime - lastTouchTime;
        touches = event.touches.length;
        this.dataset.lastTouch = touchStartTime;
  
        if (!timeDiff || timeDiff > 500 || touches > 1) return; // not double-tap
  
        event.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        this.click();
        this.click();
      });
    }
  
    // Apply the nodoubletapzoom function to the desired elements
    var elements = document.querySelectorAll('.game-card .game-image');
    for (var i = 0; i < elements.length; i++) {
      elements[i].nodoubletapzoom = nodoubletapzoom;
      elements[i].nodoubletapzoom();
    }
  })();