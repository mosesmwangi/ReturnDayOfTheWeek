// var name = prompt("What is your name: ");


// var dayOfBirth = theDate.getDay;
// dayOfBirth = document.getElementById("submitButton").innerHTML;

var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var daysOfTheWk = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



function showDay() {

    var theYear = document.getElementById("yearOfBirth").value;
    var cc = parseInt(theYear.slice(0,2));
    var yy = parseInt(theYear.slice(2,4));
    // var theMonth = parseInt(document.getElementById("monthOfBirth").value);
    var mm = parseInt(document.getElementById("monthOfBirth").value);
    var dd = parseInt(document.getElementById("dayOfBirth").value);
    var maleName = document.getElementById("male");
    var femaleName = document.getElementById("female");

    var d = (((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7;

    var dayOfDate = Math.ceil(d);

    // if (theYear<1 || theYear>2020) {
    //     document.getElementById("putHere").innerHTML = "date invalid";
    // }
    // else if ( theMonth<1 || theMonth>12) {
    //     document.getElementById("putHere").innerHTML = "month invalid";ss
    // } else if (theDay<1 || theDay>31) {
    //     document.getElementById("putHere").innerHTML = "day invalid";
    // }


    if (maleName.checked==true) {
        document.getElementById("male").innerHTML = maleNames[dayOfDate] + " " + daysOfTheWk[dayOfDate];
    }
    else if (femaleName.checked==true) {
        document.getElementById("female").innerHTML = maleNames[dayOfDate] + " " + daysOfTheWk[dayOfDate];
    } else {
        alert("Okay");
    }

    
}

// var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// var daysOfTheWk = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// function showDay() {

//     var theYear = parseInt(document.getElementById("yearOfBirth").value);
//     var theMonth = parseInt(document.getElementById("monthOfBirth").value);
//     var theDay = parseInt(document.getElementById("dayOfBirth").value);
//     var maleName = document.getElementById("male");
//     var femaleName = document.getElementById("female");

//     var theDayIs = new Date(theYear + "/" + theMonth + "/" + theDay);

//     var dateGotten = theDayIs.getDay();

//     if (theYear<1900 || theYear>2020) {
//         alert("Date Invalid");
//     }
//     else if ( theMonth<1 || theMonth>12) {
//         alert("Month Invalid");
//     }
//     else if (theDay<1 || theDay>31) {
//         alert("Day Invalid");
//     }


//     if (maleName.checked==true) {
//         alert(maleNames[dateGotten] + " " + daysOfTheWk[dateGotten]);
//                                                                                                                                                                }
//     else if (femaleName.checked==true) {
//         alert(femaleNames[dateGotten] + " " + daysOfTheWk[dateGotten]);
//     }
// }