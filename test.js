"use strict"
let seatCounts = 0;
const seats = document.getElementsByClassName('lg:w-[100px]');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        const seatCount = document.getElementById('seat-count');
        seatCounts++;
        seatCount.innerText = seatCounts;
        //   document.getElementById('seat-count').innerText=seatCounts;
        const totalSeat = document.getElementById('total-seat').innerText;
        const convertedTotalSeat = parseInt(totalSeat);
        // console.log(convertedTotalSeat)
        const newTotalSeat = convertedTotalSeat - 1;
        document.getElementById('total-seat').innerText = newTotalSeat;
        // ...........seat count jug biyug complete............... //

        // ...........price calculate ............//
        const seatPrices = document.getElementById('ticket-price');
        const seatPricesText =seatPrices.innerText
        const seatPrice = parseInt(seatPricesText);

        const totalPrices = document.getElementById('total-price');
        const totalPricesText = totalPrices.innerText;
        const totalPrice = parseInt(totalPricesText);
        const confirmTotalPrice =seatPrice + totalPrice;
        totalPrices.innerText = confirmTotalPrice;

        const grandTotals = document.getElementById('grand-total');
        const grandTotalsText =grandTotals.innerText;
        const grandTotal = parseInt(grandTotalsText);
        grandTotals.innerText=seatPrice+grandTotal;
        
        // ............................................................... // 
        // chesta kore dekhi cupon apply discount korte pari kina //
     




    })
}


document.getElementById('apply-btn').addEventListener('click',function(){
    
 const cuponField =document.getElementById('cupun-field').value;
 if(cuponField === "Couple 20"){

    const grandTotal =document.getElementById('grand-total');
    const grandTotalValue =parseInt(grandTotal.innerText);
    grandTotal.innerText=grandTotalValue-(grandTotalValue*0.2);
    // console.log(grandTotal)

    const inputField =document.getElementById('input-field');
    inputField.classList.add('hidden')
    
 }
 else if(cuponField === "NEW15"){
    const grandTotal =document.getElementById('grand-total');
    const grandTotalValue =parseInt(grandTotal.innerText);
    grandTotal.innerText=grandTotalValue-(grandTotalValue*0.15);

    const inputField =document.getElementById('input-field');
    inputField.classList.add('hidden')
 }
 else{
     alert("Invalid Cupon Code");
     document.getElementById('cupun-field').value="";
 }

   })