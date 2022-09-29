videojs.registerPlugin('cvControlPlugin', function(){

  var cvdiv = document.createElement('div');
  cvdiv.classList.add('vjs-cv-control', 'vjs-control');
  var counter = document.createElement('span');
  counter.classList.add('vjs-cv-display');
  counter.innerHTML = 1;

  cvdiv.appendChild(counter);
 
  cvdiv.style.fontsize = '1.8em';


  var fullscreenBtn = document.querySelector('.vjs-fullscreen-control');
  insertAfter(cvdiv,fullscreenBtn);

  function insertAfter(newEl, element){
    element.parentNode.insertBefore(newEl, element.nextSibling)
  }

});
