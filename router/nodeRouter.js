import { Router } from "express";
import Database from "../Database.js";

let router = Router();

//GET note
router.get("/", async (req, res) => {
  let db = await Database.init();
  res.json(db.notes);
});

//POST note
router.post("/", async (req, res) => {
  const db = await Database.init();
  db.notes.push(req.body.note);
  await Database.save(db);
  res.status(200).json(db.notes);
});

//PUT note
router.put("/", async (req, res) => {
  const db = await Database.init();
  // find index of the item
  let indexToUpdate = db.notes.findIndex(
    (note) => note.id === req.body.note.id
  );
  db.notes[indexToUpdate] = req.body.note;
  await Database.save(db);
  res.status(200).json(db.notes);
});

//DELETE note
router.delete("/:id", async (req, res) => {
  const db = await Database.init();
  //find index of item
  let idToDelete = req.params.id;

  let indexToDelete = db.notes.findIndex((note) => note.id === idToDelete);
  db.notes.splice(indexToDelete, 1);
  await Database.save(db);
  res.status(200).json(db.notes);
});

export default router;
