function updatePhonicsGameLink() {
    const unitPicker = document.getElementById('mpcard-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = 'https://dev.openknowledge.hk/RainbowOne/webapp/lester/phonics/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl);
}
function updateSpellingGameLink() {
    const unitPicker = document.getElementById('mspell-unit-picker');
    const selectedUnit = unitPicker.value;
    const baseUrl = 'https://dev.openknowledge.hk/RainbowOne/webapp/lester/Motion-Spelling/';
    const newUrl = `${baseUrl}?unit=${selectedUnit}`;
    window.open(newUrl);
}