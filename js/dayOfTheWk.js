// // var name = prompt("What is your name: ");


// // var dayOfBirth = theDate.getDay;
// // dayOfBirth = document.getElementById("submitButton").innerHTML;

// // function showTheDay() {
// //     showDay();
// //     return false;
// // }

//    document.getElementById("putHere").innerHTML = "dogs, cats, snakes";

//    function showDay() {

//     // var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     // // var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//     // var daysOfTheWk = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   //  var theYear = document.getElementById("yearOfBirth").value;
//     // var cc = 19;
//     // var yy = 19;
// //     var cc = parseInt(theYear.slice(0,2));
// //     var yy = parseInt(theYear.slice(2,4));
//     // var theMonth = parseInt(document.getElementById("monthOfBirth").value);
//     // var mm = 12;
//     // parseInt(document.getElementById("monthOfBirth").value);
//     // var dd = 10;
//     // parseInt(document.getElementById("dayOfBirth").value);

//     // var maleName = document.getElementById("male").value;
//     // var femaleName = document.getElementById("female").value;

//     // var d = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;

//     // var dayBorn = Math.ceil(d);

//     document.getElementById("puHere").innerHTML = "d";

//     // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

//     // var dayOfDate = Math.ceil(d);

//     // if (theYear<1 || theYear>2020) {
//     //     document.getElementById("putHere").innerHTML = "date invalid";
//     // }
//     // else if ( theMonth<1 || theMonth>12) {
//     //     document.getElementById("putHere").innerHTML = "month invalid";ss
//     // } else if (theDay<1 || theDay>31) {
//     //     document.getElementById("putHere").innerHTML = "day invalid";
//     // }


//     // if (maleName.checked==true) {
//     //     document.getElementById("putHere").innerHTML = "Your name is" + maleNames[dayBorn] + " and you could have been born on " + daysOfTheWk[dayBorn];
//     // }
//     // // else if (femaleName.checked==true) {
//     // //     document.getElementById("putHere").innerHTML = "Your name is" + maleNames[dayOfDate] + " and you could have been born on " + daysOfTheWk[dayOfDate];
//     // // } 
//     // else {
//     //     document.getElementById("putHere").innerHTML = "Okay";
//        // alert("Okay");
//     //}

    
// }






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