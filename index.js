let homebtn1 = document.getElementById("home-btn-1")
let homebtn2 = document.getElementById("home-btn-2")
let homebtn3 = document.getElementById("home-btn-3")

let guestbtn1 = document.getElementById("guest-btn-1")
let guestbtn2 = document.getElementById("guest-btn-2")
let guestbtn3 = document.getElementById("guest-btn-3")

let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function increasehomeby1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increasehomeby2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increasehomeby3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseguestby1(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function increaseguestby2(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increaseguestby3(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function reset(){
  guestStoreEl.textContent = 0
  homeStoreEl.textContent = 0
  guestScore = 0
  homeScore = 0
}
