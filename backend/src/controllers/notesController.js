export function getNotes(req, res) {
  res.status(200).send('Your notes are fetched successfully');
}
export function createNote(req, res) {
  res.send('A new note is created successfully');
}

export function updateNote(req, res) {
  res.send('The note is updated successfully');
}

export function deleteNote(req, res) {
  res.send('The note is deleted successfully');
}