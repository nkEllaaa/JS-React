// const tabButton = $('.tab-button')

// $('.tab-button').eq(0).on('click', function() {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function() {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(1).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function() {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(2).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(2).addClass('show');
// });

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).on('click', function() {
//     openTab(i);
//   });
// }

let car = ['소나타', 50000, 'white']
let car2 = {name : '소나타', price : [50000, 3000, 200]}

document.querySelectorAll('.card-span')[0].innerHTML = car2.name;
document.querySelectorAll('.card-span')[1].innerHTML = car2.price[0];


$('.list').click(function(e) {
    openTab(e.target.dataset.id)
})

function openTab(i) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(i).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(i).addClass('show');
}




document.querySelectorAll('.form-select')[0].addEventListener('input', function() {
  let val = document.querySelector('.op-shirt').innerHTML
  if (val == '셔츠') {
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide')
  }
})
