const aKey = document.getElementById('KeyA')
const sKey = document.getElementById('KeyS')
const dKey = document.getElementById('KeyD')
const fKey = document.getElementById('KeyF')
const gKey = document.getElementById('KeyG')
const hKey = document.getElementById('KeyH')
const jKey = document.getElementById('KeyJ')
const wKey = document.getElementById('KeyW')
const eKey = document.getElementById('KeyE')
const tKey = document.getElementById('KeyT')
const yKey = document.getElementById('KeyY')
const uKey = document.getElementById('KeyU')






const keys = [aKey, sKey, dKey, fKey, gKey, hKey, jKey, wKey, eKey, tKey, yKey, uKey]
console.log(keys)
document.addEventListener('keypress', (keyPressed) => {
    const key = keyPressed.code
    switch (key) {
        case keys[0].id:
            new Audio('./keys/A.mp3').play()
            keys[0].style.border = 'thick solid white'
            break
        case keys[1].id:
            new Audio('./keys/S.mp3').play()
            keys[1].style.border = 'thick solid white'
            break
        case keys[2].id:
            new Audio('./keys/D.mp3').play()
            keys[2].style.border = 'thick solid white'
            break
        case keys[3].id:
            new Audio('./keys/F.mp3').play()
            keys[3].style.border = 'thick solid white'
            break
        case keys[4].id:
            new Audio('./keys/G.mp3').play()
            keys[4].style.border = 'thick solid white'
            break
        case keys[5].id:
            new Audio('./keys/H.mp3').play()
            keys[5].style.border = 'thick solid white'
            break
        case keys[6].id:
            new Audio('./keys/J.mp3').play()
            keys[6].style.border = 'thick solid white'
            break
        case keys[7].id:
            new Audio('./keys/W.mp3').play()
            keys[7].style.border = 'thick solid white'
            break
        case keys[8].id:
            new Audio('./keys/E.mp3').play()
            keys[8].style.border = 'thick solid white'
            break
        case keys[9].id:
            new Audio('./keys/T.mp3').play()
            keys[0].style.border = 'thick solid white'
            break
        case keys[10].id:
            new Audio('./keys/Y.mp3').play()
            keys[0].style.border = 'thick solid white'
            break
        case keys[11].id:
            new Audio('./keys/U.mp3').play()
            keys[0].style.border = 'thick solid white'
            break
        default:
            console.log('Invalid Key Press')
    }
})
