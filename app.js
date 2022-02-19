let yourName = prompt("Enter your name : ")

let date = new Date()

let hour = date.getHours()

let minute = date.getMinutes()

let second = date.getSeconds()

let day = date.getDay()



let dayString = ""
switch (day) {
    case 0:
        dayString = "Sunday"
        break;
    case 1:
        dayString = "Monday"
        break;
    case 2:
        dayString = "Tuesday"
        break;
    case 3:
        dayString = "Wednesday"
        break;
    case 4:
        dayString = "Thursday"
        break;
    case 5:
        dayString = "Friday"
        break;
    case 6:
        dayString = "Saturday"
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






    document.querySelector("#message").innerHTML = `Hey! ${yourName}! <br> Today is ${dayString}. <br>`

    document.querySelector("#hours-h1").innerHTML = hour
    document.querySelector("#minutes-h1").innerHTML = minute
    document.querySelector("#seconds-h1").innerHTML = second
}, 1000);