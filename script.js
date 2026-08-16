/**
 * PROFESSIONAL PARTICLE SYSTEM
 * Ditulis menggunakan arsitektur Class (ES6+)
 */

class InteractiveHeartEffect {
    constructor() {
        this.init();
    }

    init() {
        // Event listener utama (menangkap klik di mana saja di halaman)
        document.addEventListener('click', (event) => this.spawnParticle(event.clientX, event.clientY));
    }

    spawnParticle(x, y) {
        // 1. Buat kontainer untuk partikel baru
        const wrapper = document.createElement('div');
        wrapper.className = 'particle-wrapper';
        
        // Letakkan tepat di titik kursor
        wrapper.style.left = `${x - 12.5}px`;
        wrapper.style.top = `${y - 12.5}px`;

        // 2. LOGIKA ORGANIK (Randomisasi pergerakan agar tidak kaku)
        const randomX = (Math.random() - 0.5) * 120; // Hati menyebar secara horizontal (-60px ke +60px)
        const randomY = -150 - (Math.random() * 100); // Ketinggian terbang acak (ke atas)
        const randomRotation = (Math.random() - 0.5) * 80; // Rotasi acak ke kiri atau kanan
        const randomScale = 1 + (Math.random() * 0.7); // Skala ukuran acak saat menghilang
        const duration = 2000 + Math.random() * 1500; // Durasi acak (2 hingga 3.5 detik)

        // Suntikkan nilai matematika ini ke dalam CSS Variables khusus partikel ini
        wrapper.style.setProperty('--end-x', `${randomX}px`);
        wrapper.style.setProperty('--end-y', `${randomY}px`);
        wrapper.style.setProperty('--end-rotation', `${randomRotation}deg`);
        wrapper.style.setProperty('--end-scale', randomScale);
        
        // Picu animasinya
        wrapper.style.animation = `floatParticle ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;

        // 3. Masukkan struktur HTML partikel menggunakan Template Literal
        wrapper.innerHTML = `
            <div class="particle__wave"></div>
            <div class="particle__wave particle__wave--delay"></div>
            <div class="particle__core"></div>
        `;

        // 4. Render ke layar
        document.body.appendChild(wrapper);

        // 5. MANAJEMEN MEMORI PRO: Hapus elemen BUKAN dengan timer (setTimeout), 
        // melainkan mendeteksi secara akurat kapan animasinya selesai.
        wrapper.addEventListener('animationend', (event) => {
            if(event.animationName === 'floatParticle') {
                wrapper.remove(); // Hapus dari memori (mencegah lag)
            }
        });
    }
}

// Inisialisasi program hanya ketika HTML/DOM sudah selesai dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveHeartEffect();
});
