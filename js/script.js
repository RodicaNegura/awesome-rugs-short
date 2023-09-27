let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav-links')

menu.onclick = ()  => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

document.querySelector('#login-btn').onclick = () => {
  document.querySelector('.login-container').classList.toggle('active')
}

document.querySelector('#close-login-form').onclick = () => {
  document.querySelector('.login-container').classList.remove('active')
}

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector('.nav').classList.add('active')
  } else {
    document.querySelector('.nav').classList.add('active')
  }

  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.nav').classList.add('active')
  } else {
    document.querySelector('.nav').classList.add('active')
  }
}
