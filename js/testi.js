const testi = [
{
  name : 'Ahmad',
  quote : 'baik sekali',
  ratting : 5,
  image : '/images/wisuda.jpeg'
},
{
  name : ' Putra',
  quote : 'baik',
  ratting : 4,
  image : '/images/sepeda.jpeg'
},
{
  name : 'Ridwan',
  quote : 'cukup baik!',
  ratting : 3,
  image : '/images/fotosaya.jpeg'
},
{
  name : 'Susilo',
  quote : 'lumayan',
  ratting : 2,
  image : '/images/rame.jpeg'
},
{
  name : 'jek',
  quote : 'buruk sekali!',
  ratting : 1,
  image : '/images/jek.jpeg'
},
]
function rattingAll(){
  let rattingAllHtml = '';

  testi.forEach(item => {
    rattingAllHtml += `
    <div class="testimoni">
              <img src=${item.image} alt="testi" class="profile-testi">
              <p class="quote"> "${item.quote}" </p>
              <p class="author"> ${item.name}</p>
              <p class="ratting-5"><i class="fa-solid fa-star">${item.ratting} </i>
               </p>
            </div>`;
  });
  document.getElementById('testimonial').innerHTML = rattingAllHtml
}
rattingAll()


// filtering function
// filtering function
function selectRatting(ratting) {
  let rattingAllHtml = ""

  const dataFilter = testi.filter(data => data.ratting === ratting)

  if(dataFilter.length === 0) {
      rattingAllHtml = `<h3>Data not found!</h3>`
  } else {
      dataFilter.forEach(item => {
          rattingAllHtml += `
          <div class="testimoni">
              <img src=${item.image} alt="testi" class="profile-testi">
              <p class="quote"> ${item.quote} </p>
              <p class="author"> ${item.name}</p>
              <p class="ratting-5"><i class="fa-solid fa-star">${item.ratting} </i>
               </p>
            </div>`;
      })
  }
  document.getElementById('testimonial').innerHTML = rattingAllHtml
}
