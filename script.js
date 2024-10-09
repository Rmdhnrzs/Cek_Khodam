function cek_khodam() {
            const khodam = ["Kucing Garong Bandung", "Ayam Joget Cirebon", "Bebek Ngakak Tegal", "Belalang Ngopi Bogor", "Kambing Narsis Solo", "Tikus Nge-gym Batam", "Cicak Selow Cilacap", "Ular Plesetan Lampung", "Kelelawar Baper Malang", "Singa Goyang Jogja", "Ikan Selfie Makassar", "Kerbau Ngakak Surabaya", "Katak Gaul Garut", "Landak Labil Lamongan", "Capung Keren Kupang", "Kepiting Galau Bintan", "Harimau Gabut Gorontalo", "Gajah Ngemil Banyumas", "Kucing Nge-meong Kudus", "Ayam Kaget Tangerang", "Bebek Tersesat Sidoarjo", "Kuda Joget Malang", "Kelinci Imut Ngawi", "Capung Happy Kediri", "Kepiting Lucu Kupang", "Kambing Kece Kudus", "Tikus Pinter Pontianak", "Cicak Lucu Cianjur", "Ular Lembek Klaten", "Singa Nge-roar Ngawi", "Burung Kicau Nabire", "Katak Manis Kendari", "Landak Lincah Lamongan", "Kelelawar Kece Kupang", "Gajah Ceria Garut", "Kucing Kocak Tegal", "Bebek Imut Tuban", "Sapi Lapar Solo", "Kuda Pintar Magelang", "Kelinci Ceria Kebumen", "Burung Hebat Jember", "Katak Pintar Kupang", "Capung Santuy Kendari", "Kepiting Hebat Kebumen", "Kambing Lucu Kudus", "Tikus Pintar Tangerang", "Cicak Santai Cimahi", "Ular Gabut Kendal", "Singa Santuy Ngawi", "Burung Happy Nabire", "Katak Ganteng Kendari", "Landak Pintar Lamongan", "Kelelawar Lucu Kupang", "Gajah Imut Garut", "Kucing Nyengir Kudus", "Bebek Santai Banyuwangi", "Sapi Bahagia Sidoarjo", "Kuda Imut Madiun", "Kelinci Pintar Nganjuk", "Capung Santuy Kudus", "Kepiting Hebat Seribu", "Kambing Pintar Kupang", "Tikus Hebat Tangerang", "Cicak Pintar Cimahi", "Ular Nyantai Kendal", "Singa Happy Ngawi", "Burung Pintar Nabire", "Katak Pintar Kendari", "Landak Lincah Lamongan", "Kelelawar Pintar Kupang", "Gajah Happy Garut", "Kucing Pintar Kudus", "Bebek Imut Tuban", "Sapi Bahagia Solo", "Kuda Pintar Magelang", "Kelinci Ceria Kebumen", "Burung Pintar Jember", "Katak Pintar Kupang", "Capung Santuy Kendari", "Kepiting Hebat Kebumen", "Kambing Pintar Kudus", "Tikus Hebat Tuban", "Cicak Pintar Cianjur", "Ular Bahagia Klaten", "Singa Happy Surabaya", "Kucing Pintar Kudus", "Bebek Ceria Balikpapan", "Sapi Happy Makassar", "Kuda Hebat Bandung", "Kelinci Ceria Bogor", "Burung Bahagia Tegal", "Katak Hebat Malang", "Capung Lucu Surabaya", "Kepiting Pintar Lombok", "Gajah Lucu Gorontalo", "Kerbau Santai Padang", "Burung Jenaka Jambi", "Ikan Lincah Aceh", "Tupai Centil Bekasi", "Macan Keren Medan", "Domba Imut Aceh", "Rusa Santai Lombok", "Badak Hebat Pekanbaru", "Zebra Lucu Bogor", "Koala Ngantuk Papua", "Panda Happy Jakarta", "Kangguru Goyang Banjarmasin", "Flamingo Keren Manado", "Pinguin Santai Bandung", "Elang Terbang Surabaya"];
            let irand = Math.floor(Math.random() * khodam.length);
            let nama = document.getElementById("nama").value;
            console.log(nama);
            let hasil = document.getElementById("hasil");

            if (nama == '') {
                hasil.innerHTML = 'Silahkan isi nama kamu';
                hasil.style.color = "red";
                hasil.style.border = "2px solid red";
                hasil.style.transform = "translateY(-10px)";
                setTimeout(() => {
                    hasil.style.transform = "translateY(0)";
                }, 300);
            } else {
                hasil.innerHTML = khodam[irand];
                hasil.style.color = "#007bff";
                hasil.style.border = "2px solid rgb(0, 0, 0)";
                hasil.style.transform = "scale(1.2)";
                setTimeout(() => {
                    hasil.style.transform = "scale(1)";
                }, 500);
            }
        }
