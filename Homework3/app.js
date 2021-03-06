const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btnDom = document.querySelector(".btn-container");
let sectionDom = document.querySelector(".section-center");
let categories = ["All", "Korea", "Japan", "China"];
let btnColors = ["danger", "primary", "success", "dark"];

/*
for d??ng??s??n?? kullanarak DRY metoduna ba??l?? kalmak ve kod tekrar??na d????memek ad??na kategori butonlar??m??z?? s??rayla olu??turuyoruz. Daha sonra i??lerine class'lar??n?? ekliyoruz. Sonunda appendChild ile btnDom de??i??kenine atam???? oludu??umuz Html k??sm??na butonlar??m??z?? child element olarak at??yoruz.
*/

for (let i = 0; i < categories.length; i++) {
  let btns = document.createElement("button");
  btns.innerHTML = categories[i];
  btns.classList.add("btn", "catebtns", "fs-6", "mx-1", `${categories[i]}`);
  btnDom.appendChild(btns);
}

/*
Sayfa ilk a????ld??????nda b??t??n yemeklerin g??r??nmesi i??in ba??tan AllMeals() fonksiyonunu ??a????r??yoruz.
*/

AllMeals();
document.querySelector(".All").addEventListener("click", AllMeals);
document.querySelector(".Korea").addEventListener("click", KoreanMeals);
document.querySelector(".Japan").addEventListener("click", JapanMeals);
document.querySelector(".China").addEventListener("click", ChinaMeals);

/*
addEventListener kullanarak kategori butonlar??n??n her birine click ko??uluna ba??l?? olarak g??revlendirmeler yapt??k.
*/

/*
B??t??n yemeklerin g??r??nt??lenece??i k??s??mda herhangi bir filtreleme kullanmad??k. ??stte bize sa??lanan veriler ??zerinde map() fonksiyonu ile gezinip ihtiyac??m??z olan veri ??e??itlerini item.img gibi birer de??i??ken misali yerle??tirdik.
*/
function AllMeals() {
  const AllMap = menu
    .map((item, index) => {
      return `
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card mx-auto d-block rounded mb-3"  style="width: 16rem; height: 26rem;">
    <img class="mb-1" width="254" height="200" src=${item.img} alt=${item.title}>
  <div class="card-body text-center">
    <h5 class="card-title mb-1"><button class="pricebtn btn btn-success ms-1" >${item.price}</button></h5>
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.desc} </p>
  </div>
</div>
    
    </div>
    `;
    })
    .join("");
  sectionDom.innerHTML = AllMap;
}
/*
innerHTML yard??m??yla sectionDom de??i??kenine atamas??n?? yapt??????m??z Html etiketinin i??erisini istedi??imiz gibi js i??erisinde kurgulay??p g??ncelledik.
*/

/*
??lkelerin kendilerini ??zg?? yemeklerini s??ralad??????m??z k??s??mda filter() fonsksiyonunu kullanarak genel veriden sadece o mutfa????n category ismine sahip olan verileri elimizde b??rakt??k. Sonrada kalan veriler ??zerinde map() uygulay??p ayn?? i??lemleri tekrarlad??k. 
*/
function KoreanMeals() {
  const KoreanOnes = menu.filter((item) => {
    return item.category == "Korea";
  });
  const KoreanMap = KoreanOnes.map((item, index) => {
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mx-auto">
    <div class="card mx-auto d-block rounded mb-3"  style="width: 16rem; height: 26rem;">
    <img class="mb-1" width="254" height="200" src=${item.img} alt=${item.title}>
  <div class="card-body text-center">
    <h5 class="card-title mb-1"><button class="pricebtn btn btn-dark ms-1" >${item.price}</button></h5>
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.desc} </p>
  </div>
</div>
    
    </div>
    `;
  }).join("");
  sectionDom.innerHTML = KoreanMap;
}
function JapanMeals() {
  const JapanOnes = menu.filter((item) => {
    return item.category == "Japan";
  });
  const JapanMap = JapanOnes.map((item, index) => {
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mx-auto">
    <div class="card mx-auto d-block rounded mb-3"  style="width: 16rem; height: 26rem;">
    <img class="mb-1" width="254" height="200" src=${item.img} alt=${item.title}>
  <div class="card-body text-center">
    <h5 class="card-title mb-1"><button class="pricebtn text-white btn btn-info ms-1" >${item.price}</button></h5>
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.desc} </p>
  </div>
</div>
    
    </div>
    `;
  }).join("");
  sectionDom.innerHTML = JapanMap;
}
function ChinaMeals() {
  const ChinaOnes = menu.filter((item) => {
    return item.category == "China";
  });
  const ChinaMap = ChinaOnes.map((item, index) => {
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mx-auto">
    <div class="card mx-auto d-block rounded mb-3"  style="width: 16rem; height: 26rem;">
    <img class="mb-1" width="254" height="200" src=${item.img} alt=${item.title}>
  <div class="card-body text-center">
    <h5 class="card-title mb-1"><button class="pricebtn btn btn-danger ms-1" >${item.price}</button></h5>
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.desc} </p>
  </div>
</div>
    
    </div>
    `;
  }).join("");
  sectionDom.innerHTML = ChinaMap;
}
