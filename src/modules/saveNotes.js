import { notes } from '../main'

const saveNotes = (textarea, newId) => {
  const textValue = textarea.value

  for (const key in notes) {
    if (notes[key]['id'] === parseInt(newId)) {
      notes[key]['text'] = textValue
      return
    }
  }

  notes.push({ text: textValue, id: parseInt(newId) })
}

const updateLocalStorage = (newNotes) => localStorage.setItem('notes', JSON.stringify(newNotes))

document.addEventListener('input', (e) => {
  const target = e.target

  if (target.classList.contains('textarea-notes')) {
    const id = target.getAttribute('data-id')
    saveNotes(target, id)
    updateLocalStorage(notes)
  }
})

export default updateLocalStorage
