function cek_khodam(){
    const khodam = ["Kucing", "Anjing", "Panda", "Koala", "Kelinci",
    "Tikus", "Rubah", "Sigung", "Berang-berang", "Platipus",
    "Hamster", "Tupai", "Burung Hantu", "Burung Pipit", "Burung Kenari",
    "Kuda Poni", "Domba", "Kambing", "Sapi", "Rusa",
    "Harimau", "Singa", "Cheetah", "Jaguar", "Leopard",
    "Serigala", "Beruang", "Banteng", "Bison", "Rakun",
    "Luwak", "Owa", "Simang", "Gibbon", "Lemur",
    "Walabi", "Kanguru", "Koala", "Kuskus", "Wombat",
    "Kura-Kura", "Penyu", "Komodo", "Iguana", "Gecko",
    "Bunglon", "Tokek", "Ular", "Buaya", "Alligator",
    "Katak", "Kodok", "Salamander", "Newt", "Capung",
    "Kumbang", "Kupu-Kupu", "Ngengat", "Lebah", "Tawon",
    "Semut", "Belalang", "Jangkrik", "Laba-Laba", "Kalajengking",
    "Bunglon", "Tokek", "Kadal", "Tokek", "Ular",
    "Burung Kakak Tua", "Burung Beo", "Burung Merak", "Burung Flamingo", "Burung Pelikan",
    "Burung Bangau", "Burung Albatros", "Penguin", "Burung Kasuari", "Burung Emu",
    "Kelelawar", "Babi", "Babi Hutan", "Simpanse", "Gorila",
    "Orangutan", "Monyet", "Babun", "Mandrill", "Makaka",
    "Gajah", "Badak", "Kuda Nil", "Kuda Zebra", "Jerapah"
    ];

    let irand = Math.floor(Math.random()*10);
    let nama = document.getElementById("nama").value;
    console.log(nama);
    let hasil = " " + khodam[irand];
    
    document.getElementById("hasil").innerHTML = hasil;
}