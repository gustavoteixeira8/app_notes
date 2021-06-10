import generateID from './generateID'

const notesContainer = document.querySelector('#notes-container')

const createDiv = () => {
  const div = document.createElement('div')
  div.setAttribute('class', 'col mb-4')
  return div
}

const addNoteIntoHTML = (noteText = '', id = generateID()) => {
  const div = createDiv()

  div.innerHTML = `
    <div class="card">
      <div class="card-header p-2">
        <div class="deleteNotes">&times;</div>
      </div>

      <div class="card-body p-0">
        <textarea class="textarea-notes form-control" data-id="${id}">${noteText}</textarea>
      </div>
    </div>
  `

  notesContainer.append(div)

  if (!noteText) div.querySelector('.textarea-notes').focus()
}

const clearNotesContainer = () => notesContainer.innerHTML = ''

export { addNoteIntoHTML, clearNotesContainer }
