const Icon = document.querySelector('.icons');

Icon.addEventListener('click', function(){
  document.querySelector('nav ul').classList.toggle('active');
  document.querySelector('.close-icon').classList.toggle('hide')
  document.querySelector('.toggle-icon').classList.toggle('hide')
  document.querySelector('.container').classList.toggle('linearbackground')
})