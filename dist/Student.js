"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, age, group, email) {
        this._name = name;
        this._age = age;
        this._group = group;
        this._email = email;
    }
    getName() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }
    getAge() {
        return this._age;
    }
    setAge(value) {
        this._age = value;
    }
    getGroup() {
        return this._group;
    }
    setGroup(value) {
        this._group = value;
    }
    getEmail() {
        return this._email;
    }
    setEmail(value) {
        this._email = value;
    }
}
exports.Student = Student;
