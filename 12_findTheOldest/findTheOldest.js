const getAge = function (person) {
    return (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => (
        getAge(oldest) < getAge(person) ? person : oldest
    ));
};

// Do not edit below this line
module.exports = findTheOldest;
