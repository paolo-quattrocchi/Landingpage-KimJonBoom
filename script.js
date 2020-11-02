//NAVBAR
let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarTextLogo = document.querySelector('#navbarTextLogo')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')
let navbarIcona = document.querySelector('#navbarIcona')

//Dallo schermo sm a xl
if (window.innerWidth > 575) {
    document.addEventListener('scroll', () => {
        //Il logo con la navbar compaiono solo quando si inizia a scrollare la pagina

        if (window.pageYOffset > 20) {
            navbar.classList.remove('bg-transparent')
            navbar.classList.add('bg-light', 'shadow')
            navbarTextLogo.classList.add('text-mygreen')
            navbarTextLogo.classList.remove('text-white')
            navbarIcona.classList.remove('d-none')
        } else {
            navbar.classList.remove('bg-light', 'shadow')
            navbar.classList.add('bg-transparent')
            navbarTextLogo.classList.add('text-white')
            navbarTextLogo.classList.remove('text-mygreen')
            navbarCTAScroll.classList.remove('btn-sm')
            navbarIcona.classList.remove('d-none')
        }


        if (window.pageYOffset > window.innerHeight) {
            navbarCTAScroll.classList.remove('d-none')
        } else {
            navbarCTAScroll.classList.add('d-none')
        }
    })
} else {

    navbarIcona.classList.add('d-none')

    navbar.classList.add('bg-light', 'shadow')
    navbar.classList.remove('bg-transparent')
    navbarTextLogo.classList.add('text-mygreen')
    navbarTextLogo.classList.remove('text-white')
    navbarCTAScroll.classList.remove('d-none')
    navbarCTAScroll.classList.add('btn-sm')
}


//CUNTDOWN
let final = new Date('November 8, 2020')

let giorniMancanti = document.querySelector('#giorniMancanti')
let oreMancanti = document.querySelector('#oreMancanti')
let minutiMancanti = document.querySelector('#minutiMancanti')
let secondiMancanti = document.querySelector('#secondiMancanti')

function timer() {
    let today = new Date()
    let diff = final - today

    let secondi = Math.floor(diff / 1000 % 60)
    let minuti = Math.floor((diff / (1000 * 60)) % 60)
    let ore = Math.floor((diff / (1000 * 60 * 60)) % 24)
    let giorni = Math.floor((diff / (1000 * 60 * 60 * 24)))

    giorniMancanti.innerHTML = (giorni > 9) ? giorni : "0" + giorni
    oreMancanti.innerHTML = (ore > 9) ? ore : "0" + ore
    minutiMancanti.innerHTML = (minuti > 9) ? minuti : "0" + minuti
    secondiMancanti.innerHTML = (secondi > 9) ? secondi : "0" + secondi
}

setInterval(timer, 1000)