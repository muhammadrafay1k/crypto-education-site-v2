(function setYear() {
  var el = document.getElementById('copyright-text');
  if (el) {
    el.textContent = 'Copyright ' + new Date().getFullYear() + ' Crypto Academy. All rights reserved.';
  }
})();