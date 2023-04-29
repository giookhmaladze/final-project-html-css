let navElement = document.getElementById('navBar')
let burElement = document.getElementById('burBar')
burElement.addEventListener('click', function(){
    navElement.classList.toggle('appear')
})

let searchButt = document.getElementById('searchButton')
let searchElement = document.getElementById('searchBar')
searchButt.addEventListener('click', function(){
    searchElement.classList.toggle('appear')
})

let menuButton = document.getElementById('buttonRound')
let menuElement = document.getElementById('roundElement')
menuButton.addEventListener('click', function(){
    menuElement.classList.toggle('appear')
})