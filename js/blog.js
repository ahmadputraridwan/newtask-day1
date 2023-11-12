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
  const tech1 = `<li><img src="/images/nextjs.png" alt="nextjs"></li>`;
  const tech2 = `<li><img src="./images/nodejs.png" alt="nodejs"></li>`;
  const tech3 = `<li><img src="/images/reactjs.png" alt="react"></li>`;
  const tech4 = ` <li><img src="/images/typescript.png" alt="typescript"></li>`;
  
  NodeJS = document.getElementById('tech1').checked ? tech1 : '';
  ReactJs = document.getElementById('tech2').checked ? tech2 : '';
  Typescript = document.getElementById('tech3').checked ?  tech3 : '';
  NextJs = document.getElementById('tech4').checked ? tech4 : '';

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
  ReactJs,
  Typescript,
  NextJs,
  postAt: new Date(),
  author: 'Ahmad',
  duration,
}

data.push(obj);
console.log(data);

renderProject();

 }

function renderProject() {
  document.getElementById('project-list').innerHTML = '';
  
  for (let x = 0; x < data.length; x++){
    console.log(data[x]);
    
    document.getElementById('project-list').innerHTML +=`
    <div class="project-list" id="project-list">
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
    ${data[x].NextJs}
    ${data[x].ReactJs}
    ${data[x].Typescript}
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

// add duration in days
