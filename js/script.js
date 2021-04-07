'use strict';


let  numbersOfFilm;

function start() {
        numbersOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numbersOfFilm == '' || numbersOfFilm == null || isNaN(numbersOfFilm)) {
                numbersOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
}

start();
      
const   personalMovieDB = {
        count: numbersOfFilm,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};


function rememberMyFilms(){
        for (let i = 0; i < 2; i++) {
                const   a = prompt('Один из последних просмотренных фильмов?', ''),
                        b = prompt('На сколько оцените его?', '');
                if(a.length < 50 && a != null && a != '' && b != null && b != '') {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                } else {
                        console.log('error');
                        i--;
                }
        }
}

rememberMyFilms();

function detectPersonalLevel(){
        if(personalMovieDB.count < 10) {
                console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30 ){
                console.log('Вы классический зритель');
        } else if(personalMovieDB.count <= 30){
                console.log('Вы киноман');
        } else {
                console.log('Произошла ошибка');
        }
}

detectPersonalLevel();

function showMyDB(hidden) {
        if(!hidden) {
                console.log(personalMovieDB);
        }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
        for (let i = 1; i <= 3; i++){
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
}

writeYourGenres();


      
console.log(personalMovieDB);



