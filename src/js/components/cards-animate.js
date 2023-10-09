let cardSection = document.getElementById('catalog');
let card = document.querySelectorAll('.card');
// console.log(cardSection)
console.log(card)



cardSection.onmouseenter = (e) => {
  console.log('вход')
  cardSection.addEventListener('mousemove', function (e) {

    let x = e.pageX - cardSection.offsetLeft;
    let y = e.pageY - cardSection.offsetTop;

    let xAxis = (x - (cardSection.offsetWidth / 2)) / 50;
    let yAxis = ((cardSection.offsetHeight / 2) - y) / 30;

    // console.log(`${x - cardSection.offsetLeft}:${y - cardSection.offsetTop}`);

    card.forEach((item) => {
      item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
  });

}
cardSection.onmouseleave = (event) => {
  console.log('выход')
  card.forEach((item) => {
    item.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`
  })
}


