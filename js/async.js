// buat promise untuk pengambilan xhr
const dataTesti = new Promise((resolve, reject) => {
  // buat request xhr
  const xhr = new XMLHttpRequest()

  // load api external
  xhr.open('GET', '  https://api.npoint.io/c1abd58b97da4f682e52', true) 

  // load api dan parse
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response))
  } else {
    reject ('error loading data')
  }
}
//  jika xhr error
xhr.onerror = () => {
  reject('network error')
}
// kirim setelah selesai load
xhr.send();
})

// tambahkan funsi async untuk eksekusi
async function rattingAll(){
  // method try
  try {
    const response = await dataTesti
  let testiForHtml = ''

response.forEach (item => {
  testiForHtml += `
  <div class="testimoni">
              <img src=${item.image} alt="testi" class="profile-testi">
              <p class="quote"> "${item.quote}" </p>
              <p class="author"> ${item.name}</p>
              <p class="ratting-5"><i class="fa-solid fa-star">${item.ratting} </i>
               </p>
            </div>`
})
document.getElementById('testimonial').innerHTML = testiForHtml
// tambahkan method cacth untuk menampung error
  } catch (error){
    console.log(error);
  }
}
rattingAll()

// filtering function
async function selectRatting(ratting){
  try {
    const response = await dataTesti
    let testiForHtml = ''

    const dataFilter = response.filter(data => data.ratting === ratting)
    if(dataFilter.length === 0){
      testiForHtml = `<h3>Data not found!</h3>`
    }else {
      dataFilter.forEach(item =>{
        testiForHtml +=
        `<div class="testimoni">
        <img src=${item.image} alt="testi" class="profile-testi">
        <p class="quote"> "${item.quote}" </p>
        <p class="author"> ${item.name}</p>
        <p class="ratting-5"><i class="fa-solid fa-star">${item.ratting} </i>
         </p>
      </div>`
      })
    }
    document.getElementById('testimonial').innerHTML = testiForHtml
  } catch(error){
    console.log(error)
  }
}