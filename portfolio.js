const NavLinks = document.getElementById('NavLinks')
// const MenuBtn = document.getElementById('MenuBtn')
const Links = document.querySelectorAll('.link')
const Menu = document.getElementById('Menu')
Menu.addEventListener('click', () => {
    Menu.classList.toggle('fa-xmark')

    if(Menu.classList.contains('fa-xmark')){
        NavLinks.classList.add('menuShow')
    }
    else{
        NavLinks.classList.remove('menuShow')
    }
})

Links.forEach(links =>{
    links.addEventListener('click', () =>{
        Menu.classList.remove('fa-xmark')
        NavLinks.classList.remove('menuShow')
  document.querySelector('.clr')?.classList.remove('clr')
  links.classList.add('clr')
    })
})