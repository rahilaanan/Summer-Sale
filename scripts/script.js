
let totalPrice = 0;
let titleCount =1;


    const cards = document.querySelectorAll(".card")
    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
card.addEventListener('click', function(){

    //get the title-----

    const title = card.querySelector('h4').innerText;
    const price =parseFloat( card.querySelector('span').innerText.split(' ')[1]);
    


    const titleContainer = document.getElementById('title-container');
    const p = document.createElement('p');
    p.innerText = titleCount + ". "+ title;

    titleContainer.appendChild(p);
    titleCount ++;

    //calculate price ------
    

    totalPrice += price;
    console.log(totalPrice)
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalPrice.toFixed(2);

   
    

})
        
    }

    const applyButton = document.getElementById('apply-btn');
    applyButton.addEventListener('click', function(){

        //get the value from input

        const couponElement = document.getElementById('input-field').value;
       const couponCode = couponElement.split(' ').join('').toUpperCase();

        if(totalPrice >= 200){
if (couponCode === 'SELL200'){
    //discount calculation 

const discountElement = document.getElementById('discount-price');
const discountText = totalPrice * 0.2;
discountElement.innerText = discountText;


//total calculation 

const total = document.getElementById('total');
const totalText = totalPrice - discountText;
total.innerText = totalText;
document.getElementById('input-field').value = "";
}else{
    alert("Invalid code.");
    document.getElementById('input-field').value = "";
}
        }else{
            alert('Spend more MAN!!');
            document.getElementById('input-field').value = "";
        }

     


    })

    

