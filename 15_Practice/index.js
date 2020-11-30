const numberOfFilms = +prompt('Скільки фільмів ви подивилися ?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false
};


// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один із останніх переглянутих фільмів?', ''),
//     b = prompt('Наскільки оцінете його?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('Error');
//     i--;
//   }

// }

// let num = 0;
// while (num < 2) {
//   const a = prompt('Один із останніх переглянутих фільмів?', ''),
//     b = prompt('Наскільки оцінете його?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('Error');
//     num--;
//   }
//   num++
// }

let num = 0;
do {
  const a = prompt('Один із останніх переглянутих фільмів?', ''),
    b = prompt('Наскільки оцінете його?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('Error');
    num--;
  }
  num++;
}while (num < 2);


if (personalMovieDB.count < 10) {
  console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Ошибка');
}

console.log(personalMovieDB);