// ============================================================
// Shared decorative "Matrix rain" background for Defense pages.
// ============================================================
(function () {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let cols, drops;
    const chars = '01<>/\\{}[]#$%&*ABCDEF0123456789'.split('');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cols = Math.floor(canvas.width / 14);
        drops = new Array(cols).fill(1);
    }
    resize();
    window.addEventListener('resize', resize);

    setInterval(function () {
        ctx.fillStyle = 'rgba(5,10,15,0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff9c';
        ctx.font = '14px monospace';
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 14, drops[i] * 14);
            if (drops[i] * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }, 60);
})();
