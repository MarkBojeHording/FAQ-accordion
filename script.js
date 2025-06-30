function toggleAccordion(plusIcon, minusIcon, text) {
  plusIcon.addEventListener('click', function() {
    text.style.display = 'block';
    minusIcon.style.display = 'block';
    plusIcon.style.display = 'none';
  });

  minusIcon.addEventListener('click', function() {
    text.style.display = 'none';
    minusIcon.style.display = 'none';
    plusIcon.style.display = 'block';
  });
}

toggleAccordion(
  document.querySelector('.icon-faq'),
  document.querySelector('.icon-minus'),
  document.querySelector('.main-text')
);

toggleAccordion(
  document.querySelector('.icon-plus-free'),
  document.querySelector('.icon-minus-free'),
  document.querySelector('.free-text')
);

toggleAccordion(
  document.querySelector('.icon-plus-mentor'),
  document.querySelector('.icon-minus-mentor'),
  document.querySelector('.mentor-text')
);

toggleAccordion(
  document.querySelector('.icon-plus-challenge'),
  document.querySelector('.icon-minus-challenge'),
  document.querySelector('.challenge-text')
);
