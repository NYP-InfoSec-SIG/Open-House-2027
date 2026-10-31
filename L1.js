let list = [[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4], [5, 5, 5, 5, 5]];
var id = -1

function pad(num) {
    return num.toString().padStart(2, '0')
}
function timer() {
    let now = new Date()
    let time = now.getFullYear().toString() + '/' + pad(now.getMonth() + 1) + '/' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds()) + ':' + now.getMilliseconds().toString().padStart(3, '0')
    return time
}
function ip_gen() {
    return Math.floor(Math.random() * 254 + 1)
}
var badIP = ip_gen() + '.' + ip_gen() + '.' + ip_gen() + '.' + ip_gen()
function event_gen() {

    let action = ''
    let dice = Math.floor(Math.random() * 10)
    let status = 'Success'
    if (dice < 2) {
        action = 'Login'
        let d2 = Math.floor(Math.random() * 10)
        if (d2 < 5) {
            status = 'Failure'
        }
    }
    else if (dice < 5) {
        action = 'Modify Data'
    }
    else {
        action = 'Access Data'
    }
    return [action, status]
}

function gen() {
    let time = timer()
    let dice = Math.floor(Math.random() * 10)
    let ip = ip_gen() + '.' + ip_gen() + '.' + ip_gen() + '.' + ip_gen()
    let action = ''
    let status = ''
    if (dice < 8) {
        ip = badIP.padEnd(16)
        action = "Login"
        status = "failure"
    } else {
        let set = event_gen()
        action = set[0]
        status = set[1]

    }
    id++
    return [id, ip, time, action, status]




}
function pusher() {
    var latest = gen()
    list.shift()
    list.push(latest)
    for (i in list) {
        let log = list[i]
        let row = document.getElementById(i.toString()).children
        for (j in row) {
            row[j].innerHTML = log[j]
        }

    }

}
function verify() {
    var ip = document.getElementById('IP').value
    if (ip == badIP) {
        window.location.replace("Defense_L3.html")
    } else {
        document.getElementById('fail').innerHTML = 'Wrong IP!'
    }
}
pusher()
pusher()
pusher()
pusher()
pusher()
setInterval(pusher, 400)
setTimeout(() => {
    document.getElementById('hint').innerHTML = 'Look for an IP doing something weird, or facing weird issues'

}, 20000);
setTimeout(() => {
    document.getElementById('hint2').innerHTML = "Only 1 IP keeps trying to log in, and he's spamming our servers"

}, 40000);

