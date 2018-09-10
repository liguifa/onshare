module.exports = {
    port: 3001,
    static: {
        path:`${__dirname}/../view`,
        args: {
            dotfiles: "ignore",
            etag: false,
            extensions: ['html', "js", "css", "png", "ico", "gif", "jpg", "bmp", "jpeg"],
            index: false,
            maxAge: '0d',
            redirect: true,
            setHeaders: (res, path, stat) => {
                res.set("x-timestamp", Date.now());
            }
        }
    },
    socket:{
        port:3002
    },
    db: {
        host: "47.100.13.189",
        user: "root",
        password: "1qaz2wsxE",
        database: "onshare",
        connectTimeout: 1000000
    },
    middlewares:[
        "express-cookie",
        "express-session",
    ],
    plugins:[
        "express-static",
        "express-http",
        "express-socket",
        "express-router",
        "express-error",
        "express-folder",
        "express-initdb"
    ],
    cors:"http://localhost:8081",
    folders:[
        "./doc",
        "./tmp"
    ],
    init:`${__dirname}/../init`,
    routes:require("../routes/route"),
    uploadDir: "./src/view/upload",
    anonymous: [
        /\.js/,
        /\.png/,
        /\.gif/,
        /\.css/,
        /verificationCode/,
        /checkVerificationCode/,
        /login/
    ]
}