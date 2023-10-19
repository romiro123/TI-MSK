import Choices from "choices.js";

document.querySelectorAll('.default').forEach((element) => {
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    allowHTML: true,
  })

})
