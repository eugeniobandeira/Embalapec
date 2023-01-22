const caixas = document.querySelectorAll('.caixa')

caixas.forEach(caixinha => {
    caixinha.addEventListener('click', () => {
        removeActiveClass()
        caixinha.classList.add('active')
    })
})

function removeActiveClass() {
    caixas.forEach(caixinha => {
        caixinha.classList.remove('active')
    })
}