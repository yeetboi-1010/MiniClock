function displayTime () {
    var dateTime = new Date ();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session')

    

    if(hrs >= 12) {
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    hrs = hrs.toString().padStart(2, '0')
    min = min.toString().padStart(2, '0')
    sec = sec.toString().padStart(2, '0')

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 1000);