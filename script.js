document.querySelector('.icon-faq').addEventListener('click', function(e) {
  document.querySelector('.main-text').style.display = 'block';
  document.querySelector('.icon-minus').style.display = 'block';
  document.querySelector('.icon-faq').style.display = 'none';
});

document.querySelector('.icon-minus').addEventListener('click', function(e) {
  document.querySelector('.main-text').style.display = 'none';
  document.querySelector('.icon-minus').style.display = 'none';
  document.querySelector('.icon-faq').style.display = 'block';
});

document.querySelector('.icon-plus-free').addEventListener('click', function(e) {
  document.querySelector('.free-text').style.display = 'block';
  document.querySelector('.icon-minus-free').style.display = 'block';
  document.querySelector('.icon-plus-free').style.display = 'none';
});

document.querySelector('.icon-minus-free').addEventListener('click', function(e) {
  document.querySelector('.free-text').style.display = 'none';
  document.querySelector('.icon-minus-free').style.display = 'none';
  document.querySelector('.icon-plus-free').style.display = 'block';
});

document.querySelector('.icon-plus-mentor').addEventListener('click', function(e) {
  document.querySelector('.mentor-text').style.display = 'block';
  document.querySelector('.icon-minus-mentor').style.display = 'block';
  document.querySelector('.icon-plus-mentor').style.display = 'none';
});

document.querySelector('.icon-minus-mentor').addEventListener('click', function(e) {
  document.querySelector('.mentor-text').style.display = 'none';
  document.querySelector('.icon-minus-mentor').style.display = 'none';
  document.querySelector('.icon-plus-mentor').style.display = 'block';
});

document.querySelector('.icon-plus-challenge').addEventListener('click', function(e) {
  document.querySelector('.challenge-text').style.display = 'block';
  document.querySelector('.icon-minus-challenge').style.display = 'block';
  document.querySelector('.icon-plus-challenge').style.display = 'none';
});

document.querySelector('.icon-minus-challenge').addEventListener('click', function(e) {
  document.querySelector('.challenge-text').style.display = 'none';
  document.querySelector('.icon-minus-challenge').style.display = 'none';
  document.querySelector('.icon-plus-challenge').style.display = 'block';
});
