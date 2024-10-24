const fibonacci = function(member) {
    if (member < 0) return 'OOPS';

    let sequence = [0, 1];

    for (let i = 2; i <= member; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence[member];
};

// Do not edit below this line
module.exports = fibonacci;
