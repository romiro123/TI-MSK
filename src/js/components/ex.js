let paramsObj = {
  modal1: {
    title: null,
    firstParam: null,
    secondParam: null,
  },
  modal2: {
    phone: null,
    name: null,
    mail: null,
  }
}


document.querySelectorAll('.catalog__card-btn').forEach((element) => {
  element.addEventListener('click', function () {
    paramsObj.modal1.title = this.previousElementSibling.innerText;
  });
})

document.querySelectorAll('.graph-modal__btn-card').forEach((element) => {
  element.addEventListener('click', function () {
    let params = this.previousElementSibling;
    let firstParam = params.querySelector('.select-first').innerText;
    let secondParam = params.querySelector('.select-second').innerText;

    paramsObj.modal1.firstParam = firstParam;
    paramsObj.modal1.secondParam = secondParam;
    console.log(paramsObj)
  });
})






// // const form = document.querySelectorAll('.form');
// document.querySelectorAll('.form').forEach((element) => {
//   element.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const formData = new FormData(this);
//     const formValues = Object.fromEntries(formData.entries());

//     console.log(formValues);
//   });
// })
