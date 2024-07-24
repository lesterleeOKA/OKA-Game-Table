import { HEADER } from './config.js';

const RainbowOneUtils = {
  updatePhonicsGameLink,
  updateSnakeGameLink,
  updateTypingGameLink,
  updateSpellingGameLink,
  updateHeadToWinGameLink,
  updateJumpToSurviveGameLink,
  nodoubletapzoom,
  hideURLPath,
};

function updatePhonicsGameLink(removalStatus) {
  console.log("removalStatus", removalStatus);
    const unitPicker = document.getElementById('mpcard-unit-picker');
    const modelPicker = document.getElementById('mp-model');
    const selectedUnit = unitPicker.value;
    let selectedModel = modelPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/Phonics/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
    window.open(newUrl, '_self');
}
function updateSnakeGameLink() {
    const unitPicker = document.getElementById('snake-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/Snake/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl, '_self');
}
function updateTypingGameLink() {
    const unitPicker = document.getElementById('typing-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/Typing/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl, '_self');
}
function updateSpellingGameLink(removalStatus) {
    console.log("removalStatus", removalStatus);
    const unitPicker = document.getElementById('mspell-unit-picker');
    const modelPicker = document.getElementById('ms-model');
    const selectedUnit = unitPicker.value;
    let selectedModel = modelPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/MotionSpelling/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
    window.open(newUrl, '_self');
}
function updateHeadToWinGameLink(removalStatus) {
  console.log("removalStatus", removalStatus);
  const unitPicker = document.getElementById('mhead-unit-picker');
  const modelPicker = document.getElementById('mh-model');
  const selectedUnit = unitPicker.value;
  let selectedModel = modelPicker.value;
  const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/HeadToWin/';
  const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
  window.open(newUrl, '_self');
}
function updateJumpToSurviveGameLink() {
  const unitPicker = document.getElementById('jump-unit-picker');
  const selectedUnit = unitPicker.value;
  const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/JumpToSurvive/';
  const newUrl = `${baseUrl}?unit=${selectedUnit}`;
  window.open(newUrl, '_self');
}

 function nodoubletapzoom() {
  console.log('HEADER:', HEADER);

  function preventZoom(event) {
    let touchStartTime, lastTouchTime, timeDiff, touches;

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
  }

  const elements = document.querySelectorAll('.game-card .game-image');
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('touchstart', preventZoom);
  }
}

function hideURLPath() {
  const currentURL = new URL(window.location.href);
  const baseURL = `${currentURL.protocol}//${currentURL.host}/`;

  const hiddenPath = 'RainbowOne/webapp/OKAGames/';

  // Check if the current URL includes the hidden path
  if (currentURL.pathname.includes(hiddenPath)) {
    // Store the original URL
    const originalURL = window.location.href;

    // Update the URL to the base URL
    window.history.replaceState(null, null, baseURL);

    // Set up the onbeforeunload event handler
    window.onbeforeunload = (event) => {
      // Check if the original URL is available
      if (originalURL) {
        // Navigate back to the original URL
        window.location.href = originalURL;
      }
    };
  } else {
    // Remove the onbeforeunload event handler if the hidden path is not present
    window.onbeforeunload = null;
  }
}

  export default RainbowOneUtils;