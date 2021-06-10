import { notes } from '../main'
import { clearNotesContainer } from './addNotes'
import updateLocalStorage from './saveNotes'

export default (idToDelete) => {
  let newNotes = notes.filter((obj) => obj.id !== parseInt(idToDelete))
  clearNotesContainer()
  updateLocalStorage(newNotes)
  return newNotes
}

