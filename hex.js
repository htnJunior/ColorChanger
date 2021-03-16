const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    let hash = "#"
    for(let i = 0;i < 6;i++){
        hash += hex[getRandomColor()]
    }

    color.textContent = hash
    document.body.style.backgroundColor = hash
})

function getRandomColor(){
    return Math.floor(Math.random() * hex.length)
}