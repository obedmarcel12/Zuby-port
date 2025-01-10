function Menu(e) {
  const LiMenu = document.getElementById('Li-menu')
  if (e.name === 'menu') {
    e.name = 'close'
    LiMenu.style.visibility = 'visible'
  } else {
    e.name = 'menu'
    LiMenu.style.visibility = 'hidden'
  }
}
