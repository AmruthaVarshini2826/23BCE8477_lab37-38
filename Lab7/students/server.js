const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/studentDB');

const NoteSchema = new mongoose.Schema({
    title: String,
    subject: String,
    description: String,
    created_date: { type: String, default: () => new Date().toISOString().split('T')[0] }
});

const Note = mongoose.model('Note', NoteSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', async (req, res) => {
    res.send(await Note.find());
});

app.post('/notes', async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.send(note);
});

app.put('/notes/:id', async (req, res) => {
    const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updated);
});

app.delete('/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted" });
});

app.listen(3001, () => {
    console.log("Student Server: http://localhost:3001");
});