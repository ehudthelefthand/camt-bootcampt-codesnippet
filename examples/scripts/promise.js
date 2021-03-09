let friendship = 0;

function maybeGoGrillTogether() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() > 0.5) {
                resolve()
            } else {
                reject()
            }
        }, 1000)
    })
}

const button = $('<button style="font-size: 2rem">เย็นนี้ไปกินหมูกระทะกันเถอะ</button>')
button.on('click', function() {
    // คิดว่าน่าจะไปกินหมูกระทะนะ
    const promise = maybeGoGrillTogether()
    promise
        .then(function() {
            // ถ้ามาจริง ก็จะสนิทกันมากขึ้นเนอะ
            friendship++
            alert(`เพื่อนกินหายาก ขอบคุณที่มา (friendship: ${friendship})`)
        })
        .catch(function() {
            // ถ้าไม่มา ก็อาจจะมีงอนกันบ้าง
            friendship--
            alert(`เซ็งๆๆๆๆ วันหลังไม่ต้องให้ความหวังเลย (friendship: ${friendship})`)
        })
})

$('body').html(button)