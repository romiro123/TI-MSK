let paramsObj = {
  title: null,
  firstSelect: null,
  secondParam: null,
  range: null,
}

document.querySelectorAll('.card-modal__btn').forEach((element) => {

  element.addEventListener('click', function () {
    let textResult = document.querySelector('.graph-modal__text-result');
    textResult.textContent = '';

    const parent = this.parentElement;
    paramsObj.title = parent.querySelector('h3').textContent;

    let resultTitle = document.createElement('span');
    resultTitle.textContent = paramsObj.title + ',';
    textResult.append(resultTitle);

    paramsObj.firstSelect = parent.querySelector('.select-first').value;
    let resultFirstSelect = document.createElement('span');
    resultFirstSelect.textContent = paramsObj.firstSelect + ',';
    textResult.append(resultFirstSelect);


    const selectSecond = parent.querySelector('.select-second');
    if (parent.contains(selectSecond)) {
      paramsObj.secondParam = selectSecond.value;

      let resultSecondParam = document.createElement('span');
      resultSecondParam.textContent = paramsObj.secondParam;
      textResult.append(resultSecondParam);
    } else {
      paramsObj.secondParam = null
    }

    const range = parent.querySelector('.noUi-tooltip')
    if (parent.contains(range)) {
      paramsObj.range = range.textContent;

      let resultRange = document.createElement('span');
      resultRange.innerHTML = paramsObj.range + 'м <sup>3</sup>';
      textResult.append(resultRange);


    } else {
      paramsObj.range = null
    }

    sessionStorage.setItem('params', JSON.stringify(paramsObj))
  });

})

