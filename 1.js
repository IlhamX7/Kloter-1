//Nomer 1
function tentukanOlahraga() {
    var kalori = prompt("Masukan jumlah kalori :", + kalori);
    if (kalori <= 500) {
      console.log("Jumlah kalori: " + kalori)
      console.log("Jenis Olahraga: Renang")
      console.log("Waktu Olahraga: " + ((kalori / 20) * 2) + "Menit")
    } else if (kalori <= 750) {
      console.log("Jumlah kalori: " + kalori)
      console.log("Jenis Olahraga: Badminton")
      console.log("Waktu Olahraga: " + ((kalori / 20) * 2) + "Menit")
    } else if (kalori >= 750) {
      console.log("Jumlah kalori: " + kalori)
      console.log("Jenis Olahraga: Lari") 
      console.log("Waktu Olahraga: " + ((kalori / 20) * 2) + "Menit")
    } else {
      return("Jumlah kalori tidak ada")
    }
  }
  tentukanOlahraga();
  