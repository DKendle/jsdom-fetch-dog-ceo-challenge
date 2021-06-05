console.log('%c HI', 'color: firebrick')
let 



document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        let array = json.message
        for (const element of array){

        }
    })
})