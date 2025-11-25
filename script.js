const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

// Fungsi saat discroll
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Jika kita scroll melewati 1/3 bagian section tersebut
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Hapus class 'active' dari semua link, lalu tambahkan ke link yang sesuai
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

const dbDivisi = {
    "pu": {
        title: "Pimpinan Umum",
        desc: "Bertanggung jawab sebagai pemegang kekuasaan tertinggi di LPM DISPLAY",
        proker: [""]
    },
    "wpu": {
        title: "Wakil Pimpinan Umum",
        desc: "Wakil Pimpinan Umum bertanggung jawab sebagai pemegang kekuasaan tertinggi bersama Pimpinan Umum",
        proker: [""]
    },
    "pp": {
        title: "Pimpinan Perusahaan",
        desc: "Pimpinan Perusahaan bertanggungjawab atas segala hal keorganisasian di LPM DISPLAY FILKOM UB.",
        proker: [""]
    },
    "pr": {
        title: "Pimpinan Redaksi",
        desc: "Pimpinan Redaksi bertanggungjawab atas terbitnya media jurnalistik LPM DISPLAY FILKOM UB.",
        proker: [""]
    },
    "sekretaris": {
        title: "Sekretaris",
        desc: "Sekretaris bertanggung jawab untuk mengelola administrasi LPM DISPLAY FILKOM UB.",
        proker: [""]
    },
    "internal": {
        title: "Internal",
        desc: "Internal bertanggung jawab atas integritas, semangat, dan keeratan internal LPM DISPLAY",
        proker: ["Open Recruitment", "Bonding", "Monitoring dan Evaluasi"]
    },
    "bendahara": {
        title: "Bendahara",
        desc: "Bendahara bertanggung jawab untuk mengelola keuangan LPM DISPLAY FILKOM UB.",
        proker: [""]
    },
    "psdm": {
        title: "PSDM",
        desc: "Divisi PSDM bertanggung jawab atas pengembangan potensi dan dedikasi sumber daya manusia di LPM DISPLAY.",
        proker: ["Diklat Karya Jurnalistik", "Jurnal DISPLAY", "DISPLAY Champ", "DISPLAY Connect", "🔥DISPLAY Compe: Perlombaan khusus internal DISPLAY sebagai wadah apresiasi kepenulisan"]
    },
    "inbis": {
        title: "Inovasi Bisnis",
        desc: "Divisi inovasi bisnis bertanggung jawab merancang, mengelola, dan mengembangkan bisnis LPM DISPLAY dalam rangka menunjang kemampuan finansial LPM DISPLAY.",
        proker: ["DISPLAY Canteen", "Cashflow"]
    },
    "humas": {
        title: "Hubungan Masyarakat",
        desc: "Divisi hubungan masyarakat bertanggung jawab sebagai narahubung dan membangun relasi dengan pihak eksternal LPM DISPLAY.",
        proker: ["Studi Banding", "Studi Ekskursi", "Media Partner", "Partnership"]
    },
    "reportase": {
        title: "Reportase",
        desc: "Divisi Reportase bertanggung jawab pada peliputan dan pembuatan produk keredaksian di LPM DISPLAY.",
        proker: ["News", "Flash News", "Opini", "Artikel", "Buletin", "🔥TECH udah digabung jadi satu sama ARTIKEL >.<"]
    },
    "editor": {
        title: "Editor",
        desc: "Divisi editor bertanggung jawab dalam pemeriksaan dan penyuntingan produk keredaksian sebelum dipublikasikan, serta bertanggung jawab dalam pembuatan produk sastra LPM DISPLAY.",
        proker: ["Launching Majalah dan Antologi Puisi", "Penyuntingan Produk", "Resensi", "Bedah Kata", "Produk Sastra", "Peribahasa"]
    },
    "multimedia": {
        title: "Multimedia",
        desc: "Divisi Multimedia bertanggung jawab dalam pembuatan visualisasi produk media.",
        proker: ["Visualisasi Produk", "Company Profile", "Dimensi", "Poster dan Infografis", "Lensa"]
    },
    "api": {
        title: "Aktivasi, Publikasi, Informasi",
        desc: "(DIVISI BARU) Bertanggung jawab atas pengembangan riset, publikasi produk, serta bertanggung jawab atas maintenance website LPM DISPLAY.",
        proker: ["Research", "Maintenance Web dan Publikasi Produk", "Scroll Up!", "Open-commis!"]
    }
};

// FUNGSI MEMBUKA MODAL
function openModal(id) {
    const modal = document.getElementById("divisiModal");
    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDesc");
    const list = document.getElementById("modalList");
    
    // Ambil data berdasarkan ID
    const data = dbDivisi[id];

    if (data) {
        title.innerText = data.title;
        desc.innerText = data.desc;
        
        // Reset dan isi list proker
        list.innerHTML = "";
        data.proker.forEach(item => {
            const li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });

        // Tampilkan modal (ubah display jadi flex)
        modal.style.display = "flex";
    }
}

// FUNGSI MENUTUP MODAL (Tombol X)
function closeModalBtn() {
    document.getElementById("divisiModal").style.display = "none";
}

// FUNGSI MENUTUP MODAL (Klik di luar kotak)
function closeModal(event) {
    if (event.target === document.getElementById("divisiModal")) {
        document.getElementById("divisiModal").style.display = "none";
    }
}

function switchProfile(person) {
    // 1. Ambil elemen
    const btnNadhif = document.querySelector("button[onclick=\"switchProfile('nadhif')\"]");
    const btnPuspa = document.querySelector("button[onclick=\"switchProfile('puspa')\"]");
    const dataNadhif = document.getElementById("data-nadhif");
    const dataPuspa = document.getElementById("data-puspa");

    // 2. Reset semua (Hapus class active)
    btnNadhif.classList.remove("active");
    btnPuspa.classList.remove("active");
    dataNadhif.classList.remove("active");
    dataPuspa.classList.remove("active");

    // 3. Aktifkan sesuai parameter
    if (person === 'nadhif') {
        btnNadhif.classList.add("active");
        dataNadhif.classList.add("active");
    } else {
        btnPuspa.classList.add("active");
        dataPuspa.classList.add("active");
    }
}

// Opsional: Jalankan default (Nadhif aktif duluan) saat load
document.addEventListener("DOMContentLoaded", () => {
    switchProfile('nadhif');
});