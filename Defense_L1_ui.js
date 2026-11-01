// ============================================================
// Defense_L1 UI layer — SOC dashboard dressing.
// Reads the table rows that L1.js refreshes; non-destructive.
// ============================================================

// ---- Live SOC dashboard: colors statuses, counts events, drives threat meter ----
(function () {
    let totalEvents = 5;
    let totalFails = 0;
    const seenIPs = new Set();

    // Recolor one row's status cell straight from its current text.
    function colorRow(row) {
        if (!row) return;
        const cells = row.getElementsByTagName('td');
        if (cells.length < 5) return;
        const status = cells[4].textContent.trim().toLowerCase();
        cells[4].classList.remove('ok', 'bad');
        if (status.includes('success')) {
            cells[4].classList.add('ok');
        } else if (status.includes('fail')) {
            cells[4].classList.add('bad');
        }
    }

    function colorAll() {
        for (let r = 0; r <= 4; r++) {
            colorRow(document.getElementById(r.toString()));
        }
    }

    // Color the instant L1.js rewrites any cell, so there is no stale frame
    // where a failure is still green (or a success still red).
    const table = document.querySelector('table');
    if (table && 'MutationObserver' in window) {
        const obs = new MutationObserver(colorAll);
        obs.observe(table, { childList: true, characterData: true, subtree: true });
    }

    // Counters + threat meter still tick on their own timer.
    function tick() {
        let failsNow = 0;
        for (let r = 0; r <= 4; r++) {
            const row = document.getElementById(r.toString());
            if (!row) continue;
            const cells = row.getElementsByTagName('td');
            if (cells.length < 5) continue;
            const ip = cells[1].textContent.trim();
            const status = cells[4].textContent.trim().toLowerCase();
            if (ip) seenIPs.add(ip);
            if (status.includes('fail')) failsNow++;
        }

        totalEvents += 1;
        totalFails += failsNow > 0 ? 1 : 0;
        document.getElementById('statEvents').textContent = totalEvents;
        document.getElementById('statFails').textContent = totalFails;
        document.getElementById('statIPs').textContent = seenIPs.size;

        const threat = Math.min(100, 15 + failsNow * 22 + (totalFails % 40));
        document.getElementById('threatFill').style.width = threat + '%';
    }

    colorAll();
    tick();
    setInterval(tick, 400);
})();

// ---- Dress up the fail feedback without breaking L1.js's verify() redirect ----
(function () {
    const btn = document.querySelector('input[type="button"]');
    const fail = document.getElementById('fail');
    if (!btn) return;
    btn.addEventListener('click', function () {
        // If verify() redirected, this code won't matter. If it set an error, re-style it.
        setTimeout(function () {
            if (fail.textContent && fail.textContent.toLowerCase().includes('wrong')) {
                fail.classList.remove('success');
                fail.textContent = 'ACCESS DENIED // THREAT STILL ACTIVE';
            }
        }, 0);
    });
})();
