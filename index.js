function wakeDog(dogName, dogBreed){
    let wake = `Wake ${dogName} the ${dogBreed}`
    console.log(wake)
    return wake
}

function leashDog(dogName, dogBreed){
    let leash = `Leash ${dogName} the ${dogBreed}`
    console.log(leash)
    return leash
}

function walkToPark(dogName, dogBreed){
    let walk = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walk)
    return walk
}

function throwFrisbee(dogName, dogBreed){
    let toss = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(toss)
    return toss
}

function walkHome(dogName, dogBreed){
    let walkHome = `Walk home with ${dogName} the ${dogBreed}`
    console.log(walkHome)
    return walkHome
}

function unleashDog(dogName, dogBreed){
    let unleash = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleash)
    return unleash
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    return routine.map(act => act(dogName, dogBreed))
}
// map takes in a function (Like do in Ruby)...
// if the function takes in arguments it needs to be defined. 
// functions dont implictly return. you have to tell javascript to return this. 

// def exerciseDog(name, breed)
//     routine.map(function(act) {
//         return act(name, breed)
//     })
// end
