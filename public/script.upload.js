document.getElementById("calculate").addEventListener("click", async () => {
    const canvas = document.getElementById("myCanvas")
    canvas.toBlob(async (blob) => {
        if (!blob) return

        const formData = new FormData()
        formData.append("image", blob, "canvas-drawing.png")

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData,
            })

            if (response.ok) {
                const result = await response.json()
                const answer = document.querySelector(".youranswer")
                answer.innerHTML = result.answer
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }, "image/png")
})
