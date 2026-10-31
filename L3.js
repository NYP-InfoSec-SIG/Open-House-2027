    rows = [['94%', '97%', '90%'], ['88%', '28,157.5 MB', '361.3 Mbps'], ['1%', '100.9 MB'], ['3%', '2,481.4 MB'], ['2%', '302.7Mbps', '0 Mbps']]
    let fullcpu = 0
    let fullram = 0
    let fullnet = 0
    function others() {
        let cpu = (Math.random() * 1.5).toFixed(1)
        fullcpu += cpu / 1
        cpu = cpu.toString() + '%'
        let ram = (Math.random() * 100 + 50).toFixed(1)
        fullram += ram / 1
        ram = ram.toString() + ' MB'
        let net = (Math.random() / 9).toFixed()
        fullnet += net / 1
        net = net.toString() + ' Mbps'
        return [cpu, ram, net]


    }
    function chrome() {
        let cpu = (Math.random() * 1.5).toFixed(1)
        fullcpu += cpu / 1
        cpu = cpu.toString() + '%'
        let ram = (Math.random() * 100 + 2000).toFixed(1)
        fullram += ram / 1
        ram = ram.toString() + ' MB'
        let net = (Math.random() / 9).toFixed()
        fullnet += net / 1
        net = net.toString() + ' Mbps'
        return [cpu, ram, net]
    }
    function badprog() {
        let cpu = 94 - (Math.random() * 5).toFixed(1)
        fullcpu += cpu / 1
        cpu = cpu.toString() + '%'
        let rawram = 30000 - (Math.random() * 5000).toFixed(1)
        fullram += rawram / 1
        let ram = Math.floor(rawram / 1000).toString() + ',' + (rawram % 1000).toFixed(1).toString().padStart(5, '0') + ' MB'
        let net = 363 - (Math.random() * 5).toFixed(1)
        fullnet += net / 1
        net = net.toString() + ' Mbps'
        return [cpu, ram, net]
    }
    function changer() {
        fullcpu = 0
        fullram = 0
        fullnet = 0
        let bad = badprog()
        let row = document.getElementById('1').children
        for (i in bad) {
            let j = (Number(i) + 2).toString()
            row[j].innerHTML = bad[i]
        }
        let viewer = others()
        row = document.getElementById('viewer').children
        for (i in viewer) {
            let j = (Number(i) + 2).toString()
            row[j].innerHTML = viewer[i]
        }
        row = document.getElementById('coder').children
        let coder = others()
        for (i in coder) {
            let j = (Number(i) + 2).toString()
            row[j].innerHTML = coder[i]
        }
        let google = chrome()
        row = document.getElementById('chrome').children
        for (i in google) {
            let j = (Number(i) + 2).toString()
            row[j].innerHTML = google[i]
        }
        row = document.getElementById('0').children
        row[2].innerHTML = fullcpu.toFixed(1) + '%'
        row[3].innerHTML = ((fullram / 32786) * 100).toFixed(0) + '%'
        row[4].innerHTML = ((fullnet / 400) * 100).toFixed(0) + '%'
    }
    function verify() {
        let ans = document.getElementById('badprocess').value
        if( ans.toUpperCase() == document.getElementById('1').children[1].innerHTML.toUpperCase()){
            window.location.replace("Defense_End.html")
        }else{
            document.getElementById('fail').innerHTML = "That's not the right process!"
            
        }
    }

    setInterval(changer, 1000)
    setTimeout(() => {
        document.getElementById('hint').innerHTML = 'Theres one process using a lot more resources than the others. Which is very weird'
    }, 20000);