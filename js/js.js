function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}

function c() {
  document.form.textView.value = "";
}

function del() {
  var x = document.form.textView.value;
  document.form.textView.value = x.substring(0, x.length - 1);
}

function equal() {
  var x = document.form.textView.value;
  if (x == "") {
    alert("masukan angka terlebih dahulu");
  }
  if (x) {
    document.form.textView.value = eval(document.form.textView.value);
  }
}

// const nilaiUjian = 90;
// const nilaiAbsensi = 90;

// const lulusUjian = nilaiUjian > 75;
// document.writeln("selamat anda " + lulusUjian);

// const lulusAbsensi = nilaiAbsensi > 75;
// document.writeln(lulusAbsensi);

// const lulus = lulusUjian && lulusAbsensi;
// document.writeln(lulus);

function data() {
  var nama = document.getElementById("nama_in").value;
  var m1 = document.getElementById("n1").value;
  var m2 = document.getElementById("n2").value;
  var m3 = document.getElementById("n3").value;
  var m4 = document.getElementById("n4").value;

  absen = (m1 / 14) * 0.1 * 100;
  tugas = 0.2 * m2;
  uts = 0.3 * m3;
  uas = 0.4 * m4;

  jumlah = absen + tugas + uts + uas;

  var grade;
  const masuk = confirm("Apakah Data dan Nilai sudah Benar?");

  if (jumlah >= 80) {
    grade = "A";
  } else if (jumlah >= 70) {
    grade = "B";
  } else if (jumlah >= 59) {
    grade = "C";
  } else if (jumlah >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  document.getElementById("nama_out").innerHTML = "Nama : " + nama;
  document.getElementById("absen_out").innerHTML = "Absen : " + m1;
  document.getElementById("tugas_out").innerHTML = "Tugas : " + m2;
  document.getElementById("uts_out").innerHTML = "Uts : " + m3;
  document.getElementById("uas_out").innerHTML = "Nama : " + m4;

  document.getElementById("note").innerHTML = "Note : ";
  document.getElementById("ket_absen").innerHTML = "absen 10% : " + absen;
  document.getElementById("ket_tugas").innerHTML = "Tugas 20% : " + tugas;
  document.getElementById("ket_uas").innerHTML = "UTS 30% : " + uts;
  document.getElementById("ket_uts").innerHTML = "UAS 40% : " + uas;

  document.getElementById("jumlah_out").innerHTML = "jumlah :" + jumlah;
  document.getElementById("grade_out").innerHTML = "Grade: " + grade;
}

//function waktu
function waktu() {
  document.getElementById("demo1").innerHTML = Date();
  document.getElementById("back1").innerHTML = history.back();
}

function html() {
  document.getElementById("demo").innerHTML = "Hello im taufik";
}

window.alert("selamat datang");

function a() {
  var tot = parseInt(document.getElementById("tot").value);
  var bunga = parseInt(document.getElementById("bunga").value);
  var durasi = parseInt(document.getElementById("durasi").value);

  var persen = (tot * bunga) / 100;
  var hasil = tot * persen * durasi;
  document.getElementById("hasil").innerHTML = hasil;
}
