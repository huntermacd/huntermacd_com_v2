var cursor = document.getElementsByClassName('cursor')[0];

setInterval(function(){
  cursor.style.visibility === 'visible' ? cursor.style.visibility = 'hidden' : cursor.style.visibility = 'visible';
}, 500);
