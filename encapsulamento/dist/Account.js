"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Account_password, _Account_balance;
class Account {
    constructor(user) {
        this.user = user;
        _Account_password.set(this, void 0);
        _Account_balance.set(this, 0);
        this.user.email = user.email;
        __classPrivateFieldSet(this, _Account_password, user.password, "f");
    }
    getBalance(email, password) {
        if (email === this.user.email && password === this.user.password) {
            return __classPrivateFieldGet(this, _Account_balance, "f");
        }
    }
}
_Account_password = new WeakMap(), _Account_balance = new WeakMap();
const user = {
    email: 'gui@gmail.com',
    password: '12345'
};
const myAccount = new Account(user);
console.log(myAccount);
console.log(myAccount.getBalance('gui@gmail.com', '12345'));
