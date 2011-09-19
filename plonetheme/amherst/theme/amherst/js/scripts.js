$(document).ready(function() {
  jq('.newsImageContainer a')
    .prepOverlay({
      subtype: 'image',
      urlmatch: '/image_view_fullscreen$',
      urlreplace: '_preview'
  });
});
