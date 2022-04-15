var slx = localStorage.getItem('soLanXem');
if (slx == null) slx = 0;
slx++;
localStorage.setItem('soLanXem', slx);

function time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = hour + ":" + minute + ":" + second;
    document.getElementById("time").innerHTML = "Bây giờ là:" + time;
    setTimeout("time()", 1000);
}