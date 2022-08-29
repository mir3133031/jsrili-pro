let img = document.querySelector(`.box-img`)
let greens = document.querySelector(`.green`)
let silvers = document.querySelector(`.silver`)
let golds = document.querySelector(`.golg`)
let graphites = document.querySelector(`.Graphite`)
let blues = document.querySelector(`.blue`)
greens.onclick = () => {


    if (img.classList.contains(`box-img-one`)) {
        img.classList.remove(`box-img-one`)
        greens.classList.add(`border-green`)
        silvers.classList.remove(`border-silver`)
        golds.classList.remove(`border-gold`)
        graphites.classList.remove(`border-Graphite`)
        blues.classList.remove(`border-blue`)
    } else {

        img.classList.add(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-four`)
        img.classList.remove(`box-img-foyf`)
    }
}
img.classList.remove(`box-img-one`)
img.classList.remove(`box-img-two`)
img.classList.remove(`box-img-three`)
img.classList.remove(`box-img-four`)
img.classList.remove(`box-img-foyf`)


silvers.onclick = () => {
    if (img.classList.contains(`box-img-two`)) {
        img.classList.remove(`box-img-two`)
        silvers.classList.add(`border-silver`)
        greens.classList.remove(`border-green`)
        golds.classList.remove(`border-gold`)
        graphites.classList.remove(`border-Graphite`)
        blues.classList.remove(`border-blue`)

    } else {
        img.classList.add(`box-img-two`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-four`)
        img.classList.remove(`box-img-foyf`)
    }
}
golds.onclick = () => {
    if (img.classList.contains(`box-img-three`)) {
        img.classList.remove(`box-img-three`)
        golds.classList.add(`border-gold`)
        greens.classList.remove(`border-green`)
        silvers.classList.remove(`border-silver`)
        graphites.classList.remove(`border-Graphite`)
        blues.classList.remove(`border-blue`)
    } else {
        img.classList.add(`box-img-three`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-four`)
        img.classList.remove(`box-img-foyf`)
    }
}
graphites.onclick = () => {
    if (img.classList.contains(`box-img-four`)) {
        img.classList.remove(`box-img-four`)
        graphites.classList.add(`border-Graphite`)
        greens.classList.remove(`border-green`)
        silvers.classList.remove(`border-silver`)
        golds.classList.remove(`border-gold`)
        blues.classList.remove(`border-blue`)
    } else {
        img.classList.add(`box-img-four`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-foyf`)
    }
}
blues.onclick = () => {
    if (img.classList.contains(`box-img-foyf`)) {
        img.classList.remove(`box-img-foyf`)
        blues.classList.add(`border-blue`)
        greens.classList.remove(`border-green`)
        silvers.classList.remove(`border-silver`)
        golds.classList.remove(`border-gold`)
        graphites.classList.remove(`border-Graphite`)

    } else {
        img.classList.add(`box-img-foyf`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-four`)
    }
}


