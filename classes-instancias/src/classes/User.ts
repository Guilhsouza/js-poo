class User {
    constructor(
        public fullName: string,
        public email: string,
        public password: string
    ) {
        this.fullName = fullName
        this.email = email
        this.password = password
    }

    login(email: string, password: string) {
        if (email === this.email && password === this.password) {
            return 'Login efetuado com sucesso!'
        }

        return 'Email ou senha inválidos!'
    }
}

const user1 = new User('Guilherme Souza', 'gui@gmail.com', '1234')

console.log(user1.login('gui@gmail.com', '1234'));
console.log(user1.login('gui@gmail.com', '123456')); 