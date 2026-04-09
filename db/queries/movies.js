import db from "#db/client";

export async function getMovies() {
  const sql = `SELECT * FROM movies`;
  const { rows: movies } = await db.query(sql);
  return movies;
}

export async function createMovie({ name, releaseDate, runningTime }) {
  const sql = `INSERT INTO movies (name, release_date, running_time) VALUES ($1, $2, $3) RETURNING *`;
  const { rows: [movie] } = await db.query(sql, [name, releaseDate, runningTime]);
  return movie;
}

export async function getMovie(id) {
  const sql = `SELECT * FROM movies WHERE id = $1`;
  const { rows: [movie] } = await db.query(sql, [id]);
  return movie;
}

export async function updateMovie({ id, name, releaseDate, runningTime }) {
  const sql = `UPDATE movies SET name = $1, release_date = $2, running_time = $3 WHERE id = $4 RETURNING *`;
  const { rows: [movie] } = await db.query(sql, [name, releaseDate, runningTime, id]);
  return movie;
}

export async function deleteMovie(id) {
  const sql = `DELETE FROM movies WHERE id = $1 RETURNING *`;
  const { rows: [movie] } = await db.query(sql, [id]);
  return movie;
}
