module.exports = {

    /**
     * the reverse presentation of a string
     * @param  {String} str
     * @return {String}
     */
     reverseString: function (str) {
        return str.split("").reverse().join("");
    },

    /**
     * is the input a String
     * @param  {String}  str
     * @return {String}
     */
     isString: function(str) {
        return (typeof str == "string")
    },

    /**
     * is the input a form of IP
     * @param  {String}  str
     * @return {Boolean}
     */
     isIp: function(str) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str)) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * replace all occurence of a substring with something else
     * @param  {String} str
     * @param  {String} search
     * @param  {String} replace
     * @return {String}
     */
     replaceAll: function(str, search, replace) {
        return str.split(search).join(replace);
    },

    /**
     * is the input a form of url
     * @param  {String}  str
     * @return {Boolean}
     */
     isUrl: function(str) {
        if (/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/.test(str)) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * getting the type of credit card the input would be
     * returns unknown if it's not a form of known credit card
     *
     * For a Visa credit card to be valid, it must start with a four and have a total of thirteen numeric characters or start with a four and have a total of sixteen numeric characters.
     *
     * For an American Express (AmEx) credit card to be valid, it must start thirty-four or thirty-seven and have fifteen total digits.
     *
     * For a Mastercard credit card to be valid, it must start with any valid number between fifty-one and fifty-five and have a total of sixteen digits.
     *
     * @param  {String} str
     * @return {String} visa|amex|mastercard|unknown
     */
     getCreditCardType: function(str) {
        str = this.replaceAll(str, "-", "");
        str = this.replaceAll(str, "/", "");
        str = this.replaceAll(str, " ", "");
        if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(str)) {
            return "visa";
        } else if (/^3[47][0-9]{13}$/.test(str)) {
            return "amex";
        } else if(/^5[1-5][0-9]{14}$/.test(str)) {
            return "mastercard";
        } else {
            return "unknown";
        }
    },

    /**
     * is the input a form of known credit card
     * uses this.getCreditCardType() to find the credit card type
     * @param  {String}  str
     * @return {Boolean}
     */
     isCreditCard: function(str) {
        if (this.getCreditCardType(str)!="unknown") {
            return true;
        } else {
            return false;
        }
    },

    /**
     * make a string into Camel Case
     * @param  {String} str
     * @return {String}
     */
    camelize: function(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    },

    isJson: function(str) {
    },

    isUUID: function(str) {
    },

    containsHTML: function(str) {
    },

    shuffle: function(str) {
    },

    stripHtml: function(str) {
    },

    prettify: function(str) {
    },


    wordCount: function(str) {
        return str.split(" ").length;
    },
}