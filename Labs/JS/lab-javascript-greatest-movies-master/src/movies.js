//import {movies} from './data.js';
//const movies = require('./data');

const pepe = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: null
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '2h',
      genre: ['Crime', 'Drama'],
      score: ''
    }
];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    //return moviesArray.map((movie) => movie.director);

    const rawList = moviesArray.map((movie) => movie.director);
    const cleanList = rawList.filter((director, indexNumber) => rawList.indexOf(director)===indexNumber);
    return cleanList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //return moviesArray.map((movie) => movie.director==='Francis Ford Coppola');
    //const result = words.filter(word => word.length > 6);

    const allSpilber = moviesArray.filter(movie => movie.director === 'Steven Spielberg');
    const drama = allSpilber.filter(movie => movie.genre.includes('Drama'));
    return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length){
        return 0;
    }
    let allMovies = moviesArray
    allMovies.forEach(movie => {
        if(movie.score === '' || movie.score === null || typeof movie.score !== 'number'){
            movie.score = 0;
        }
    });
    let scores = allMovies.map((movie) => movie.score);
    const counter = 0;
    const totalScores = scores.reduce((previousValue, currentValue) => previousValue + currentValue, counter);
    return parseFloat((totalScores/scores.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDrama = moviesArray.filter(movie => movie.genre.includes('Drama')===true);
    return scoresAverage(allDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sorted = [...moviesArray];
    sorted = sorted.sort((a, b) => {
        return a.year - b.year;
    });
    return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sorted = moviesArray.map(movie => movie.title);
    sorted = sorted.sort((a, b) => {
        let fa = a.toLowerCase(),
            fb = b.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    sorted = sorted.slice(0, 20);
    return sorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let durationMinutes = [...moviesArray];
    durationMinutes.forEach(movie => {
        let time = movie.duration.split(' ');
        let hour = 0
        let minutes = 0
        if (time.length === 2){
            hour = time[0].slice(0, -1);
            minutes = time[1].slice(0, -3);
        } else {
            hour = time[0].slice(0, -1);
        }
        movie.duration = parseInt(hour)*60 + parseInt(minutes);
        console.log(movie.duration);
    });
    return durationMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}               

//console.log(scoresAverage(movies));
console.log('my test: ')
console.log(turnHoursToMinutes(pepe));