import express from "express";
const app = express();
export default app;

app.use(express.json());

import moviesRouter from "#api/movies";
app.use("/movies", moviesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});