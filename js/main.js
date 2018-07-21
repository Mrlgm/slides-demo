let $buttons = $('#buttonWrapper>button')
//console.log($buttons)
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0
//console.log($images)

makeFakeSlides()

$slides.css({
    transform: 'translate(-100%)'
})

bindEvents()

$('#previous').on('click', function () {
    goToSlide(current - 1)
})

$('#next').on('click', function () {
    goToSlide(current + 1)
})

let timerId = setInterval(() => {
    goToSlide(current + 1)
}, 2000)

$('.container').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.container').on('mouseleave', function () {
    timerId = setInterval(() => {
        goToSlide(current + 1)
    }, 2000)
})

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(timerId)
    } else {
        timerId = setInterval(() => {
            goToSlide(current + 1)
        }, 2000)
    }
})








function bindEvents() {

    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if (index < 0) {
        index = $buttons.length - 1
    } else if (index > $buttons.length - 1) {
        index = 0
    }
    if (current === $buttons.length - 1 && index === 0) {
        console.log(1)
        $slides.css({
            transform: 'translate(' + (($buttons.length + 1) * -100) + '%)'
        }).one('transitionend', function () {
            $slides.hide().css({
                transform: 'translate(' + ((index + 1) * -100) + '%)'
            }).offset()
            $slides.show()
        })
        current = index
    } else if (current === 0 && index === $buttons.length - 1) {
        console.log(2)
        $slides.css({
            transform: 'translate(0)'
        }).one('transitionend', function () {
            $slides.hide().css({
                transform: 'translate(' + ((index + 1) * -100) + '%)'
            }).offset()
            $slides.show()
        })
        current = index
    } else {
        $slides.css({
            transform: 'translate(' + ((index + 1) * -100) + '%)'
        })
        current = index
    }
}

/* $($buttons[0]).on('click', function () {
    if (current === 2) {
        $slides.css({
            transform: 'translate(-400%)'
        }).one('transitionend', function () {
            $slides.hide().css({
                transform: 'translate(-100%)'
            }).offset()
            $slides.show()
        })
    } else {
        $slides.css({
            transform: 'translate(-100%)'
        })
    }

    current = 0
})
$($buttons[1]).on('click', function () {
    $slides.css({
        transform: 'translate(-200%)'
    })
    current = 1
})
$($buttons[2]).on('click', function () {
    if (current === 0) {
        $slides.css({
            transform: 'translate(0)'
        }).one('transitionend', function () {
            $slides.hide().css({
                transform: 'translate(-300%)'
            }).offset()
            $slides.show()
        })
    } else {
        $slides.css({
            transform: 'translate(-300%)'
        })
    }
    current = 2
}) */



function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true) //$($images[0])
    let $lastCopy = $images.eq($images.length - 1).clone(true) //$($images[$images.length - 1])

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}