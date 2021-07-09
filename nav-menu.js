const menuBtn = document.querySelector('#hamb-menu')
const menu = document.querySelector('.hamb-nav')
const closeMenu = document.querySelector('#close-menu')

menuBtn.addEventListener('click', () => {
    menu.classList.remove('hidden')
    closeMenu.classList.remove('hidden')
})

closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden')
    closeMenu.classList.add('hidden')
})
