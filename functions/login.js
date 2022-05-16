

function login(body) {
    console.log(body);
    console.log(body.username);
    console.log(body.email);
    console.log(body.password);

    if ((body.username != null || body.email != null) && body.password != null) {
        return {
            "message": "luccessfully logged in",
            "username": body.username,
            "email": body.email,
            "password": body.password
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