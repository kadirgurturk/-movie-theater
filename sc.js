const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount = document.getElementById("amount");
const movie = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function(e){
    // e.target.classList.contains("seat") ile contatiner içindeki
    // seat olanları ve reserved olmayanları  almamızı sağlar
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        
        calculateTotal();
    }
})

movie.addEventListener("change", function(e){
    calculateTotal();
})


function calculateTotal(){
    const selectedSeats = container.querySelectorAll(".selected");

    const selectedSeatsAr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsAr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);//*!!!!!!!!!!!!
    });

    let selectedSeatIndex = selectedSeatsAr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    

    let seatCount = selectedSeats.length;
    count.innerText = seatCount;
    let moviePrice = movie.value;
    amount.innerText = moviePrice * seatCount;

    saveToLocalStorage(selectedSeatIndex);
}

function saveToLocalStorage(indexs){
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex",movie.selectedIndex);
}

function getLocalStorageInfo(){
    
}