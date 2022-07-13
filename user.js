
class User{
    constructor(firstname, lastname, username, email, password, isAdmin, profilepicture){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.profilepicture = profilepicture;
    }
}

module.exports = User;