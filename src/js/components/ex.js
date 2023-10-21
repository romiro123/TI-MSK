let paramsObj = {
  modal1: {
    title: null,
    firstSelect: null,
    secondParam: null,
    range: null,
  },
  modal2: {
    phone: null,
    name: null,
    mail: null,
  }
}


// document.querySelectorAll('.catalog__card-btn').forEach((element) => {
//   element.addEventListener('click', function () {
//     paramsObj.modal1.title = this.previousElementSibling.innerText;
//     // console.log(paramsObj)
//   });
// })

document.querySelectorAll('.card-modal__btn').forEach((element) => {
  element.addEventListener('click', function () {
    // let params = this.previousElementSibling;
    const parent = this.parentElement;

    paramsObj.modal1.title = parent.querySelector('h3').textContent;
    paramsObj.modal1.firstSelect = parent.querySelector('.select-first').value;

    const selectSecond = parent.querySelector('.select-second');
    if (parent.contains(selectSecond)) {
      paramsObj.modal1.secondParam = selectSecond.value;
    } else {
      paramsObj.modal1.secondParam = null
    }

    const range = parent.querySelector('.noUi-tooltip')
    if (parent.contains(range)) {
      paramsObj.modal1.range = range.textContent;
    } else {
      paramsObj.modal1.range = null
    }

    console.log(paramsObj)
  });
})
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector('.form--card');
  console.log(form);
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    event.stopPropagation()


    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    // console.log(formData);
    // console.log(this.entries());
    console.log(formValues);
  });


})
