// variabel untuk menampung data
const data = [];
 function submitData(event){
  event.preventDefault();
  
  let title = document.getElementById('pName').value
  let startDate = document.getElementById('s-Date').value
  let endDate = document.getElementById('e-Date').value
  let content = document.getElementById('description').value
  let image = document.getElementById('attachFile').files 
  
  

  
  // icon
  const  JS = `<i class="fa-brands fa-js"></i>`;
  const  java = `<i class="fa-brands fa-java"></i>`;
  const phyton = `<i class="fa-brands fa-python"></i>`;
  const  node = `<i class="fa-brands fa-node"></i>`;
  
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
  document.getElementById('Project').innerHTML = '';
  
  for (let x = 0; x < data.length; x++){
    console.log(data[x]);
    
    document.getElementById('Project').innerHTML +=`
    <div  class="d-flex justify-content-center flex-wrap gap-3 p-4 mt-3  " id="Project">
    <div class=" d-flex flex-column justify-content-between border rounded p-4 " style="background-color: #004643; width: 23%; max-height: 21%;">
      <div class="">
        <img style=" height: 190px; border-radius: 7px;" src="${data[x].image}" alt="error" />
      </div>
      <div class="">
        <a class="nav-link text-light fw-bold fs-5" href="/projectd-detail.html">${data[x].title}</a>
        <div class="text-light" style="font-size: 10px; font-weight: 200;">
          <p > ${data[x].duration} |${data[x].author}</p>
        </div>

        <p class="text-light" style="text-align: justify;">
          ${data[x].content}
        </p>
      </div>
      <div class="mb-2" style="font-size: 2em; display: flex; justify-content: center; gap: 1em;">                    
       ${data[x].Javascript}
       ${data[x].Java}
       ${data[x].Phyton}
       ${data[x].NodeJS}
</div>

      <div class="d-flex justify-content-center  align-items-end  mt-2  gap-3" style="width: 100%;">
        <div class="w-50">
          <button class="d-flex justify-content-center border-0  fw-bold" style=" padding: 3px 35px; background-color: #156079;">Delete</button>
        </div>
        <div class="w-50">
          <button class="d-flex justify-content-center border-0  fw-bold" style=" padding: 3px 46px;  margin-left: 2px;  background-color: #1f6086;">Edit</button>
        </div>
      </div>
    </div>
</div>`
  }
}
