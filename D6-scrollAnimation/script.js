const bxs = document.querySelector('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    const triggerBtm = window.innerHeight / 5 * 4
    
    bxs.forEach(box => {
        const boxTop = box.getBoundingClientRect().boxTop

        if (boxTop < triggerBtm) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    });
}