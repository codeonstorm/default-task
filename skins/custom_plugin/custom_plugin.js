function customButtonPlugin(){

  var btn = document.createElement('buttom');
  btn.classList.add('vjs-custom-btn', 'vjs-control', 'vjs-button');
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  span1.classList.add('vjs-icon-placeholder');
  span2.classList.add('vjs-control-text');
  span2.setAttribute('aria-live', 'true');
  span2.innerHTML = 'custom btn';

  btn.appendChild(span1);
  btn.appendChild(span2);

  // btn.innerHTML = '+';
  btn.style.fontsize = '1.8em';

  btn.onclick = function(){
    alert();
  }


  var fullscreenBtn = document.querySelector('.vjs-fullscreen-control');
  insertAfter(btn,fullscreenBtn);

  function insertAfter(newEl, element){
    element.parentNode.insertBefore(newEl, element.nextSibling)
  }

}

videojs.registerPlugin('customButtonPlugin', customButtonPlugin);
