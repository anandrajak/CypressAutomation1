// let day = "funday and its wedsnesday"

// let val = day.indexOf("day")
// count=0
// while(val!=-1){
// count++
// val = day.indexOf("day", val+1)
// }
// console.log(count)



let person = {
    firstName: 'anand',
    lastName: 'Kesavamoorthy',
    fullName() {
        return this.firstName+" "+this.lastName
    }
}

console.log(person.firstName)
console.log(person['firstName'])
person.firstName = 'Anand Raja'
console.log(person.firstName)
 person.gender = 'Male'
 console.log(person)
 person.fullName()
console.log(person.fullName())

for (let key in person)
{
   console.log( person[key])
}
