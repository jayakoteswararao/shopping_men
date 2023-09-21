const product=[
    {
        id:0,
        image:'img-1.jpg',
        title:'plain pink shirt from Roadstar',
        price:600,
    },
    {
        id:1,
        image:'img2.jpg',
        title:'Blue cheques from hilander',
        price:999,
    },
    {
        id:2,
        image:'img3.jpg',
        title:'White coat',
        price:1200,
    },
    {
        id:3,
        image:'img4.jpeg',
        title:'Black shirt from RX',
        price:399,
    },
    {
        id:4,
        image:'img5.jpg',
        title:'Grey T-shirt',
        price:765,
    },
    {
        id:5,
        image:'img6.jpg',
        title:'Formal Blue shirt from IndiaGarage',
        price:540,
    },
    {
        id:6,
        image:'img7.webp',
        title:'Blue jeans',
        price:1000,
    },
    {
        id:7,
        image:'img8.webp',
        title:'Dark brown phant',
        price:600,
    },
    {
        id:8,
        image:'img9.webp',
        title:'Thin Grey Phant',
        price:899,
    },
    {
        id:9,
        image:'img10.webp',
        title:'Dark Brown Chenos',
        price:1200,
    },
    {
        id:10,
        image:'img11.jpg',
        title:'Plain Gray Phant',
        price:600,
    },
    {
        id:11,
        image:'img12.jpg',
        title:'Thick Black',
        price:900,
    }
];
const categories=[...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image,title,price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00<h2>`+
        "<button onclick='addtocart("+(i++) +")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')
var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    document.getElementById("total").innerHTML="$"+0+".00";
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var {image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}