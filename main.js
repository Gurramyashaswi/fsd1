console.log('running')
let carts=document.querySelectorAll('.add-cart');

carts[0]
carts[1]
let products=[
    {
        name:'paintings',
        cost:45,
        incart:0
        },
        {
            name:'Drawings',
            cost:45,
            incart:0
        }
]

for(let i=0;i<carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers();
    })
}


function onLoadCartNumbers(){
    let productNumbers=    localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
}

function cartNumbers(){
    let productNumbers=    localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);

      if(productNumbers){
          localStorage.setItem('cartNumbers',productNumbers+1);
          document.querySelector('.cart span').textContent=1;

      }
      else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
      }
}

onLoadCartNumbers();