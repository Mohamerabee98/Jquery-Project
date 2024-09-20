
$('.openNav').click(function () {
    $('#leftMenu').animate({ left: '0px' })
    $('.openNav').animate({ left: '240px' })



})

$('.btn-close').click(function () {

    $('#leftMenu').animate({ left: '-240px' })
    $('.openNav').animate({ left: '1%' })

})

$(document).ready(function () {
    //leftMenu
    $('#leftMenu').animate({ left: '-240px' })
    $('.openNav').animate({ left: '1%' })

    //signer
    $('.innetText').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

// signer



$('h3').click(function () {
    $('.innetText').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});



// countDown   



let countDownDate = new Date('Dec 21, 2025  ').getTime()

let counter = setInterval(() => {



    let dataNow = new Date().getTime()

    let dateDiff = countDownDate - dataNow


    let days = Math.floor((dateDiff / (1000 * 60 * 24)))
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
    let second = Math.floor((dateDiff % (1000 * 60)) / (1000))



    document.querySelector('.days').innerHTML = days + 'D'
    document.querySelector('.hours').innerHTML = hours + 'H'
    document.querySelector('.minutes').innerHTML = minutes + 'M'
    document.querySelector('.second').innerHTML = second + 'S'




    if (dateDiff < 0) {
        clearInterval(counter)
    }



}, 1000)

// textarea

let countArea = document.querySelector('#countArea')
let text = document.querySelector('#text')

let maxlength = text.getAttribute('maxlength')


text.oninput = function () {
    countArea.innerHTML = maxlength - this.value.length

}

