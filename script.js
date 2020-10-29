let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarTextLogo = document.querySelector('#navbarTextLogo')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')

//Dallo schermo sm a xl
if (window.innerWidth > 576) {
    document.addEventListener('scroll', () => {
        //Il logo con la navbar compaiono solo quando si inizia a scrollare la pagina

        if (window.pageYOffset > 20) {
            navbar.classList.remove('bg-transparent')
            navbar.classList.add('bg-light', 'shadow')
            navbarTextLogo.classList.add('text-mygreen')
            navbarTextLogo.classList.remove('text-white')
        } else {
            navbar.classList.remove('bg-light', 'shadow')
            navbar.classList.add('bg-transparent')
            navbarTextLogo.classList.add('text-white')
            navbarTextLogo.classList.remove('text-mygreen')
        }


        if (window.pageYOffset > window.innerHeight) {
            navbarCTAScroll.classList.remove('d-none')
        } else {
            navbarCTAScroll.classList.add('d-none')
        }
    })
} else {
    navbarBrand.classList.add('bg-light')
}