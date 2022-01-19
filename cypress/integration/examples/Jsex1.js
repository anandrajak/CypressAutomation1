var q=10
console.log(q)

let a = [1,4,5,6,7,8,9,0]

console.log(a)

//sum=0
console.log( (a.reduce((sum, f) => sum+f , 0)))


//console.log(total)

console.log( (a.filter((sum) => sum%2==0)))

console.log( (a.filter((sum) => sum%2==0)).map(sum1=>sum1*2).reduce((sum3,sumva) => sum3+sumva, 0))


