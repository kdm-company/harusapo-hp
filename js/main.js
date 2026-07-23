document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var drawer = document.getElementById('drawer');
  if (btn && drawer) {
    btn.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (location.search.indexOf('sent=1') > -1) {
    var done = document.getElementById('formDone');
    if (done) {
      done.classList.add('show');
      done.scrollIntoView({ block: 'center' });
    }
  }
});
