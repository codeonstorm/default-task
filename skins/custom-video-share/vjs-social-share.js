videojs.registerPlugin('socialSharePlugin', function(player){


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

    // share option box
    var box = document.createElement('div');
    box.classList.add('vjs-5centscdn-share');
    box.innerHTML = "gggggggggg";
    // clipbord box
    var title = document.createElement('p');
    title.classList.add('vjs-share-title');
    // input box
    var input = document.createElement('input');
    input.classList.add('share_link_save_to_clipboard_5centscdn');
    // clipbord box
    var span = document.createElement('span');
    span.classList.add('share_url_copied_popup');
    span.innerHTML = 'copied';

    //social sharing options
    var socialBox = document.createElement('div');
    socialBox.classList.add('vjs-share-group-button');
    // box.appendChild(title);




    player.ready(function() {
      var myPlayer = this,
        options = {};
        var newElement = document.createElement('div');
        //Place data in div
        html = '<div>';
        html += '<div class="vjs-5centscdn-share">';
        html += '<p class="vjs-share-title">Copy the link to share</p><input id="share_link_save_to_clipboard_5centscdn" value="https://cp.5centscdn.net/player/5centscdn/skin1.html?pip=0&amp;poster=[object%20HTMLInputElement]" class="share-url-field" type="text" disabled=""><span id="share_url_copied_popup">copied</span>';
        html += '<div class="vjs-share-group-button">';

        html += '<button id="share_clipboard_5centscdn" class=" share-button vjs-copy-url-button"><span class="icon"></span></button>';
        html += '<button onclick="return window.open ("");" class=" share-button vjs-facebook-share"><span class="icon"></span></button>';
        html += '<button onclick="return window.open ("");"  class="share-button vjs-google-share"><span class="icon"></span></button>';
        html += '<button onclick="return window.open ("");"  class="share-button vjs-linkedin-share"><span class="icon"></span></button>';
        html += '<button onclick="return window.open ("");"  class="share-button vjs-twitter-share"><span class="icon"></span></button>';
        html += '<button onclick="return window.open ("");"  class="share-button vjs-pinterest-share"><span class="icon"></span></button>';


        html += '</div>';
        html += '</div>';
        html += '</div>';










        newElement.innerHTML = html;
        //Assign element to content
        options.content = newElement;

        // options.content = 'In the  modal';
        options.label = 'the label';

        var ModalDialog = videojs.getComponent('ModalDialog');
        var myModal = new ModalDialog(myPlayer, options);
        myModal.addClass('vjs-my-custom-modal');
        myPlayer.addChild(myModal);
        myModal.open();
    });





    //
    // //Create a div in which to place HTML content
    // var newElement = document.createElement('div');
    // //Place data in div
    // newElement.innerHTML = "<p style='font-size: 1em;'>this is in a paragraph</p><ul><li>in a list</li></ul>";
    // //Assign element to content
    // options = {};
    // options.content = newElement;
    //
    //   var modal = player.createModal(options);
    //   console.log(modal);
    //
    //
    //   // When the modal closes, resume playback.
    //   modal.on('modalclose', function() {
    //   //  player.play();
    //   });


  }


  var fullscreenBtn = document.querySelector('.vjs-fullscreen-control');
  insertAfter(btn,fullscreenBtn);

  function insertAfter(newEl, element){
    element.parentNode.insertBefore(newEl, element.nextSibling)
  }

});
