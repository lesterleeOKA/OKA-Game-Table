import RainbowOneUtils from './script.js';
      RainbowOneUtils.nodoubletapzoom();
      //RainbowOneUtils.hideURLPath();
      const toggleRemovalStatus = (switchElement, statusVariable) => {
        switchElement.checked = false;
        switchElement.addEventListener('change', function() {
          statusVariable.value = this.checked ? "&removal=1" : "";
          console.log(`Switch is ${this.checked ? 'on' : 'off'}!`, statusVariable.value);
        });
      };

      const toggleModel = (modelElement, modelVariable) => {
        modelElement.checked = true;
        modelElement.addEventListener('change', function() {
          modelVariable.value = this.checked ? "full" : "lite";
          console.log(`Switch is ${this.checked ? 'on' : 'off'}!`, modelVariable.value);
        });
      };

      const setupToggle = (bgRemoveId, modelId, removalStatus, model) => {
        const bgRemoveSwitch = document.getElementById(bgRemoveId);
        const modelElement = document.getElementById(modelId);
        toggleRemovalStatus(bgRemoveSwitch, removalStatus);
        toggleModel(modelElement, model);
      };

      let mp_removalStatus = { value: "" }, ms_removalStatus = { value: "" }, 
          mfn_removalStatus = { value: "" }, mh_removalStatus = { value: "" };
      let mp_model = { value: "full" }, ms_model = { value: "full" }, 
          mfn_model = { value: "full" }, mh_model = { value: "full" };

      setupToggle('mp-bg-remove', 'mp-model', mp_removalStatus, mp_model);
      setupToggle('ms-bg-remove', 'ms-model', ms_removalStatus, ms_model);
      setupToggle('mfn-bg-remove', 'mfn-model', mfn_removalStatus, mfn_model);
      setupToggle('mh-bg-remove', 'mh-model', mh_removalStatus, mh_model);

      const buttons = [
        'phonicsBtn', 'snakeBtn', 'typingBtn', 
        'mspellingBtn', 'mfruitNinjaBtn', 
        'headToWinBtn', 'crossTheFloorBtn', 'wordBlitzBtn', 'jumpToWinBtn'
      ];

      buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', handleButtonClick);
        button.addEventListener('touchend', handleButtonClick);
      });

      function handleButtonClick(event) {
        event.preventDefault(); // Prevent default touch behavior
        const target = event.currentTarget;
        target.disabled = true;

        const actions = {
          phonicsBtn: () => RainbowOneUtils.updatePhonicsGameLink(mp_removalStatus.value, mp_model.value),
          snakeBtn: () => RainbowOneUtils.updateSnakeGameLink(),
          typingBtn: () => RainbowOneUtils.updateTypingGameLink(),
          mspellingBtn: () => RainbowOneUtils.updateSpellingGameLink(ms_removalStatus.value, ms_model.value),
          mfruitNinjaBtn: () => RainbowOneUtils.updateFruitNinjaGameLink(mfn_removalStatus.value, mfn_model.value),
          headToWinBtn: () => RainbowOneUtils.updateHeadToWinGameLink(mh_removalStatus.value, mh_model.value),
          crossTheFloorBtn: () => RainbowOneUtils.updateCrossTheFloorGameLink(),
          wordBlitzBtn: () => RainbowOneUtils.updateWordBlitzGameLink(),
          jumpToWinBtn: () => RainbowOneUtils.updateJumpToWinGameLink(),
        };

        if (actions[target.id]) {
          actions[target.id]();
        }

        setTimeout(() => {
          target.disabled = false;
        }, 1000);
      }