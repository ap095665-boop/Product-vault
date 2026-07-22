const productContainer = document.getElementById("cards");

const search = document.getElementById("search");

let visibleProducts = 4;

let filteredProducts = [...PRODUCTS];



function createCard(product){

let media="";



if(product.video!=""){

media=`

<video

class="media"

controls

playsinline

preload="none">

<source

src="${product.video}"

type="video/mp4">

</video>

`;

}

else{

media=`

<img

class="media"

loading="lazy"

src="${product.image}"

alt="${product.name}">

`;

}



return `

<div class="card">



${media}



<div class="content">



<div class="name">

${product.name}

</div>



<div class="rating">

⭐ ${product.rating}

</div>



<div class="desc">

${product.description}

</div>



<a

class="buy"

href="${product.buy}"

target="_blank">

Buy Now

</a>



<a

class="details"

href="product.html?id=${product.id}">

View Details

</a>



</div>



</div>

`;

}



function renderProducts(){



productContainer.innerHTML="";



filteredProducts

.slice(0,visibleProducts)

.forEach(product=>{

productContainer.innerHTML+=createCard(product);

});

}



renderProducts();
