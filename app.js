const colors = ["#000000", "#A52A2A", "#7FFF00", "#2F4F4F", "#B22222", "#DAA520", "#ADD8E6", "#191970"]
const color = document.querySelector('.color')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const random = randomColor()
    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random]
})

function randomColor(){
    return Math.floor(Math.random() * colors.length)
}