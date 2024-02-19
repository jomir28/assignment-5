"use strict"
let seatCounts = 0;
let bgCount = 0;
const seats = document.getElementsByClassName('lg:w-[100px]');
for (const seat of seats) {
    seat.addEventListener('click', function () {

        if (bgCount <4){
            bgCount =bgCount + 1;
            seat.classList.add("bg-green-500")
        }
        
        else{
            alert("you buy enough seat")
        }

        const seatCount = document.getElementById('seat-count');
        seatCounts++;
        seatCount.innerText = seatCounts;

        const totalSeat = document.getElementById('total-seat').innerText;
        const convertedTotalSeat = parseInt(totalSeat);
        const newTotalSeat = convertedTotalSeat - 1;
        document.getElementById('total-seat').innerText = newTotalSeat;
        // ...........seat count jug biyug complete............... //

        // ...........price calculate ............//
        const seatPrices = document.getElementById('ticket-price');
        const seatPricesText = seatPrices.innerText
        const seatPrice = parseInt(seatPricesText);

        const totalPrices = document.getElementById('total-price');
        const totalPricesText = totalPrices.innerText;
        const totalPrice = parseInt(totalPricesText);
        const confirmTotalPrice = seatPrice + totalPrice;
        totalPrices.innerText = confirmTotalPrice;

        const grandTotals = document.getElementById('grand-total');
        const grandTotalsText = grandTotals.innerText;
        const grandTotal = parseInt(grandTotalsText);
        grandTotals.innerText = seatPrice + grandTotal;

        // ............................................................... // 
        // chesta kore dekhi append child er section korte pari kina //
        const targetText = event.target.innerText;
        console.log(targetText)
        
        const appendContainer = document.getElementById('append-container');
        const p1 = document.createElement("p");
        p1.innerText = targetText;

        const p2 = document.createElement("p");
        p2.innerText = "Economoy"

        const p3 = document.createElement("p");
        p3.innerText = seatPrice;

        const div = document.createElement("div")

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add("flex");
        div.classList.add("justify-between");
        console.log(div);
        appendContainer.appendChild(div);
        // .................................. //


    })
}





// discount cupoon section ///
document.getElementById('apply-btn').addEventListener('click', function () {

    const cuponField = document.getElementById('cupun-field').value;
    if (cuponField === "Couple 20") {

        const grandTotal = document.getElementById('grand-total');
        const grandTotalValue = parseInt(grandTotal.innerText);
        grandTotal.innerText = grandTotalValue - (grandTotalValue * 0.2);
        // console.log(grandTotal)

        const inputField = document.getElementById('input-field');
        inputField.classList.add('hidden');
        // modal //
        const showModal = document.getElementById('next-btn');
        showModal.addEventListener('click', function () {
            my_modal_1.showModal();
        })

    }
    else if (cuponField === "NEW15") {
        const grandTotal = document.getElementById('grand-total');
        const grandTotalValue = parseInt(grandTotal.innerText);
        grandTotal.innerText = grandTotalValue - (grandTotalValue * 0.15);

        const inputField = document.getElementById('input-field');
        inputField.classList.add('hidden')
    }
    else {
        alert("Invalid Cupon Code");
        document.getElementById('cupun-field').value = "";
    }

})