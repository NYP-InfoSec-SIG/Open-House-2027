// ============================================================
// Defense_End UI layer — typewriter boot log + summary reveal.
// ============================================================
(function () {
    const lines = [
        '> Isolating hostile IP ............. [ OK ]',
        '> Terminating malicious process .... [ OK ]',
        '> Purging injected payloads ........ [ OK ]',
        '> Rebuilding firewall rules ........ [ OK ]',
        '> Restoring server resources ....... [ OK ]',
        '> Verifying system integrity ....... [ OK ]',
        '> DEFENSE SUCCESSFUL. System secured.'
    ];
    const log = document.getElementById('log');
    if (!log) return;
    let li = 0, ci = 0;
    const caret = document.createElement('span');
    caret.className = 'caret';

    function type() {
        if (li >= lines.length) {
            document.getElementById('summary').classList.add('show');
            return;
        }
        const text = lines[li];
        let div = log.children[li];
        if (!div) {
            div = document.createElement('div');
            div.className = 'line';
            log.appendChild(div);
        }
        ci++;
        const shown = text.slice(0, ci);
        div.innerHTML = shown.replace('[ OK ]', '<span class="ok">[ OK ]</span>');
        div.appendChild(caret);

        if (ci >= text.length) {
            li++;
            ci = 0;
            setTimeout(type, 260);
        } else {
            setTimeout(type, 22);
        }
    }
    type();
})();
