// ============================================================
// Defense_L3 UI layer — EDR resource monitor dressing.
// Mirrors the "Total Used" row into gauges; flags the hot process.
// Reads values L3.js recomputes each second; non-destructive.
// ============================================================
(function () {
    function num(s) {
        const m = (s || '').replace(/,/g, '').match(/[\d.]+/);
        return m ? parseFloat(m[0]) : 0;
    }

    function setBar(barId, valId, pct) {
        pct = Math.max(0, Math.min(100, pct));
        document.getElementById(barId).style.width = pct + '%';
        document.getElementById(valId).textContent = Math.round(pct) + '%';
    }

    function sync() {
        const total = document.getElementById('0');
        if (total) {
            const c = total.getElementsByTagName('td');
            if (c.length >= 5) {
                const cpu = num(c[2].textContent);
                const ram = num(c[3].textContent);
                const net = num(c[4].textContent);
                setBar('gCpu', 'gCpuVal', cpu);
                setBar('gRam', 'gRamVal', ram);
                setBar('gNet', 'gNetVal', net);
            }
        }
        // Row 1 is the resource hog planted by the red team.
        const hog = document.getElementById('1');
        if (hog) hog.classList.add('hot');
    }

    setInterval(sync, 1000);
    sync();
})();
