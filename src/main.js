import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap'
import './assets/css/style.css'
import './modules/saveNotes'
import { addNoteIntoHTML } from './modules/addNotes'
import deleteNote from './modules/deleteNotes'

let notes = JSON.parse(localStorage.getItem('notes')) || []

const init = () => notes.length && notes.forEach(({ text, id }) => addNoteIntoHTML(text, id))
init()


document.addEventListener('click', (e) => {
  const target = e.target

  if (target.id === 'add-notes-button') addNoteIntoHTML()

  const getTextarea = (target) => {
    const header = target.parentElement
    const card = header.parentElement
    return card.querySelector('.textarea-notes')
  }

  if (target.classList.contains('deleteNotes')) {
    const textarea = getTextarea(target)
    const dataID = textarea.getAttribute('data-id')
    notes = deleteNote(dataID)
    init()
  }
})

export { notes }
