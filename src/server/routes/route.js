module.exports = [
    { url: /^\/documents\/?$/, controller: "documentController", action: "documents" },
    { url: /^\/login\/?$/, controller:"userController",action: "login" },
    { url: /^\/register\/?$/, controller:"userController",action: "register"},
    { url: /^\/document\/?$/, controller:"documentController",action: "document"},
    { url: /^\/types\/?$/, controller:"documentController",action: "types"},
    { url: /^\/addDocument\/?$/, controller:"documentController",action: "addDocument"}
]