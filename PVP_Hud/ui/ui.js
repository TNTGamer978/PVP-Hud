window.addEventListener('message', (event) => {
    const { data } = event

    if (data.health) {
        const value = 216 / 100 * data.health
        document.getElementById("hpbar").style.width = value + "px"
    }
})