function wakeDog(dogName, dogBreed){
const a = dogName
     const b = dogBreed
     return `Wake ${a} the ${b}`
}

function leashDog(dogName, dogBreed) {
const a = dogName
     const b = dogBreed
     return `Leash ${a} the ${b}`
}

function walkToPark(dogName, dogBreed) {
	const a = dogName
     const b = dogBreed
     return `Walk to the park with ${a} the ${b}`
}

function throwFrisbee(dogName, dogBreed) {
const a = dogName
     const b = dogBreed
     return `Throw the frisbee for ${a} the ${b}`
}

function walkHome(dogName, dogBreed) {
const a = dogName
     const b = dogBreed
     return `Walk home with ${a} the ${b}`
}

function unleashDog(dogName, dogBreed) {
	 const a = dogName
     const b = dogBreed
     return `Unleash ${a} the ${b}`
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed) {
	let newArray = []
	for (let i=0; i<routine.length; i++) {
	newArray.push(routine[i](dogName, dogBreed))

}
return newArray
}
// ## Create a Function to Process the Array o' Functions

// Lastly, create the function called `exerciseDog` that will take in two
// arguments:

// * `dogName`
// * `dogBreed`

// The function's implementation should

// * Iterate over the `routine` `Array`
// * Call each function in the array and
// * pass the `dogName` and `dogBreed` received by `exerciseDog()` to the function as they are _called_
// * capture the result of each function's call
// * return an `Array` of all those functions' return values


