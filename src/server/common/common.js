const Base64 = require('js-base64').Base64;

var $ = {};

$.string = {
    secretkey: "1qaz2wsxE",
    decrypt: function (input) {
        var password = Base64.decode(Base64.decode(input));
        return password.substring(this.secretkey.length, password.length);
    },
    encrypt: function (input) {
        return Base64.encode(Base64.encode(this.secretkey + input));
    }
}

$.convert = {
    toFileSize: function (size) {
        var filesize = size;
        if (filesize < 1024) {
            return `${filesize} b`;
        }
        filesize = filesize / 1024;
        if (filesize < 1024) {
            return `${filesize} k`;
        }
        filesize = filesize / 1024;
        if (filesize < 1024) {
            return `${filesize} M`;
        }
        filesize = filesize / 1024;
        return `${filesize} G`;
    }
}

$.config = {
    getOpenTypeConfig: function (extname) {
        var config = oprnTypeConfig.find(item => {
            return item.extname === extname;
        });
        return config;
    }
}

$.guid = {
    index:0,
    _newId() {
        return Math.floor((1 + Math.random() + this.index) * 0x10000)
                 .toString(16)
                 .substring(1);
    },
    new() {
        let idNumber = 8;
        let index = 0
        this.index++;
        let guidId = "";
        for (var i = 0; i < idNumber; i++) {
            guidId += this._newId();
            if (i != idNumber - 1) {
                guidId += "-";
            }
        }
        return guidId;
    }
}

module.exports = $;