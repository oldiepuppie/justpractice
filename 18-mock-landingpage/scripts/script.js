const background = document.querySelector('div#gradient-here');
const desc = document.querySelector('p#animationtest');
const header = document.querySelector('header');
// console.log('js test');
// console.log(background);
// console.log(desc);
// header.textContent = "test";

(function() {
  let locationY = Math.floor(desc.getBoundingClientRect().top / 20);
  let locationX = Math.floor(desc.getBoundingClientRect().left / 20);
  header.textContent = `
    desc의 위치 : (${Math.floor(locationX)}, ${locationY}), 
    scroll 지점: (${desc.scrollLeft}, ${desc.scrollTop})
  `;
})();

// background.addEventListener(onscroll, () => {
//   header.textContent = `scroll 지점: (${window.scrollX}, ${window.scrollY})`;
//   console.log(background.scrollTop);
// })

document.addEventListener('scroll', function() {
  var currentScrollValue = Math.floor(window.pageYOffset / 20);
  if (currentScrollValue > 40 && currentScrollValue < 60) {
    console.log(currentScrollValue,'event on');
  }
});