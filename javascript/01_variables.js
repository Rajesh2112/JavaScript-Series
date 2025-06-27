const accountId=12333
let accountemail="rajesh@gmail.com"
var accountpassword="123456"
accountcity="hathras"

// accountId=2 // can not be assigned because it is constant.

accountemail="pr@gmail.com" // let  can be changed when it is new assigned.

accountpassword="232323" // var can also be changed 

accountcity="mathura"

console.log(accountId)
console.log(accountemail)
console.log(accountpassword)
console.log(accountcity)


/*
 prefer not to use var  because of the issue of block scope and function scope.
*/
console.table([accountId, accountemail, accountpassword, accountcity])// .table is used to print the  multiple  output in a single tabular form 