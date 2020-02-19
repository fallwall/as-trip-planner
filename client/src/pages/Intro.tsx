
import * as React from 'react';
import './Intro.css';

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1))
});

const target = e.target as HTMLTextAreaElement;

this.countUpdate.emit(target.classList./*...*/)

const Intro = () => {
  return (
    <div className="intro">

      <div className="word">
        <span>P</span>
        <span>L</span>
        <span>A</span>
        <span>N</span>
        <span>N</span>
        <span>E</span>
        <span>R</span>
      </div>
    </div>
  )
}

export default Intro;

