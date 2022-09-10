const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
      return 'Hole-in-one!';
    } else if (strokes <= par - 2) {
      return 'Eagle';
    } else if (strokes === par - 1) {
      return 'Birdie';
    } else if (strokes === par) {
      return 'Par';
    } else if (strokes === par + 1) {
      return 'Bogey';
    } else if (strokes === par + 2) {
      return 'Double Bogey';
    } else if (strokes >= par + 3) {
      return 'Go Home!';
    }
    return 'Change Me';
}

// console.log(golfScore(5, 4));
// console.log(golfScore(4, 1));
// console.log(golfScore(4, 2));
// console.log(golfScore(5, 2));
// console.log(golfScore(4, 3));
// console.log(golfScore(4, 4));
// console.log(golfScore(1, 1));
// console.log(golfScore(5, 5));
// console.log(golfScore(4, 5));
// console.log(golfScore(4, 6));
// console.log(golfScore(4, 7));
// console.log(golfScore(5, 9));
//ЗАВДАННЯ: спробувати перебрати масив names, щоб в return додати строку з масиву