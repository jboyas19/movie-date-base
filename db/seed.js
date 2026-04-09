import db from '#db/client';
import { createMovie } from '#db/queries/movies';

await db.connect();
await seedMovies();
await db.end();
console.log('Database seeded.');

async function seedMovies() {
  await createMovie({ name: 'Inception', releaseDate: '2010-07-16', runningTime: 148 });
  await createMovie({ name: 'The Matrix', releaseDate: '1999-03-31', runningTime: 136 });
  await createMovie({ name: 'Interstellar', releaseDate: '2014-11-07', runningTime: 169 });
  await createMovie({ name: 'The Dark Knight', releaseDate: '2008-07-18', runningTime: 152 });
  await createMovie({ name: 'Parasite', releaseDate: '2019-05-30', runningTime: 132 });
}
