const saveButton = document.getElementById('save-button')
const resetButton = document.getElementById('reset-button')
const nameInput = document.getElementById('name-input')
const key = 'es1-name'
const h2 = document.getElementById('saved-name')

saveButton.addEventListener('click', function () {
  // devo raccogliere il valore dell'input field e lo salvo nel localStorage
  localStorage.setItem(key, nameInput.value) // salvo nel localStorage
  h2.innerText = nameInput.value // manipolo la pagina
})

// all'avvio della pagina devo mettere l'ultimo nome salvato nell'h2
if (localStorage.getItem(key)) {
  h2.innerText = localStorage.getItem(key) // es. "Stefano"
}

resetButton.addEventListener('click', function () {
  // ripristinare il valore di default dell'h2
  h2.innerText = 'Nessun nome salvato'
  // eliminiamo la key dal localStorage
  localStorage.removeItem(key)
})
