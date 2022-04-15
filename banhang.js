function doimucgia() {
    var arrGia = document.getElementsByName("gia");
    var obj = document.getElementById("mucgia");
    mucdangchon = obj.value;
    var i;
    for (i = 0; i < arrGia.length; i++) {
        arrGia = parseFloat(arrGia[i].innerText);
        if (gia < giadangchon) {
            arrGia[i].parentNode.style.display = "";
        } else {
            arrGia[i].parentNode.style.display = "none";
        }
    }
}

function time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = hour + ":" + minute + ":" + second;
    document.getElementById("time").innerHTML = "Thời gian bán hàng:" + time;
    setTimeout("time()", 1000);
}

function thongbao() {
    var alert;
    alert = setTimeout(thongtin, 1000);
}

function thongtin() {
    alert("Chào bạn đến với cửa hàng của chúng tôi");
}