'use strict';
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return; } catch (_) { /* Try the selection-based fallback. */ }
  }
  const previous = document.activeElement;
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.cssText = 'position:fixed;left:-9999px;top:0';
  document.body.append(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);
  let copied = false;
  try { copied = document.execCommand('copy'); } finally { textarea.remove(); previous?.focus({ preventScroll: true }); }
  if (!copied) throw new Error('Clipboard unavailable');
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const block = button.closest('.copy-block');
    const status = block.querySelector('.copy-status');
    const code = document.getElementById(button.dataset.copy);
    status.textContent = '';
    try { await copyText(code.textContent); status.textContent = 'Copied. Paste into your own task when ready.'; }
    catch (_) { status.textContent = 'Could not copy automatically. Select the text above and copy it manually.'; }
  });
});
document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => link.closest('details').removeAttribute('open')));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const menu = document.querySelector('.mobile-menu[open]');
    if (menu) { menu.removeAttribute('open'); menu.querySelector('summary').focus(); }
  }
});
