function hitungBMI() {
    const beratBadan = parseFloat(document.getElementById("berat-badan").value);
    const tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);
    const hasil = beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));
    let status;

    try {
        if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
            throw "empty";
        }
    } catch (err) {
        document.getElementById("status").innerHTML = "Masukkan berat dan tinggi dengan benar.";

        document.getElementById("hasil").innerHTML = "";
        return;
    }

    if (hasil < 18.5) {
        status = "Kurang dari 18.5 - Berat badan kurang";
    } else if (hasil >= 18.5 && hasil <= 24.9) {
        status = "18.5 - 24.9 - Berat badan normal (ideal)";
    } else if (hasil >= 25 && hasil <= 29.9) {
        status = "25 - 29.9 - Sedikit kelebihan berat badan";
    } else if (hasil >= 30) {
        status = "Lebih dari 30 - Obesitas";
    }

    document.getElementById("status").innerHTML = status;
    document.getElementById("hasil").innerHTML = hasil.toFixed(2);
}