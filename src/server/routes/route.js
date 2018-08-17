module.exports = [
    { url: /^\/documents\/?$/, controller: "documentController", action: "documents" },
    { url: /^\/login\/?$/, controller:"userController",action: "login" }
]