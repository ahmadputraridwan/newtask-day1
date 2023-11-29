const express = require('express')
const path = require ('path')
const app = express()
const port = 4000
const hbs = require('hbs')

// app.set = buat setting variabel global, configuration dll
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'src/views'))

app.use(express.static('src/assets'))
app.use(express.urlencoded({ extended: false }))  // body parser, extended : false -> querystring, extended : true -> menggunakan querystring third party -> qs

// hbs.registerHelper('arrayIncludes',function (array, value){
//   return array.includes(value);
// });

app.get('/', home)
app.get('/contact', contact)
app.get('/blog', blog)

app.get('/add-blog', addBlog)
app.post('/add-blog', addBlogViews)

app.post('/delete/:id', deleteBlog)
app.post('/update-blog', updateBlog)
app.get('/update-blog/:id', updateBlogView)


app.get('/blog-detail/:id', blogDetail)
app.get('/testimoni', testimoni)


const data = [];

function home(req, res){
  res.render('index', {data})
}
function contact(req,res){
  res.render('contact')
}
function blogDetail(req,res){
  const { id } = req.params // destructuring

  const dataFilter = data[parseInt(id)]
  dataFilter.id = parseInt(id)

    // const data =  {
    //   id,
    //   pName,
    //   duration,
    //   description,
    //   js,
    //   java,
    //   phyton,
    //   node
    // }
      

  res.render('blog-detail', {data: dataFilter})
}
function addBlog(req,res){
  res.render('add-blog')
}
function addBlogViews(req, res){
  const { pName, description, startDate, endDate, } = req.body;


  let startDateValue = new Date(startDate);
  let endDateValue = new Date(endDate);

  let durasiWaktu = endDateValue.getTime() - startDateValue.getTime();
  let durasiHari = durasiWaktu / (1000 * 3600 * 24);
  let durasiMinggu = Math.floor(durasiHari / 7);
  let sisaHari = durasiHari % 7;

  let durasiBulan = Math.floor(durasiHari / 30);
  let sisaHariBulan = durasiHari % 30;

  let durasiTahun = Math.floor(durasiHari / 365);
  let sisaHariTahun = durasiHari % 365;

  let duration = "";

  if (durasiHari <= 6) {
    duration = ` Durasi ${durasiHari + 1} Hari`;
  } else if (durasiTahun > 0) {
    if (sisaHariTahun > 0) {
      duration = `Durasi ${durasiTahun} Tahun ${Math.floor(
        sisaHariTahun / 30
      )} Bulan ${Math.floor(sisaHariTahun % 30)} Hari`;
    } else {
      duration = `Durasi ${durasiTahun} Tahun`;
    }
  } else if (durasiBulan > 0) {
    if (sisaHariBulan > 0) {
      duration = `Durasi ${durasiBulan} Bulan ${sisaHari - 1} Hari`;
    } else {
      duration = `Durasi ${durasiBulan} Bulan`;
    }
  } else if (sisaHari > 0) {
    duration = `Durasi ${durasiMinggu} Minggu ${sisaHari} Hari`;
  } else {
    duration = `Durasi ${durasiMinggu} Minggu`;
  }

  let currentTime = () => {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let month = currentDate.toLocaleString("en-US", { month: "short" });

    return month + " - " + hours + ":" + minutes + ":" + seconds;
  };

  // mengambil value checkbox

  let {js, java, phyton, node} = req.body

js === 'on';
java === 'on';
phyton === 'on';
node === 'on';
const checkbox = [js, java, phyton, node]

if (js == 'on'){
  js = true
}
if(java == 'on'){
  java = true 
}
if(phyton == 'on'){
  phyton = true
}
if (node === 'on'){
  node = true
}

const dataBlog = {
  pName,
  duration,
  description,
  duration,
  postAt: currentTime(),
  checkbox,
  js,
  java,
  phyton,
  node,
};
console.log('dataBlog',data)
data.unshift(dataBlog)

  res.redirect('blog')
}

function updateBlogView(req, res){
  const { id } = req.params
  
  const dataFilter = data[parseInt(id)]
  dataFilter.id = parseInt(id)
  console.log('dataFilter', dataFilter)
  res.render('update-blog', {data: dataFilter})
}

function updateBlog(req, res){
  const { pName, description, id , startDate, endDate, js, java, phyton, node,} = req.body
  let startDateValue = new Date(startDate);
  let endDateValue = new Date(endDate);

  let durasiWaktu = endDateValue.getTime() - startDateValue.getTime();
  let durasiHari = durasiWaktu / (1000 * 3600 * 24);
  let durasiMinggu = Math.floor(durasiHari / 7);
  let sisaHari = durasiHari % 7;

  let durasiBulan = Math.floor(durasiHari / 30);
  let sisaHariBulan = durasiHari % 30;

  let durasiTahun = Math.floor(durasiHari / 365);
  let sisaHariTahun = durasiHari % 365;

  let duration = "";

  if (durasiHari <= 6) {
    duration = ` Durasi ${durasiHari + 1} Hari`;
  } else if (durasiTahun > 0) {
    if (sisaHariTahun > 0) {
      duration = `Durasi ${durasiTahun} Tahun ${Math.floor(
        sisaHariTahun / 30
      )} Bulan ${Math.floor(sisaHariTahun % 30)} Hari`;
    } else {
      duration = `Durasi ${durasiTahun} Tahun`;
    }
  } else if (durasiBulan > 0) {
    if (sisaHariBulan > 0) {
      duration = `Durasi ${durasiBulan} Bulan ${sisaHari - 1} Hari`;
    } else {
      duration = `Durasi ${durasiBulan} Bulan`;
    }
  } else if (sisaHari > 0) {
    duration = `Durasi ${durasiMinggu} Minggu ${sisaHari} Hari`;
  } else {
    duration = `Durasi ${durasiMinggu} Minggu`;
  }

  let currentTime = () => {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let month = currentDate.toLocaleString("en-US", { month: "short" });

    return month + " - " + hours + ":" + minutes + ":" + seconds;
  };
  // console.log ('Id :', id)
  // console.log('pName: ', pName)
  // console.log('description :', description)
  const checkbox = 
  js === 'on';
  java === 'on';
  phyton === 'on';
  node === 'on';

  data[parseInt(id)] = {
    pName,
    description,
    duration,
    postAt: currentTime(),
    js,
    java,
    phyton,
    node,
    checkbox
  }
res.redirect('/blog')
}
function deleteBlog(req, res) {
  const { id } = req.params


  data.splice(id, 1)
  res.redirect('/blog')
}
function blog (req,res){
  res.render('blog', {data})
}

function testimoni(req,res){
  res.render('testimoni')
}

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`)
})


// // calculate duration
// function calculateDuration(start_date, end_date) {
//   const start = new Date(start_date);
//   const end = new Date(end_date);
//   const duration = end - start;

//   const seconds = Math.floor(duration / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
//   const weeks = Math.floor(days / 7);
//   const months = Math.floor(weeks / 4.345); // 4.345 minggu dalam sebulan rata-rata
//   const years = Math.floor(months / 12);

//   return {
//     years,
//     months: months % 12,
//     weeks: weeks % 4.345,
//     days: days % 7,
//     hours: hours % 24,
//     minutes: minutes % 60,
//     seconds: seconds % 60,
//   };
// }
