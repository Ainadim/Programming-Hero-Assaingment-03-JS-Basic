// First problem - kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


// Second Problem - budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var price = ((watch * 50) + (phone * 100) + (laptop * 500));
    return price;
}


// Third Problem - hotelCost

function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var afterTenDays = remainingDays * 80;
        totalCost = firstTenDays + afterTenDays;
    } else {
        var firstTenDays = 10 * 100;
        var afterTenDays = 10 * 80;
        var remainingDays = days - 20;
        var afterTwentyDays = remainingDays * 50;
        totalCost = firstTenDays + afterTenDays + afterTwentyDays;
    }
    return totalCost;
}


// Fourth Problem - megaFriend

function megaFriend(friendName) {
    var allFriend = friendName[0];
    for (n = 0; n < friendName.length; n++) {
        if (friendName[n].length > allFriend.length) {
            allFriend = friendName[n];
        }
    }
    return allFriend;
}