const canvas = document.getElementById("myCanvas")
const context = canvas.getContext("2d")

canvas.style.width = "80vw"
canvas.style.height = "80vh"

canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight

let lastX, lastY
let isDrawing = false

const rect = canvas.getBoundingClientRect()

function fillCanvasBackgroundWithWhite() {
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

fillCanvasBackgroundWithWhite()

canvas.addEventListener("mousedown", (e) => {
    e.preventDefault()
    isDrawing = true
    lastX = e.clientX - rect.left
    lastY = e.clientY - rect.top
})

canvas.addEventListener("mousemove", (e) => {
    e.preventDefault()
    if (!isDrawing) return

    const { x, y } = { x: e.clientX - rect.left, y: e.clientY - rect.top }

    context.beginPath()
    context.moveTo(lastX, lastY)
    context.lineTo(x, y)
    context.stroke()
    lastX = x
    lastY = y
})

canvas.addEventListener("mouseup", () => {
    isDrawing = false
})

canvas.addEventListener("mouseleave", () => {
    isDrawing = false
})

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault()
    isDrawing = true
    const { x, y } = getCanvasCoordinates(e.touches[0])
    lastX = x
    lastY = y
})

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault()
    if (!isDrawing) return

    const { x, y } = getCanvasCoordinates(e.touches[0])

    context.beginPath()
    context.moveTo(lastX, lastY)
    context.lineTo(x, y)
    context.stroke()
    lastX = x
    lastY = y
})

canvas.addEventListener("touchend", () => {
    isDrawing = false
})

document.getElementById("clear").addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    fillCanvasBackgroundWithWhite()
})
