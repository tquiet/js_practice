const numberOfFilms = +prompt('Скільки фільмів ви подивилися ?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false
};

const a = prompt('Один із останніх переглянутих фільмів?', ''),
      b = prompt('Наскільки оцінете його?', ''),
      c = prompt('Один із останніх переглянутих фільмів?', ''),
      d = prompt('Наскільки оцінете його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);