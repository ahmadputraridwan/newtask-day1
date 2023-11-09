// variabel untuk menampung data
const data = [];
 function submitData(event){
  event.preventDefault();
  
  let title = document.getElementById('pName').value
  let sDate = document.getElementById('s-date').value
  let eDate = document.getElementById('e-date').value
  let content = document.getElementById('description').value
  let isUsingNodeJS = document.getElementById('tech1').value
  let isUsingReactJs = document.getElementById('tech2').value
  let isUsingTypescript = document.getElementById('tech3').value
  let isUsingNextJs = document.getElementById('tech4').value
  let image = document.getElementById('attachFile').files 
  
  // validation
  if (title === ''){
  alert('isi nama project ');
return;
 }
 else if (sDate === ''){
  alert('isi start date');
 return;
}
else if (eDate === '') {
  alert ('isi end date');
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


const obj = {
  title,
  sDate,
  eDate,
  content,
  isUsingNodeJS,
  isUsingReactJs,
  isUsingTypescript,
  isUsingNextJs,
  image,
}

data.push(obj)
renderProject()
  
}
function renderProject(){
  document.getElementById('project-list').innerHTML = ''
  for (let x = 0; x < data.length; x++){

    // post content
    document.getElementById('project-list').innerHTML +=`
    <div class="project-container" id="project-item">
    <a href="/projectd-detail.html">
    <div class="project-image">
        <img src="${data[x].image}">
    </div>
    <p style="font-weight: bold;">${data[x].title}</p>
    <p style="font-size: 15px; color: black;">Duration : ${data[x].sDate} - ${data[x].eDate}</p>

    <div class="project-content">
        <p> ${data[x].content}
        </p>
    </div>

    <div class="project-icon">                    
        <ul>
           ${renderTechImages(data[x])}
        </ul>
    </div>
    <div class="project-button">
        <button class="edit" type="button">Edit</button>
        <button class="delete" type="button">Delete</button>
    </div>
    </a>
</div>`
  }
}

// render tech
function renderTechImages (Object) {
  let renderImages = '';

  if (Object.isUsingNodeJS) {
    renderImages +=`<li><img src="./images/nodejs.png" alt="nodejs"></li>`;
  }
  if (Object.isUsingReactJs) {
    renderImages += ` <li><img src="/images/reactjs.png" alt="react"></li>`;
  }
  if (Object.isUsingTypescript) {
    renderImages += ` <li><img src="/images/typescript.png" alt="typescript"></li>`;
  }
  if (Object.isUsingTypescript) {
    renderImages += `<li><img src="/images/nextjs.png" alt="nextjs"></li>`;
  }
  return renderImages; 
}