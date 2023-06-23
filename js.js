const marqueeContainer = document.querySelector('.marquee-container');
const marquee = document.querySelector('.marquee');
const skillBoxes = document.querySelectorAll('.skill-box');


let totalWidth = 0;
skillBoxes.forEach(skillBox => {
  totalWidth += skillBox.offsetWidth + parseFloat(getComputedStyle(skillBox).marginRight);
});


let clonedContent = marquee.innerHTML + marquee.innerHTML;
marquee.innerHTML = clonedContent;


marquee.style.width = totalWidth * 2 + 'px';


function startMarquee() {
  const animation = marquee.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(-${totalWidth}px)` }],
    { duration: 25000, iterations: Infinity }
  );
  
  marqueeContainer.addEventListener('mouseover', () => {
    animation.pause();
  });
  
  marqueeContainer.addEventListener('mouseout', () => {
    animation.play();
  });
}

startMarquee();
