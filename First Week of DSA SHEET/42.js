// Print Weekday using Switch
function weekDay(week){

    switch (week) {
        case 1:
            console.log("Monday")
            break;
        case 2:
           console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
        case 6:
            console.log("Saturday")
        case 7:
            console.log("Sunday")
        default:
            break;
    }
}
weekDay(4)