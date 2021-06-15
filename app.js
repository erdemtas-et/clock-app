let yourName = prompt("İsminizi giriniz..")

let date = new Date()

let hour = date.getHours()

let minute = date.getMinutes()

let second = date.getSeconds()

let day = date.getDay()



let dayString = ""
switch (day) {
    case 0:
        dayString = "Pazar"
        break;
    case 1:
        dayString = "Pazartesi"
        break;
    case 2:
        dayString = "Salı"
        break;
    case 3:
        dayString = "Çarşamba"
        break;
    case 4:
        dayString = "Perşembe"
        break;
    case 5:
        dayString = "Cuma"
        break;
    case 6:
        dayString = "Cumartesi"
        break;

    default:
        dayString = "Allah'ın unuttuğu gün"
        break;
}


setInterval(() => {
    if (second < 59) {
        second++

    } else {
        if (minute < 59) {
            minute++

            if (second.toString().length == 1) {
                second = "0" + second
            } else {
                second = 0
            }


        } else {



            if (hour < 23) {
                hour++
                minute = 0
            } else {
                hour = 0
            }
        }

    }




    if (second.toString().length == 1) {
        second = "0" + second
    } else if (hour.toString().length == 1) {
        hour = "0" + hour
    }






    document.querySelector("#message").innerHTML = `Hoşgeldin ${yourName}! <br> Bugün günlerden ${dayString}. <br>`

    document.querySelector("#hours-h1").innerHTML = hour
    document.querySelector("#minutes-h1").innerHTML = minute
    document.querySelector("#seconds-h1").innerHTML = second
}, 1000);