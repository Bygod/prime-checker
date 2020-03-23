
module.exports = {
    getDivisors: function (number) {
        let divisors = [1]
        for (let i=2; i<=number/2; i++) {
            if (number % i === 0) {
                divisors.push(i)
            }
        }
        if (number !== 1) divisors.push(number)
        return divisors;
    },

    isPrime: function (array) {
        return array.length == 2
    }

}