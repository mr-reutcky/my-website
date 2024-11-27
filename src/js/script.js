'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
  let paths = document.querySelectorAll("path");
  let mode=repeat?'infinite':'forwards'
  for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
  }
}
setTextAnimation(0.15, 3, 0.2, 'ease-in-out', '#ffffff', false);

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});
