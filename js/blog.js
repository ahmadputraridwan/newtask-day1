// variabel untuk menampung data
const data = [];
 function submitData(event){
  event.preventDefault();
  
  let title = document.getElementById('pName').value
  let startDate = document.getElementById('s-date').value
  let endDate = document.getElementById('e-date').value
  let content = document.getElementById('description').value
  let image = document.getElementById('attachFile').files 
  
  

  // duration
  
  // icon
  const  JS = `<li><i class="fa-brands fa-js"></i></li>`;
  const  java = `<li<i class="fa-brands fa-java"></i></li>`;
  const phyton = `<li><i class="fa-brands fa-python"></i></li>`;
  const  node = ` <li><i class="fa-brands fa-node"></i></li>`;
  
 Javascript = document.getElementById('JS').checked ? JS : '';
  Java = document.getElementById('java').checked ? java : '';
  Phyton = document.getElementById('phyton').checked ?  phyton : '';
  NodeJS = document.getElementById('node').checked ? node : '';

// validation
if (title === ''){
  alert('isi nama project ');
  return;
}
else if (content === ''){
  alert ('isi description');
  return;
}
else if (image.length === 0){
  alert ('upload picture');
  return;
}


// untuk membuat image menjadi url sementara [0] untuk menangkap array
image = URL.createObjectURL(image[0])

// display duration
let start = new Date(startDate);
let end = new Date(endDate);

if (start > end) {
  return alert("Tanggl awal Tidak boleh lebih besar Dari Tanggal akhir");
}

let timeDifference = end.getTime() - start.getTime();
let days = timeDifference / (1000 * 60 * 60 * 24);
let weeks = Math.floor(days / 7);
let months = Math.floor(weeks / 4);
let years = Math.floor(months / 12);

let duration = "";

// validation time data
if (days > 0) {
  duration = `${days} Day`;
}
if (weeks > 0) {
  duration = `${weeks} Week`;
}
if (months > 0) {
  duration = `${months} Month`;
}
if (years > 0) {
  duration = `${years} Year`;
}

const obj = {
  title,
  content,
  image,
  NodeJS,
  Phyton,
  Javascript,
  Java,
  postAt: new Date(),
  author: 'Ahmad',
  duration,
}

data.push(obj);
console.log(data);

renderProject();

 }

function renderProject() {
  document.getElementById('project-li').innerHTML = '';
  
  for (let x = 0; x < data.length; x++){
    console.log(data[x]);
    
    document.getElementById('project-li').innerHTML +=`
    <div class="project-list" id="project-li">
    <div class="project-container" id="project-item">
    <a href="/projectd-detail.html">
    <div class="project-image">
    <img src="${data[x].image}">
    </div>
    <p style="font-weight: bold;"> ${data[x].title} </p>
    <p style="font-size: 15px; color: black ;"> ${data[x].duration} | ${data[x].author} </p>
    
    <div class="project-content">
    <p> ${data[x].content}
    </p>
    </div>
    
    <div class="project-icon">                    
    <ul>
    ${data[x].Javascript}
    ${data[x].Java}
    ${data[x].Phyton}
    ${data[x].NodeJS}
    </ul>
    </div>
    <div class="project-button">
    <button class="edit" type="button">Edit</button>
    <button class="delete" type="button">Delete</button>
    </div>
    </a>
    </div>
    </div>`
  }
}
