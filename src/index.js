function toggleLamp(el) {
    if (el.classList.contains('lamp-broken')) {
        return
    }

    if (el.dataset.hp == 0) {
        const audio = new Audio('assets/glass-breaking-93803.mp3')
        audio.playbackRate = 2
        audio.play()
        el.classList.toggle('lamp-on', false)
        el.classList.toggle('lamp-broken', true)
        el.remove()
        return
    }

    el.dataset.hp -= 1
    const audio = new Audio('assets/bug-zapper-47300.mp3')
    audio.playbackRate = 2
    audio.play()
    el.classList.toggle('lamp-on')
}


function addLamp(i = 0) {
    const lampsSpace = document.getElementById('lamps-space')
    const lamp = document.createElement('div')
    lamp.classList.add('lamp', 'lamp-on')
    lamp.dataset.hp = 2
    lamp.style.animationDelay = '-' + i + 's'

    lampsSpace.appendChild(lamp)
}

let prevElement = null

function handleMouseEvent(ev) {
    ev.preventDefault()
    if (ev.type === 'mousemove') {
        if (prevElement !== ev.target) {
            prevElement = ev.target
            if (ev.target.classList.contains('lamp') && ev.buttons === 1) {
                toggleLamp(ev.target)
            }

        }
    }
    if (ev.type === 'mousedown') {
        if (ev.target.classList.contains('lamp')) {
            toggleLamp(ev.target)
        } else {
            addLamp()
        }
    }
}


window.addEventListener('load', () => {
    for (let i = 0; i < 10; i++) {
        addLamp(i)
    }
})
document.addEventListener('mousemove', handleMouseEvent)
document.addEventListener('mousedown', handleMouseEvent)
