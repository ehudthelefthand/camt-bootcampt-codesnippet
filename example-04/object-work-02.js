const bouquet = {
    code: 'BQ001',
    image: 'http://some.image.url',
    name: 'Flower Set Name',
    flowers: [{
        name: 'Flower Name 1',
        quantity: 1
    }, {
        name: 'Flower Name 2',
        quantity: 2
    }],
    price: 1500.00
}

const cart = [{
    code: 'BQ001',
    name: 'Flower Set Name',
    quantity: 2,
    unitPrice: 1500.00,
}]

const orders = [{
    code: 'ORDER001',
    items: [{
        code: 'BQ001',
        name: 'Flower Set Name',
        quantity: 2,
        unitPrice: 1500.00,
    }],
    totalPrice: 3000.00,
    customer: {
        code: 'C001',
        name: 'Peerawat Poombua',
    },
    orderTime: '2020-03-13T10:00:00',
    isPaid: true,
    isDelivery: true,
    deliveryAddress: 'ออฟฟิศ แพร์-โค หน้ามช',
    deliveryTime: '2020-03-13T14:00:00',
}, {
    code: 'ORDER002',
    items: [{
        code: 'BQ001',
        name: 'Flower Set Name',
        quantity: 1,
        unitPrice: 1500.00,
    }],
    totalPrice: 1500.00,
    customer: {
        code: 'C002',
        name: 'John Doe',
    },
    orderTime: '2020-03-13T11:00:00',
    isPaid: true,
    isDelivery: false,
    pickupTime: '2020-03-13T15:00:00',
}]