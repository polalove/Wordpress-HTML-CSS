/* let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms); 

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error!');
        i--;
    }

} 
console.log(personalMovieDB); 


if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error');
}
 */



/* 

let arr = ['a', 'b', 'c', 'd'];
alert ( arr[0] + '+' + arr[1] + ' , ' + arr[2] + ' + ' + arr[3]);

 */



