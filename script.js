document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[data-target]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            const targetElement = document.querySelector(target);
            targetElement.classList.add('navbar-scrolled');
            setTimeout(function() {
                window.location.href = link.href;
            }, 500); // Ganti halaman setelah 0.5 detik (sesuaikan dengan durasi transisi CSS)
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = link.getAttribute('href');

            // Tambahkan kelas transisi untuk keluar halaman
            document.body.classList.add('body-transition-exit');

            // Tunggu sampai transisi selesai lalu ganti halaman
            setTimeout(function() {
                window.location.href = url;
            }, 500); // Sesuaikan dengan durasi transisi CSS
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = link.getAttribute('href');

            // Tambahkan kelas transisi untuk keluar halaman
            document.body.classList.add('body-transition-exit');

            // Tunggu sampai transisi selesai lalu ganti halaman
            setTimeout(function() {
                window.location.href = url;
            }, 500); // Sesuaikan dengan durasi transisi CSS
        });
    });
});
