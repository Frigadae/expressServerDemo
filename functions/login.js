

function login(body) {
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
            "message": "login failed"
        }
    }
}

exports.login = login;