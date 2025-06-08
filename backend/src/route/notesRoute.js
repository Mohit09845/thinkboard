import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../controller/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:noteId", getNoteById);

router.post("/", createNote);

router.put("/:noteId", updateNote);

router.delete("/:noteId", deleteNote);

export default router;