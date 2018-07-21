let n
initialize()

let size = 3


let timerId = setInterval(() => {
    makeLeave(getImage(n)).one('transitionend', (e) => {
        makeEnter($(e.currentTarget))
    })
    n = (n % size) + 1 //1~3，并且加1
    makeCurrent(getImage(n))
}, 3000)

document.addEventListener('visibilitychange', function (e) {
    if (document.hidden) {
        window.clearInterval(timerId)
    } else {
        timerId = setInterval(() => {
            makeLeave(getImage(n)).one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
            n = (n % size) + 1 //1~3，并且加1
            makeCurrent(getImage(n))
        }, 3000)
    }
})






/* function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 1
        }
    }
    return n
} */

function initialize() {
    n = 1
    $('.images>img:nth-child(1)').addClass('current')
    $('.images>img:nth-child(2)').addClass('enter')
    $('.images>img:nth-child(3)').addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('current').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('leave').addClass('enter')
}

function getImage(n) {
    return $('.images>img:nth-child(' + n + ')')
}













/* setTimeout(() => {
    $('.images>img:nth-child(1)').css({
        transform: 'translate(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform: 'translate(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend', function (e) {
        console.log(e.currentTarget)
        $(e.currentTarget) .addClass('right').css({
            transform: 'none'
        })
    })

}, 3000)

setTimeout(()=>{
    $('.images>img:nth-child(2)').css({
        transform:'translate(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform:'translate(-100%)'
    })
    $('.images>img:nth-child(2)').one('transitionend', function (e) {
        console.log(e.currentTarget)
        $(e.currentTarget) .addClass('right').css({
            transform: 'none'
        })
    })
},6000)

setTimeout(()=>{
    $('.images>img:nth-child(3)').css({
        transform:'translate(-200%)'
    })
    $('.images>img:nth-child(1)').css({
        transform:'translate(-100%)'
    })
    $('.images>img:nth-child(3)').one('transitionend', function (e) {
        console.log(e.currentTarget)
        $(e.currentTarget) .addClass('right').css({
            transform: 'none'
        })
    })
},9000) */