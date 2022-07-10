// function mostrar o texto do input password
var btn = document.getElementById('btnPassword')
btn.addEventListener('click', function () {
  let password = document.getElementById('passwordLogin')

  if (password.type == 'password') {
    password.type = 'text'
    this.style.opacity = '1'
  } else {
    password.type = 'password'
    this.style.opacity = '.5'
  }
})
