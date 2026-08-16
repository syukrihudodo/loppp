document.addEventListener('click', function(e) {
    // 1. Buat elemen WADAH untuk hati kecil (tempat gelombang memancar)
    const miniWrapper = document.createElement('div');
    miniWrapper.classList.add('mini-heart-wrapper');

    // Tentukan posisi wadah tepat di tengah kursor klik (ukuran 25px, dibagi 2 = 12.5)
    miniWrapper.style.left = (e.clientX - 12.5) + 'px';
    miniWrapper.style.top = (e.clientY - 12.5) + 'px';

    // 2. Buat elemen FOTO hati kecilnya
    const miniHeart = document.createElement('div');
    miniHeart.classList.add('mini-heart');

    // 3. Masukkan FOTO ke dalam WADAH, lalu masukkan WADAH ke layar HTML
    miniWrapper.appendChild(miniHeart);
    document.body.appendChild(miniWrapper);

    // 4. Hapus elemen setelah 2.5 detik (sesuai durasi animasi agar tidak memberatkan browser)
    setTimeout(() => {
        miniWrapper.remove();
    }, 2500);
});