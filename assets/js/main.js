// Show Menu
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// SCROLL SECTION ACTIVE LINKS
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND COLOR
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else
    nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

// SHOW SCROLLTOP
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
     // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else 
    scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll',scrollTop)

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

// we validate if the user previously chose a topic
document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme)
themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

// activate/deactive theme manually
themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // we save the theme and current icon
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

// SCROLL REVEAL ANIMATION
const sr= ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:2000,
    reset:true
});

sr.reveal('.home_data, .home_img,.about_data,.about_img,.service_content,.menu_content,.contact_data,.contact_button,.footer_content',{
    interval:200
})