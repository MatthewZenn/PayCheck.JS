var assert = require('assert');
var paycheck = require('../paycheck');

describe ('PayCheck', function() {
    describe('#GetCardVendor()', function() {
        it('Should return Master Card', function() {
            assert.equal(paycheck.GetCardVendor("500000000000000"), "MASTER CARD");
        });
        it('Should return VISA', function() {
            assert.equal(paycheck.GetCardVendor("400000000000000"), "VISA");
        });
        it('Should return AMERICAN EXPRESS', function() {
            assert.equal(paycheck.GetCardVendor("340000000000000"), "AMERICAN EXPRESS");
        });
        it('Should return DINERS CLUB', function() {
            assert.equal(paycheck.GetCardVendor("300000000000000"), "DINERS CLUB");
        });
        it('Should return DISCOVER', function() {
            assert.equal(paycheck.GetCardVendor("670000000000000"), "DISCOVER");
        });
    });

    describe('#ChecksumPasses()', function() {
        it('Should return true', function() {
            assert.equal(paycheck.ChecksumPasses("0200000008"), true);
        });
    });

    describe('#IsValidLength()', function() {
        it('Should return false on invalid length(15)', function() {
            assert.equal(paycheck.IsValidLength("000000000000000"), false);
        });
        it('Should return true on valid length(14)', function() {
            assert.equal(paycheck.IsValidLength("00000000000000"), true);
        });
        it('Should return true on valid length(16)', function() {
            assert.equal(paycheck.IsValidLength("0000000000000000"), true);
        });
        it('Should return false on invalid length(13)', function() {
            assert.equal(paycheck.IsValidLength("0000000000000"), false);
        });
        it('Should return false on invalid length(17)', function() {
            assert.equal(paycheck.IsValidLength("00000000000000000"), false);
        });
    });
});