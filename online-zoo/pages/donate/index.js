const radioSelections = document.querySelectorAll('.radio-selection');
const radioDollarIcons = document.querySelectorAll('.radio-dollar-icon');
const radioTexts = document.querySelectorAll('.radio-text');

radioSelections.forEach((radio, i) => {
  radio.onchange = () => {
    for (let k = 0; k < radioSelections.length; k++) {
      radioDollarIcons[k].classList.remove('radio-dollar-icon_checked');
      radioTexts[k].classList.remove('radio-text_checked');
    }
    radioDollarIcons[i].classList.add('radio-dollar-icon_checked');
    radioTexts[i].classList.add('radio-text_checked');
  };
});