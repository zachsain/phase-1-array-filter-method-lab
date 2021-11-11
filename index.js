// Code your solution here


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name) {
    const newDrivers =  drivers.filter(person => person.toLowerCase() === name.toLowerCase()
    )
    return newDrivers;
}

function findMatching2(drivers, name) {
    const newDrivers = drivers.filter(function (person){
        return person.toLowerCase() === name.toLowerCase()
    })

    return newDrivers;
}

console.log(findMatching2(drivers, "bobby"));


function fuzzyMatch(driversNames, string){
    return driversNames.filter(function (el){
        return el.toLowerCase().indexOf(string.toLowerCase()) === 0
    })
}
 
console.log(fuzzyMatch(drivers, "S"))

const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
]






function matchName(user1, name) {
	let findIt = user1.filter(person => person.name === name)

	return findIt;
}
	

console.log(matchName(drivers1, "Bobby"))







// function findMatching(array, string) {
//     let newArray = []
//     for (const item of array) {
//         if(item === string.toUpperCase || string.toLowerCase) {
//             return newArray.push(string)
//         }
//     }
// }

// console.log(findMatching(drivers, "Bobby"))


