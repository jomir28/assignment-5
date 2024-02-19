"use strict"
let seatCounts = 0;
let bgCount = 0;
let selectedSeats = []
const seats = document.getElementsByClassName('lg:w-[100px]');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        selectedSeats.push(seat.innerText)

        if (selectedSeats.length < 5) {
            seat.classList.add("bg-green-500")
            let tableRow = document.createElement("tr")
            let tableCell = document.createElement("td")
            let tableCell2 = document.createElement("td")
            let tableCell3 = document.createElement("td")

            tableCell.textContent = seat.innerText
            tableCell2.textContent = "Economoy"
            tableCell3.textContent = "550"
            tableRow.appendChild(tableCell)
            tableRow.appendChild(tableCell2)
            tableRow.appendChild(tableCell3)
            tableBody.appendChild(tableRow)
            // seat count //
            const seatCount = document.getElementById('seat-count');
            seatCounts++;
            seatCount.innerText = seatCounts;

            const totalSeat = document.getElementById('total-seat').innerText;
            const convertedTotalSeat = parseInt(totalSeat);
            const newTotalSeat = convertedTotalSeat - 1;
            document.getElementById('total-seat').innerText = newTotalSeat;
        }

        else{
            alert("You have buy only 4 seats")
        }

       

       
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
        inputField.classList.add('hidden');

          // modal //
          const showModal = document.getElementById('next-btn');
          showModal.addEventListener('click', function () {
              my_modal_1.showModal();
            })
    }
    else {
        alert("Invalid Cupon Code");
        document.getElementById('cupun-field').value = "";
    }

})