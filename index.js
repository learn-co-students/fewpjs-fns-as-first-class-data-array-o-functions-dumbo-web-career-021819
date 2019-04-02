let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function wakeDog(dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`;
}

function exerciseDog(dogName, dogBreed) {
    let a = [];
    routine.forEach(function (methods) {
    a.push(methods(dogName,dogBreed));
  })
  return a;
}

// console.log(exerciseDog("Fluffy", "Pitbull"));
// let a = exerciseDog("Fluffy", "Pitbull");
// exerciseDog("Fluffy", "Pitbull");
// console.log(exerciseDog("Fluffy", "Pitbull"));
// wakeDog("Fluffy", "Pitbull");
