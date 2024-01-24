class Account {
    #password: string;
    #balance: number = 0;

    constructor(
        public user: { email: string, password: string }
    ) {
        this.user.email = user.email
        this.#password = user.password
    }

    getBalance(email: string, password: string) {
        if (email === this.user.email && password === this.user.password) {
            return this.#balance
        }
    }
}

const user = {
    email: 'gui@gmail.com',
    password: '12345'
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance('gui@gmail.com', '12345'));


