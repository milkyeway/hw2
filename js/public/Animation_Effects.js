document.addEventListener('mousemove', function (e) {
  let heart_box = document.querySelector('.heart_box');
  let heart = document.createElement('i');
  let x = e.offsetX;
  let y = e.offsetY;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  let size = Math.random() * 80;
  heart.style.width = 20 + size + 'px';
  heart.style.height = 20 + size + 'px';

  let transformValue = Math.random() * 360;
  heart.style.transform = 'rotate(' + transformValue + 'deg)';

  
  heart_box.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 600)
})