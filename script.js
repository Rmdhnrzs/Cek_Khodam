function cek_khodam() {
            const khodam = ["Kucing Garong Bandung", "Ayam Joget Cirebon", "Bebek Ngakak Tegal", "Belalang Ngopi Bogor", "Kambing Narsis Solo", "Tikus Nge-gym Batam", "Cicak Selow Cilacap", "Ular Plesetan Lampung", "Kelelawar Baper Malang", "Singa Goyang Jogja"];
            let irand = Math.floor(Math.random() * khodam.length);
            let nama = document.getElementById("nama").value;
            let hasil = document.getElementById("hasil");

            if (nama == '') {
                hasil.innerHTML = 'Silahkan isi nama kamu';
                hasil.style.color = "red";
                hasil.style.border = "2px solid red";
            } else {
                hasil.innerHTML = khodam[irand];
                hasil.style.color = "#007bff";
                hasil.style.border = "2px solid rgb(0, 0, 0)";
                // Tampilkan modal
                const myModal = new bootstrap.Modal(document.getElementById('khodamModal'));
                myModal.show();
            }
        }

        function resetInput() {
            document.getElementById("nama").value = '';
        }
