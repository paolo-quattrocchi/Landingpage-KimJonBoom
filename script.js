let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')

//Dallo schermo sm a xl
if (window.innerWidth > 576) {
    document.addEventListener('scroll', () => {
        //Il logo con la navbar compaiono solo quando si inizia a scrollare la pagina

        if (window.pageYOffset > 20) {
            navbar.classList.remove('bg-transparent', 'd-none')
            navbar.classList.add('bg-light', 'shadow')
        } else {
            navbar.classList.remove('bg-light', 'shadow')
            navbar.classList.add('bg-transparent', 'd-none')
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