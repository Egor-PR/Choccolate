const sections = $('.section');
const display = $('.maincontent');

console.log("2323");
const perfomanceTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;
  display.css({
    transform: `translateY(${position})`
  });
}
$('.wrapper.').on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  if (deltaY > 0) {
    perfomanceTransition(2);
  }
  if (deltaY < 0) {

  }

});