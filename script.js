// Menambahkan event listener saat layar di-klik
document.addEventListener('click', function(e) {
    // 1. Buat elemen div baru untuk hati kecil
    const miniHeart = document.createElement('div');
    miniHeart.classList.add('mini-heart');

    // 2. Tentukan posisi berdasarkan koordinat klik kursor
    // Dikurangi 10 agar klik tepat berada di tengah hati kecil (karena lebar 20px)
    miniHeart.style.left = (e.clientX - 10) + 'px';
    miniHeart.style.top = (e.clientY - 10) + 'px';

    // 3. Masukkan elemen ke dalam body HTML
    document.body.appendChild(miniHeart);

    // 4. Hapus elemen hati kecil setelah 2 detik agar tidak menumpuk dan memberatkan browser
    setTimeout(() => {
        miniHeart.remove();
    }, 2000);
});