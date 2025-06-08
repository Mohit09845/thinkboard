import Note from "../model/Note.js"

export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getting all notes ", error)
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = await Note.create({ title, content });

        res.status(201).json({ message: "Note created successfully", newNote });

    } catch (error) {
        console.error("Error in createNote ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { noteId } = req.params;

        const updatedNote = await Note.findByIdAndUpdate(
            noteId, { title, content }, { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note updated successfully", updatedNote });
    } catch (error) {
        console.error("Error in updateNote ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const { noteId } = req.params;
        const deletedNote = await Note.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error in deleteNote ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getNoteById = async (req, res) => {
    try {
        const { noteId } = req.params;
        const note = await Note.findById(noteId);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(note);
    } catch (error) {
        console.error("Error in getting specific note ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


