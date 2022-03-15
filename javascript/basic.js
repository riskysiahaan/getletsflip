document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if(event.scale > 1) {
      event.preventDefault();
    }
  }, false);
  
  
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  window.document.addEventListener('touchmove', e => {
    if(e.scale !== 1) {
      e.preventDefault();
    }
  }, {passive: false});
}