import { HEADER } from './config.js';


const openTab = '_self';
//const openTab = '_blank';

const RainbowOneUtils = {
  updatePhonicsGameLink,
  updateSnakeGameLink,
  updateTypingGameLink,
  updateSpellingGameLink,
  updateFruitNinjaGameLink,
  updateHeadToWinGameLink,
  updateCrossTheFloorGameLink,
  updateWordBlitzGameLink,
  updateJumpToWinGameLink,
  nodoubletapzoom,
  hideURLPath,
};

function openRedirectPage(url) {
  window.open(`redirect.html?url=${url}`, openTab);
}

function updatePhonicsGameLink(removalStatus, selectedModel) {
  console.log("removalStatus", removalStatus);
  console.log("change Model", selectedModel);
    const unitPicker = document.getElementById('mpcard-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/2.8/gameFile/OKAGames/Phonics/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
    //openRedirectPage(newUrl);
    window.open(newUrl, openTab);
}
function updateSnakeGameLink() {
    const unitPicker = document.getElementById('snake-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/Snake/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    //openRedirectPage(newUrl);
    window.open(newUrl, openTab);
}
function updateTypingGameLink() {
    const unitPicker = document.getElementById('typing-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/Typing/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    //openRedirectPage(newUrl);
    window.open(newUrl, openTab);
}
function updateSpellingGameLink(removalStatus, selectedModel) {
    console.log("removalStatus", removalStatus);
    console.log("change Model", selectedModel);
    const unitPicker = document.getElementById('mspell-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/MotionSpelling/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
    //openRedirectPage(newUrl);
    window.open(newUrl, openTab);
}
function updateFruitNinjaGameLink(removalStatus, selectedModel) {
  console.log("removalStatus", removalStatus);
  console.log("change Model", selectedModel);
  const unitPicker = document.getElementById('mfruitNinja-unit-picker');
  const selectedUnit = unitPicker.value;
  const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/FruitNinja/';
  const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
  //openRedirectPage(newUrl);
  window.open(newUrl, openTab);
}

function updateHeadToWinGameLink(removalStatus, selectedModel) {
  console.log("removalStatus", removalStatus);
  console.log("change Model", selectedModel);
  const unitPicker = document.getElementById('mhead-unit-picker');
  const selectedUnit = unitPicker.value;
  const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/HeadToWin/';
  const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
  //openRedirectPage(newUrl);
  window.open(newUrl, openTab);
}

function updateCrossTheFloorGameLink() {
  const unitPicker = document.getElementById('crossTheFloor-unit-picker');
  const selectedUnit = unitPicker.value;
  const baseUrl = HEADER + '/RainbowOne/webapp/OKAGames/CrossTheFloor/';
  const newUrl = `${baseUrl}?unit=${selectedUnit}`;
  //openRedirectPage(newUrl);
  window.open(newUrl, openTab);
}

function updateWordBlitzGameLink() {
  const unitPicker = document.getElementById('wordBlitz-unit-picker');
  const selectedUnit = unitPicker.value;
  const baseUrl = HEADER + '/RainbowOne/webapp/2.8/gameFile/OKAGames/WordBlitz/';
  const newUrl = `${baseUrl}?unit=${selectedUnit}`;
  //openRedirectPage(newUrl);
  window.open(newUrl, openTab);
}

function updateJumpToWinGameLink() {
  const unitPicker = document.getElementById('jump-unit-picker');
  const selectedUnit = unitPicker.value;
  const baseUrl = HEADER + '/RainbowOne/webapp/2.8/gameFile/OKAGames/JumpToWin/';
  const newUrl = `${baseUrl}?unit=${selectedUnit}`;
  //openRedirectPage(newUrl);
  window.open(newUrl, openTab);
}

 function nodoubletapzoom() {
  //console.log('HEADER:', HEADER);

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

  const hiddenPath = 'RainbowOne/webapp/2.8/gamefile/OKAGames/';

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