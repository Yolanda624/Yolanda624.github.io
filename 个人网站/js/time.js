function showTime() {
    var nowtime = new Date();
    var year = nowtime.getFullYear();
    var month = nowtime.getMonth() + 1;
    var date = nowtime.getDate();
    document.getElementById("mytime").innerText = year + "年" + month + "月" + date + "日 " + nowtime.toLocaleTimeString();
}

setInterval("showTime()", 1000);