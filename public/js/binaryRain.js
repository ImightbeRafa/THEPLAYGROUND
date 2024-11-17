document.addEventListener('DOMContentLoaded', () => {
    const createBinaryRain = () => {
        const rain = document.createElement('div');
        rain.className = 'binary-rain';
        for (let i = 0; i < 50; i++) {
            const drop = document.createElement('div');
            drop.className = 'binary-drop';
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDuration = `${5 + Math.random() * 5}s`;
            drop.style.animationDelay = `${Math.random() * 5}s`;
            drop.textContent = Math.random() > 0.5 ? '0' : '1';
            rain.appendChild(drop);
        }
        document.body.appendChild(rain);
    };

    createBinaryRain();
});