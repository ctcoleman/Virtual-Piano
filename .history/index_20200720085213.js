const aKey = document.getElementById('KeyA')
const sKey = document.getElementById('KeyS')
const dKey = document.getElementById('KeyD')
const fKey = document.getElementById('KeyF')
const gKey = document.getElementById('KeyG')
const hKey = document.getElementById('KeyH')
const jKey = document.getElementById('KeyJ')
const wKey = document.getElementById('KeyW')
const wKey = document.getElementById('KeyW')
const wKey = document.getElementById('KeyT')
const wKey = document.getElementById('KeyY')
const wKey = document.getElementById('KeyU')






const keys = [aKey, sKey, dKey, fKey, gKey, hKey, jKey]
console.log(keys)
document.addEventListener('keypress', (keyPressed) => {
    const key = keyPressed.code
    switch (key) {
        case keys[0].id:
            new Audio('./keys/A.mp3').play()
            break
        case keys[1].id:
            new Audio('./keys/S.mp3').play()
            break
        case keys[2].id:
            new Audio('./keys/D.mp3').play()
            break
        case keys[3].id:
            new Audio('./keys/F.mp3').play()
            break
        case keys[4].id:
            new Audio('./keys/G.mp3').play()
            break
        case keys[5].id:
            new Audio('./keys/H.mp3').play()
            break
        case keys[6].id:
            new Audio('./keys/J.mp3').play()
            break
        default:
            console.log('Invalid Key Press')
    }
})
