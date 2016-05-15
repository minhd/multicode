var assert = require('chai').assert;
var su = require("./StringUtils.js");

describe('reverseString', function() {
    it('should be reversed of abc', function () {
        assert.equal("cba", su.reverseString("abc"));
    });
    it("should be reversed of Hello World", function() {
        assert.equal("Hello World", su.reverseString("dlroW olleH"));
    });
    it("should be reversed of !@#@#$#%@#", function() {
        assert.equal("!@#@#$#%@#", su.reverseString("#@%#$#@#@!"));
    });
});

describe("isString", function() {
    it("a string should be a string", function() {
        assert.equal(true, su.isString("asdasdfasdf"));
    });
    it("boolean should not be a string", function() {
        assert.equal(false, su.isString(false));
        assert.equal(false, su.isString(true));
    });
    it("array should not be a string", function() {
        assert.equal(false, su.isString([]));
        assert.equal(false, su.isString([1,2,3]));
    });
});

describe("isIp", function() {
    it("127.0.0.1 should be an ip", function() {
        assert.equal(true, su.isIp("127.0.0.1"));
    });
    it("IP must be IP", function() {
        assert.equal(true, su.isIp("115.42.150.37"));
        assert.equal(true, su.isIp("115.42.150.38"));
        assert.equal(true, su.isIp("115.42.150.50"));
        assert.equal(true, su.isIp("192.168.0.1"));
        assert.equal(true, su.isIp("110.234.52.124"));
    });
    it("Must not be IP", function() {
        assert.equal(false, su.isIp("210.110"));
        //must have 4 octets
        assert.equal(false, su.isIp("255"));
        //must have 4 octets
        assert.equal(false, su.isIp("y.y.y.y"));
        //only digits are allowed
        assert.equal(false, su.isIp("255.0.0.y"));
        //only digits are allowed
        assert.equal(false, su.isIp("666.10.10.20"));
        //octet number must be between [0-255]
        assert.equal(false, su.isIp("4444.11.11.11"));
        //octet number must be between [0-255]
        assert.equal(false, su.isIp("33.3333.33.3"));
        //octet number must be between [0-255]
    });
});

describe("isUrl", function() {
    it("must be Url", function() {
        assert.equal(true, su.isUrl("http://google.com"));
    });

});

describe("creditCard", function() {
    it("must be credit card", function() {
        assert.equal(true, su.isCreditCard("4111 1111 1111 1111"));
        assert.equal(true, su.isCreditCard("4111-1111-1111-1111"));
        assert.equal(true, su.isCreditCard("4111111111111111"));
    });
});

describe("camelize", function() {
    it("must be camelized correctly", function() {
        assert.equal("equipmentClassName", su.camelize("equipment class name"));
        assert.equal("equipmentClassName", su.camelize("equipment class Name"));
        assert.equal("equipmentClassName", su.camelize("equipment Class name"));
        assert.equal("equipmentClassName", su.camelize("equipment Class Name"));
        assert.equal("equipmentClassName", su.camelize("Equipment class name"));
        assert.equal("equipmentClassName", su.camelize("Equipment class Name"));
        assert.equal("equipmentClassName", su.camelize("Equipment Class name"));
        assert.equal("equipmentClassName", su.camelize("Equipment Class Name"));
        assert.equal("equipmentClassName", su.camelize("equipment className"));
        assert.equal("equipmentClassName", su.camelize("equipment ClassName"));
        assert.equal("equipmentClassName", su.camelize("Equipment ClassName"));
        assert.equal("equipmentClassName", su.camelize("equipmentClass name"));
        assert.equal("equipmentClassName", su.camelize("equipmentClass Name"));
        assert.equal("equipmentClassName", su.camelize("EquipmentClass Name"));
    })
});