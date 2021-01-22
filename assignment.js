// Problem-1 : Kilometer To Meter

    function kilometerToMeter(kilometer) {
        var meter = kilometer * 1000;
        return meter;
    }

    var negativeMeasurement = kilometerToMeter(-9.5);
    console.log(negativeMeasurement); 
    // Note : Measurements can never be nagative.

    var absoluteMeasurement = Math.abs(negativeMeasurement);
    console.log(absoluteMeasurement);



    
// Problem-2 : Budget Calculator 

function budgetCalculator(watch,mobile,laptop){
    var totalPrice_Watch = watch * 50;
    var totalPrice_Mobile = mobile * 100;
    var totalPrice_Laptop = laptop * 500; 
    var totalBudget = totalPrice_Watch + totalPrice_Mobile + totalPrice_Laptop;
    return totalBudget;
}



// Problem-3 : Hotel Cost

  function hotelCost(totalDay) {
    var hotelRent = 0;
    if(totalDay <=10) {
        hotelRent = totalDay * 100;
    }
    else if(totalDay <=20){
        var first_10_days = 10 * 100;
        var remaining = totalDay - 10;
        var second_10_days = remaining * 80;
        hotelRent = first_10_days + second_10_days;
    }
    else{
        var first_10_days = 10 * 100;
        var second_10_days = 10 * 80;
        var remaining = totalDay - 20;
        var up_20_days = remaining * 50;
        hotelRent = first_10_days + second_10_days + up_20_days;
    }

    return hotelRent;
  }



// Problem-4 : Mega Friend

function megaFriend(friendNameArray){
    var friendLongestName =[];
    for (var i = 0; i < friendNameArray.length; i++) {
        if (friendNameArray[i].length > friendLongestName.length) {
            friendLongestName = friendNameArray[i];
        }
    }
    return friendLongestName;
}
