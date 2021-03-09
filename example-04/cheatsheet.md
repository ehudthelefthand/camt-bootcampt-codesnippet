# Array

## ประกาศ Array เปล่า

```javascript
const fruits1 = []
const fruits2 = new Array()
```

## เช็คตัวแปรดูว่าเป็น Array รึเปล่า
```javascript
Array.isArray(fruits1) // true
Array.isArray([fruits2) // true
```

## ประกาศ Array พร้อมข้อมูล
```javascript
const fruits3 = ['apple', 'orange', 'banana', 'carot', 'grape']
```

## ประกาศ Array จาก String
```javascript
const characters = Array.from('apple')
// ['a', 'p', 'p', 'l', 'e']
```

## ประกาศ Array จาก String
```javascript
const characters = Array.from('apple')
// ['a', 'p', 'p', 'l', 'e']
```

## การเอาของใส่ Array
```javascript
const fruits4 = []
fruits4.push('apple')
fruits4.push('orange')
fruits4.push('carot')
// ['apple', 'orange', 'carrot']

fruits4.unshift('mango')
// ['mango,' 'apple', 'orange', 'carrot']

fruits4.unshift('banana')
// ['banana', 'mango,' 'apple', 'orange', 'carrot']
```

## การเข้าถึงข้อมูลใน Array ด้วย Index
```javascript
const fruits5 = ['apple', 'orange', 'banana']
fruits5[0] // apple
fruits5[1] // orange
fruits5[2] // banana
fruits5[3] // undefined
fruits5[3].toUpperCase() 
// Thrown:
// TypeError: Cannot read property 'toUpperCase' of undefined
```

## การเอาของออกจาก Array
```javascript
const fruits6 = ['apple', 'orange', 'banana', 'carot', 'grape']
const a = fruits6.pop()

console.log(a)
// 'grape'

console.log(fruits6)
// ['apple', 'orange', 'banana', 'carot']

const b = fruits6.shift()
console.log(b)
// 'apple'

console.log(fruits6)
// ['orange', 'banana', 'carot']

delete fruits6[0]
// [ <1 empty item>, 'banana', 'carrot']

fruits6.splice(1, 1)
// [ <1 empty item>, 'carrot']
```

## การอัพเดตข้อมูลใน Array
```javascript
const fruits7 = ['apple', 'orange', 'banana']
fruits7[1] = 'durian'
// ['apple', 'durian', 'banana']

fruits7.splice(1, 1, 'melon')
// ['apple', 'melon', 'banana']
```

## การหาของใน Array
```javascript
const fruits8 = ['apple', 'orange', 'banana']
const found1 = fruits8.find(function(item) { 
    return item === 'banana' 
})
console.log(found1)
// banana

const found2 = fruits8.findIndex(function(item) => {
    return item === 'banana'
})

console.log(found2)
// 2

const hasApple = fruits8.includes('apple')
console.log(hasApple)
// true

const hasCarrot = fruits8.includes('carrot')
console.log(hasCarrot)
// false
```

## การเรียงของใน Array
```javascript
const numbers = [2,4,2,9,0]
const sorted = numbers.sort()
console.log(sorted)
// [0,2,2,4,9]

console.log(numbers)
// [0,2,2,4,9]

const reversed = numbers.reverse()
console.log(reversed)
// [9,4,2,2,0]

console.log(numbers)
// [9,4,2,2,0]

const characters = Array.from('apple')
characters.sort()
// ['a','e','l','p','p']
```

## การเอา Array 2 อันมาต่อกัน
```javascript
const fruits9 = ['apple', 'banana']
const fruits10 = ['carrot', 'durian']
fruits9.concat(fruits10)
// ['apple','banana','carrot','durian']
```

## การแปลง Array เป็น string ที่มีตัวคั้น
```javascript
const fruits11 = ['apple', 'banana', 'carrot']
fruits11.join(',')
// 'apple,banana,carrot'

fruits11.join('|')
// 'apple|banana|carrot'
```

## การเฉือนแบ่ง Array
```javascript
const fruits12 = ['apple', 'banana', 'carrot']
const sliced = fruits12.slice(0, 2)
console.log(sliced)
// ['apple','banana']

console.log(fruits12)
// ['apple', 'banana', 'carrot']

sliced[0] = 'mango'
console.log(sliced)
// ['mango','banana']

console.log(fruits12)
// ['apple', 'banana', 'carrot']
```

# Object

## การประกาศ Object เปล่า
```javascript
const student = {}
```

## การประกาศ Object ที่มีข้อมูล
```javascript
const student = {
    name: 'Peerawat Poombua',
    major: 'SE',
}
```

## การดึงข้อมูลของ Object ด้วย Key
```javascript
const student1 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

student1.major
// SE

student1['major']
// SE
```

## การเพิ่ม Key และ Value ใหม่เข้าไปใน Object
```javascript
const student2 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}
student2.year = '2'
// { name: 'Peerawat Poombua', major: 'SE', year: 2 } 

student2['GPA'] = 3.01
// { name: 'Peerawat Poombua', major: 'SE', year: 2, GPA: 3.01 }
```

## การอัพเดต Value ใน Key เดิม
```javascript
const student3 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}
student3.major = 'MMIT'

// { name: 'Peerawat Poombua', major: 'MMIT' }
```

## การลบ Key ทิ้ง
```javascript
const student4 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}
delete student4.name
// { major: 'MMIT' }

delete student4['major']
// {}

const student5 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

const studen6 = {
    name: student5.name
}
// { name: 'Peerawat Poombua' }
```

## การเปลี่ยนชื่อ Key ใหม่
```javascript
const student7 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

student7.fullname = student7.name
delete student7.name
// { fullname: 'Peerawat Poombua', major: 'SE' }

const student9 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

const student10 = {
    fullname: student9.name,
    major: 'SE',
}
// { fullname: 'Peerawat Poombua', major: 'SE' }
```

## การดึงเอาเฉพาะ Key ของ Object ออกมาเป็น Array
```javascript
const student11 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

Object.keys(student11)
// [ 'name', 'major' ]
```

## การดึงเอาเฉพาะ Value ของ Object ออกมาเป็น Array
```javascript
const student12 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

Object.values(student12)
// [ 'Peerawat Poombua', 'SE' ]
```

## การแปลง Key และ Value ของ Object เป็น Array
```javascript
const student13 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

Object.values(student13)
// [ [ 'name', 'Peerawat Poombua' ], [ 'major', 'SE' ] ]
```

## การเช็คว่า Object มี Key นั้นๆ มั้ย
```javascript
const student14 = {
    name: 'Peerawat Poombua',
    major: 'SE',
}

student14.hasOwnProperty('name')
// true

student14.hasOwnProperty('toString')
// false

'name' in student14
// true

'toString' in student14
// true 
```

