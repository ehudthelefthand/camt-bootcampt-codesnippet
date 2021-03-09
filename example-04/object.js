const name = 'Peerawat Poombua'
const age = 33
const sex = 'MALE'
const citizenNumber = '1509900325742'
const isMarriage = true

const citizen = {
    name: 'Peerawat Poombua',
    age: 33,
    sex: 'MALE',
    citizenNumber: '1509900325742',
    isMarriage: true,
}

const name = 'Peerawat Poombua'
const year = '2'
const major = 'Humanity'
const major = 'Japanese'

const student = {
    name: 'Peerawat Poombua',
    year: '2',
    major: 'Humanity',
    major: 'Japanese',
}


const brand = 'Toyota'
const model = 'Yaris'
const gear = 'Auto'
const color = 'White'

const car = {
    brand: 'Toyota',
    model: 'Yaris',
    gear: 'Auto',
    color: 'White',
}


const name = 'PTT'
const volume = 83535624
const open = 42.25
const prior = 42.00
const last = 41.50

const stock = {
    name: 'PTT',
    volume: 83535624,
    open: 42.25,
    prior: 42.00,
    last: 41.50,
}



const product = {
    id: 1,
    name: 'ช่อการะเกดมัดใจ',
    flowers: [{
        name: 'ดอกรัก',
        qty: 5,
    }, {
        name: 'ดอกจำปี',
        qty: 6,
    }, {
        name: 'ดอกลิลลี่',
        qty: 7,
    }],
    price: 1500.00
}

const orders = [{
    productId: 1,
    customer: 'บัวขาว การจีบ',
    qty: 1,
    isDelivery: false,
}, {
    productId: 2,
    customer: 'สมรักษ์ รักจริงหวังแต่ง',
    qty: 1,
    isDelivery: true,
}]

JSON.stringify(productObject)

JSON.parse(productJSON)

// {
//     "id": 1,
//     "name": "ช่อการะเกดมัดใจ",
//     "flowers": [
//       {
//         "name": "ดอกรัก",
//         "qty": 5
//       },
//       {
//         "name": "ดอกจำปี",
//         "qty": 6
//       },
//       {
//         "name": "ดอกลิลลี่",
//         "qty": 7
//       }
//     ],
//     "price": 1500
//   }