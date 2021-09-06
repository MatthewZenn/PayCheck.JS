var assert = require('assert');
var paycheck = require('../paycheck');

describe ('PayCheck', function() {
    describe('#Luhn()', function() {
        it('Should return Master Card', function() {
            assert.equal(paycheck.CheckCard("500000000000000", 1, 2), "MASTER CARD");
        });
        it('Should return VISA', function() {
            assert.equal(paycheck.CheckCard("400000000000000", 8, 2), "VISA");
        });
        it('Should return AMERICAN EXPRESS', function() {
            assert.equal(paycheck.CheckCard("340000000000000", 0, 2), "AMERICAN EXPRESS");
        });
        it('Should return DINERS CLUB', function() {
            assert.equal(paycheck.CheckCard("300000000000000", 6, 2), "DINERS CLUB");
        });
        it('Should return DISCOVER', function() {
            assert.equal(paycheck.CheckCard("670000000000000", 0, 2), "DISCOVER");
        });
    });
});