'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('666 820 241');
    manualCopy.hidden = true;
    copyStatus.textContent = 'Teléfono copiado: 666 820 241';
  } catch {
    manualCopy.hidden = false;
    const input = document.getElementById('phone-value');
    input.focus();
    input.select();
    copyStatus.textContent = 'Puedes copiar el número desde el campo seleccionado.';
  }
});
