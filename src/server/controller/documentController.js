const controller = require("../base/controller");

module.exports = class documentController extends controller {
    constructor(request, response) {
        super(request, response);
    }

    documents(){
        this.json([
            {id:1,name:"Chrome插件分享",type:1},
            {id:2,name:"Chrome插件分享",type:1},
            {id:3,name:"Chrome插件分享",type:1},
            {id:4,name:"Chrome插件分享",type:1},
            {id:5,name:"Chrome插件分享",type:1},
            {id:6,name:"Chrome插件分享",type:1},
            {id:7,name:"Chrome插件分享",type:1},
            {id:8,name:"Chrome插件分享",type:1},
            {id:1,name:"Chrome插件分享",type:1},
            {id:2,name:"Chrome插件分享",type:1},
            {id:3,name:"Chrome插件分享",type:1},
            {id:4,name:"Chrome插件分享",type:1},
            {id:5,name:"Chrome插件分享",type:1},
            {id:6,name:"Chrome插件分享",type:1},
            {id:7,name:"Chrome插件分享",type:1},
            {id:8,name:"Chrome插件分享",type:1}
        ])
    }
}