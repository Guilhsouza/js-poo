"use strict";
class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
    login(email, password) {
        if (email === this.email && password === this.password) {
            return 'Login efetuado com sucesso!';
        }
        return 'Email ou senha inválidos!';
    }
}
const user1 = new User('Guilherme Souza', 'gui@gmail.com', '1234');
console.log(user1.login('gui@gmail.com', '1234'));
console.log(user1.login('gui@gmail.com', '123456'));
