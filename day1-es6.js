const userName = 'qianxuelian';
let userAge = 25;
console.log(userName,userAge)

const greet = (name) =>{
  return '你好，'+ name
}
console.log(greet(userName))
const bio = `${userName}今年${userAge}岁，是一名开发者`
console.log(bio)

const [first,second] = ['篮球','音乐']
console.log(first,second)
