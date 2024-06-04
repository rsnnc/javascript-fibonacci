"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmName1 = prompt('Один из последних просмотренных фильмов?', '');
const filmRate1 = prompt('На сколько оцените его?', '');
const filmName2 = prompt('Один из последних просмотренных фильмов?', '');
const filmRate2 = prompt('На сколько оцените его?', '');

personalMovieDb.movies[filmName1] = filmRate1;
personalMovieDb.movies[filmName2] = filmRate2;

console.log(personalMovieDb);

