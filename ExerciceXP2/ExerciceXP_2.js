/*Part 1
/* Créez une variable myWatchedSeriesLengthdont le nom est égal au nombre de séries dans le myWatchedSeriestableau. */
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength=myWatchedSeries.length;
console.log(myWatchedSeriesLength);

/*
Créez une variable nommée myWatchedSeriesSentence, qui est égale à une phrase décrivant la série que vous avez regardée
Par exemple :black mirror, money heist, and the big bang theory 
*/
let myWatchedSeriesSentence= myWatchedSeries[0]+", "+myWatchedSeries[1]+", "+myWatchedSeries[2];
console.log(myWatchedSeriesSentence);

/* 
Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory
*/

console.log("I watche "+myWatchedSeriesLength+": "+myWatchedSeriesSentence);

// Part 2
/* Change the series “the big bang theory” to “friends”. 
Hint : You will need to use the index of “the big bang theory” series.
*/
myWatchedSeries.splice(2,1,"friends");
console.log(myWatchedSeries);

/*
Add, at the end of the array, the name of another series you watched.
*/
myWatchedSeries.push("Game of thones");
console.log(myWatchedSeries);

/*
Add, at the beginning of the array, the name of your favorite series
*/

myWatchedSeries.unshift("Designated Survivor")
console.log(myWatchedSeries);
/*
Delete the series “black mirror”
*/
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
/*
Console.log the third letter of the series “money heist”.
*/
console.log(myWatchedSeries[1][2]);
/*
Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
*/
console.log(myWatchedSeries);

