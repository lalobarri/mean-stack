const notesCtrl = {};
notesCtrl.getNotes = (req, res) => res.json({message: []});

notesCtrl.createNote = (req, res) => res.json({message: 'Note Saved'});

notesCtrl.getNote = (req, res) => res.json({title: 'titulo muestra'});

notesCtrl.updateNote = (req, res) => res.json({message: 'Note Update'});

notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Delete'});

module.exports = notesCtrl;