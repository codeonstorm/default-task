var player = videojs('my-video', {

});




var posters = document.querySelectorAll('.image');
posters.forEach(poster => {
  poster.addEventListener('click', function () {
   //  var src = poster.children[0].src;
   // alert(src);
  var skin_style_link = "skins/"+poster.children[0].getAttribute('data-skin')+".css";
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href= skin_style_link;
  // alert(skin_style_link);
  document.getElementsByTagName('head')[0].appendChild(link);
  })
});
