var posters = document.querySelectorAll('.image');

posters.forEach(poster => {
  poster.addEventListener('click', function () {
  var skin_style_link = "skins/"+poster.children[0].getAttribute('data-skin')+"/index.html";

  document.getElementById('videoFrame').src = skin_style_link;
  })
});
