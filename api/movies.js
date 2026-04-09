import express from "express";
const router = express.Router();
export default router;

import { getMovies, getMovie, createMovie, updateMovie, deleteMovie } from "#db/queries/movies";

router.get("/", async (req, res) => {
  const movies = await getMovies();
  res.send(movies);
});

router.post("/", async (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).send("Request body is required.");
  const { name, releaseDate, runningTime } = body;
  if (!name || !releaseDate || !runningTime) return res.status(400).send("Missing required field.");
  const movie = await createMovie({ name, releaseDate, runningTime });
  res.status(201).send(movie);
});

router.get("/:id", async (req, res) => {
  const movie = await getMovie(req.params.id);
  if (!movie) return res.status(404).send("Movie not found.");
  res.send(movie);
});

router.delete("/:id", async (req, res) => {
  const movie = await deleteMovie(req.params.id);
  if (!movie) return res.status(404).send("Movie not found.");
  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).send("Request body is required.");
  const { name, releaseDate, runningTime } = body;
  if (!name || !releaseDate || !runningTime) return res.status(400).send("Missing required field.");
  const movie = await updateMovie({ id: req.params.id, name, releaseDate, runningTime });
  if (!movie) return res.status(404).send("Movie not found.");
  res.send(movie);
});