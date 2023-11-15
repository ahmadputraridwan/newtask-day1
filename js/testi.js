class cardTesti {
  constructor(author, quote, image) {
    this.author = author;
    this.quote = quote;
    this.image = image;
  }

  html() {
    return `
    <div class="testimoni">
    <img src="${this.image}" alt="testi" class="profile-testi">
    <p class="quote"> "${this.quote}" </p>
    <p class="author"> '${this.author}'</p>
    <p class="ratting-5"><i class="fa-solid fa-star">5 </i>
     </p>
  </div>
        `;
  }
}

const dataDummy = [
  {
    author : 'Ahmad',
    quote : 'baik sekali',
    image : '/images/wisuda.jpeg',
  },
  {
  author : ' Putra',
    quote : 'baik',
    image : '/images/sepeda.jpeg'
  },
  {
  author : 'Ridwan',
    quote : 'cukup baik!',
    image : '/images/fotosaya.jpeg',
  },
  {
    author: 'Susilo',
    quote : 'lumayan!',
    image : '/images/rame.jpeg',
  },
];

const card1 = new cardTesti(
  dataDummy[0].author,
  dataDummy[0].quote,
  dataDummy[0].image
);
const card2 = new cardTesti(
  dataDummy[1].author,
  dataDummy[1].quote,
  dataDummy[1].image
);
const card3 = new cardTesti(
  dataDummy[2].author,
  dataDummy[2].quote,
  dataDummy[2].image
);
const card4 = new cardTesti(
  dataDummy[3].author,
  dataDummy[3].quote,
  dataDummy[3].image
);

const testimonial = [card1, card2, card3, card4];

let cardHtml = "";
for (let x = 0; x < testimonial.length; x++) {
  cardHtml += testimonial[x].html();
}

document.getElementById("testimonial").innerHTML = cardHtml;
