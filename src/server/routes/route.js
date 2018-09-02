module.exports = [
    { url: /^\/api\/documents\/?$/, controller: "documentController", action: "documents" },
    { url: /^\/api\/login\/?$/, controller:"userController",action: "login" },
    { url: /^\/api\/register\/?$/, controller:"userController",action: "register"},
    { url: /^\/api\/document\/?$/, controller:"documentController",action: "document"},
    { url: /^\/api\/types\/?$/, controller:"documentController",action: "types"},
    { url: /^\/api\/addDocument\/?$/, controller:"documentController",action: "addDocument"},
    { url: /^\/api\/share\/?$/, controller:"documentController",action: "share"},
    { url: /^\/api\/share\/watch\/?$/, controller:"documentController",action: "watch"},
    { url: /^\/api\/export\/?$/, controller:"documentController",action: "export"},
    { url: /^\/api\/share\/get\/?$/, controller:"documentController",action: "getShare"},
    { url: /^\/api\/document\/delete\/?$/, controller:"documentController",action: "deleteDocument"},
    { url: /^\/api\/document\/rename\/?$/, controller:"documentController",action: "renameDocument"}
]