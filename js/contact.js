function getData(){
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value
  
  if(name == ''){
   return alert('isi nama anda')
  } else if (email == ''){
   return alert('isi email anda')
  } else if (phone == ''){
  return alert('isi nomor telpon anda')
  } else if(subject == ''){
   return alert('pilih subjek pesan')
  } else if(message == ''){
  return alert('tulis isi pesan')
  }
// excute to email
  const emailReceiver = 'aditiasaputra180897@gmail.com'
  let a = document.createElement('a')
  a.href = `mailto:${emailReceiver}?subject=${subject}&body= Halo nama saya ${name},bisakah anda menghubungi saya di ${phone}, untuk membahas project ${message}`
  a.click()

  // untuk menangkap data
  let data = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message
  }
  console.log(data)

}



