// let isLoading = true

// const user = 'Victoria' // variable
// console.log(user)

// isLoading = false

// console.log(isLoading)

// loop

// let i = 0

// for (i = 0; i <= 5;) {
//     console.log(i)
//     i++
// }

// DOM

// var, const, let
// string, number, Boolean: true or false

// + , - , * , /, ==, < , >, >=, <=, !==
// Logical Operators: &&, || , !

// = : assingment
// == equals to
// arrays

// const people = ['Zion', 'Ade', true, 3, 7]
// people.push('ronaldo')

//console.log(people)

// Conditional Statements
// if, else, else if, switch

// const user = 'ola'
// let digits = 0;

// console.log(digits)

// if (user == 'Ola') {
//     digits = 5
//     console.log('Ola has: ', digits)
// } else if (user == 'ola') {
//     digits = 3
//     console.log('ola has: ', digits)
// }
// else {
//     console.log(false, 'This person is not ola stay away')
// }

// Functions
// let solution;

// normal function
// function add(a, b) {
//     return a + b
// }
// console.log(add(3, 4))

// arrow function
// const add = (a, b) => a + b

// console.log(add(7, 7))

// Objects
// name: values or key : values

// const person = {
//     firstname: 'Chuks',
//     lastname: 'Dele',
//     isSingle: true,
//     age: 22,
//     changeName(firstname) {
//         console.log(firstname)
//         person.firstname = firstname
//     }
// }
// person.changeName('Victoria')
// console.log(person)

// function addPerson(a, b, c, d) {
//     this.firstname = a
//     this.lastname = b
//     this.isSingle = c
//     this.age = d
// }

// const newPerson = new addPerson(
//     'Olivia',
//     'Lastname',
//     false,
//     16
// )
// console.log(newPerson.firstname)
// object accesibility

// objectName.PropertyName
// console.log(person.firstname)
// objectName['propertyName]
// Template literals `` $
// const user = 'Olivia'
// console.log(`Hi ${user}`)
// console.log(`He is ${person['age']} years old`)

// Object methods : objectName.methodName()

// Arrays

// const course1 = 'HTML'
// const course2 = 'CSS'
// const course3 = 'Javascript'
// const course4 = 'React'

// const courses = new Array(course1, course2, course3) // 3: 0, 1, 2
// const extraCourse = new Array(course4)
// console.log(courses.concat(extraCourse))

// DOM
// getElementById
// getElementsByClassName
// getElementsByTagName

// const fun = document.getElementById('entertainment')
// fun.innerHTML = 'Fun'
// fun.style.color = 'red'

// let paragraphs = document.getElementsByTagName('p')
// console.log(paragraphs)

// for (i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].innerHTML = 'Entertainment'
// }

// const img = document.getElementById('jjk')
// img.src = 'img/itadori.jpg'
// alert('Whats up')
// let text = 'In my page'

// const button = document.getElementById('button')
// button.addEventListener('click', changeHeader)

// function changeHeader() {
//     alert('Hello World')
// }
const num = 3
// function add(a, b) {
//     return a + b + num
// }
// const add = (a, b) => a + b
// console.log(`this is my number: ${num}`)
// console.log('this is my number:', num)
// console.log(add(1, 2)

const user = {
    username: 'Paul',
    number: '911'
}
const addToUser = {
    lastname: 'Peter'
}
const arr = [1, 2, 3]
const [one, two, three] = arr

// const upgradedUser = Object.assign({}, user, addToUser)
// console.log(upgradedUser)

// const username = user.username
// const number = user.number

const { username, number } = user
