// ============================================================
// Attack_Hidden — hover facts for the fake solar system page.
// ============================================================
function changepage() {
    document.getElementById('funny').innerHTML = "I know the solar system is very interesting, but we are on a time limit here."
}

let timer = 1

function showfact(x) {
    document.getElementById('Name').innerHTML = x
    document.getElementById('fact').innerHTML = document.getElementById(x).nextElementSibling.innerHTML
    const planets = document.getElementsByClassName('planet')
    for (let i = 0; i < planets.length; i++) {
        planets[i].style.opacity = 0.5
    }
    document.getElementById(x).style.opacity = 1
    clearTimeout(timer)
    timer = setTimeout(changepage, 5000)
}

function hidefact(x) {
    document.getElementById('fact').innerHTML = '<br><br><br>'
    document.getElementById('Name').innerHTML = '<br>'
    const planets = document.getElementsByClassName('planet')
    for (let i = 0; i < planets.length; i++) {
        planets[i].style.opacity = 1
    }
    clearTimeout(timer)
}

// Wire up hover events (previously inline onmouseover/onmouseout attributes).
document.querySelectorAll('.planet').forEach(function (el) {
    el.addEventListener('mouseover', function () { showfact(el.id) })
    el.addEventListener('mouseout', function () { hidefact(el.id) })
})
