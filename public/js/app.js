const contactform = document.querySelector('.contact-form')
let name = document.getElementById('name')
let email = document.getElementById('email')
let sID = document.getElementById('studentID')
let phoneNum = document.getElementById('phone')

contactform.addEventListener('submit', (e) => {
  e.preventDefault()

  let formData = {
    name: name.value,
    email: email.value,
    sID: sID.value,
    phoneNum: phoneNum.value,
  }

  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function () {
    // console.log(xhr.responseText)
    if (xhr.responseText == 'success') {
      alert('Email sent')
      name.value = ''
      email.value = ''
      sID.value = ''
      phoneNum.value = ''
    } else {
      alert('Something went wrong')
    }
  }

  xhr.send(JSON.stringify(formData))
})