// Array of objects


const menu = [
    {
        id: 1,
        title: "cake",
        category: "breakfast",
        price: 15.99,
        img: "img/breakfast/cake.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: "english breakfast",
        category: "breakfast",
        price: 13.99,
        img: "img/breakfast/english-breakfast.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "fried egg on toast",
        category: "breakfast",
        price: 6.99,
        img: "img/breakfast/fryegg-toast.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "Pancakes",
        category: "breakfast",
        price: 10.99,
        img: "img/breakfast/pancakes.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "Poached eggs",
        category: "breakfast",
        price: 12.99,
        img: "img/breakfast/poachedegg.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "beef",
        category: "lunch",
        price: 18.99,
        img: "img/lunch/beef.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "green salad",
        category: "lunch",
        price: 8.99,
        img: "img/lunch/green-salad.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "penes",
        category: "lunch",
        price: 12.99,
        img: "img/lunch/penes.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "poke bowl",
        category: "lunch",
        price: 10.99,
        img: "img/lunch/poke-bowl.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 10,
        title: "ramen",
        category: "lunch",
        price: 12.99,
        img: "img/lunch/ramen.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 11,
        title: "chocolate shake",
        category: "shakes",
        price: 7.99,
        img: "img/shakes/chocolate-shake.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      }, 
      {
        id: 12,
        title: "donut shake",
        category: "shakes",
        price: 10.99,
        img: "img/shakes/donut-shake.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 13,
        title: "mango shake",
        category: "shakes",
        price: 7.99,
        img: "img/shakes/mango-shake.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 14,
        title: "red fruit shake",
        category: "shakes",
        price: 6.99,
        img: "img/shakes/redfruit-shake.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 15,
        title: "strawberry shake",
        category: "shakes",
        price: 5.99,
        img: "img/shakes/strawberry-shake.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
]

const displaySection = document.querySelector('.item-row');

const btnSection = document.querySelector('.btn-section');



// load menu 
window.addEventListener('DOMContentLoaded',function(){
    
    displayMenuItems(menu);

    displayMenuBtns();

})



// functon that maps and renderize the array of object
function displayMenuItems(menuItems){
let displayItems =  menuItems.map(function(item){
    return `<div class="menu-card card col-lg-5 col-sm-12 m-4">
    <div class="title-and-price d-flex justify-content-between m-3">
        <div class="item-title">
            <h2 id="title">${item.title}</h2>
        </div>
        <div class="item-price">
            <p id="price">$${item.price}</p>
        </div>
    </div>
    <div class="img-and-description d-flex justify-content-center align-items-center m-3">
        <img src=${item.img} alt=${item.title} id="picture">
        <p id="decription" class="ms-5">${item.desc}</p>
    </div>
</div>`
});

displayItems = displayItems.join('');

displaySection.innerHTML = displayItems;

};

function displayMenuBtns(){

    // setting up values 
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values;
    },['all']);

// mapping buttons according to categories 
    const categoryBtns = categories.map(function(category){
        return `<button type="button" class="filter-btn"
        data-id=${category}>${category}</button>`
    }).join('');
// render buttons
    btnSection.innerHTML = categoryBtns;
// Once buttons created you call them
    const filterBtns = document.querySelectorAll('.filter-btn');
    // filter items 
filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category =e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if( category === "all"){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory)
        }
    });
});
   
    
};