const btn = document.getElementById('whatsappBtn');

btn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  alert('You are about to contact me on WhatsApp!');

  // After alert, open WhatsApp link in a new tab
  window.open(this.href, '_blank');
});