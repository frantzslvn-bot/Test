// Petit message de succès affiché en haut de l'écran
function showSuccessToast(message) {
  const el = document.createElement('div')
  el.className = 'success-toast'
  el.textContent = message || 'Modification réussie ✅'
  document.body.appendChild(el)
  setTimeout(() => el.classList.add('hide'), 2200)
  setTimeout(() => el.remove(), 2800)
}
