var _ = require("underscore");

module.exports = {
    add: function() {
        var sum = _.reduce(arguments, function(memo, numb) {
            return memo + numb;
        }, 0);
        return sum;
    },
    multiply: function() {
         var multiplication = _.reduce(arguments, function(memo, numb) {
             memo -= 0;
             console.log('this is a change')
             if (isNaN(numb)) { throw "not a number [ALSO A CHANGE]"}
             return memo * numb;
        }, 1);
        return multiplication;
    }
}
