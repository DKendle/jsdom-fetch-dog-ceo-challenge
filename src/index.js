console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        let array = json.message
            for (const element of array){
                let ul = document.getElementById("dog-breeds")
                let li = document.createElement("li")
                let newLi = ul.appendChild(li)
                    newLi.innerHTML = element
            }
    })
})

