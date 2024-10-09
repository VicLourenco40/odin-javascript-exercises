const leapYears = function(year) {
    const isYearDivisibleByFour = !(year % 4);
    const isYearCentury = !(year % 100);
    const isYearDivisibleByFourHundred = !(year % 400);
    
    return isYearDivisibleByFour && (!isYearCentury || isYearDivisibleByFourHundred);
};

// Do not edit below this line
module.exports = leapYears;
