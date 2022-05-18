

function login(body) {
    if ((body.username != null || body.email != null) && body.password != null) {
        return {
            "message": "successfully logged in",
            "details": body
        }
    } else {
        return {
            "error": "login failed",
            "message": "please check credentials entered"
        }
    }
}

function logout() {
    return {
        "message": "successfully logged out"
    }
}

exports.login = login;
exports.logout = logout;