export class Student {
    private _name: string;
    private _age: string;
    private _group: string;
    private _email: string;

    constructor(name: string, age: string, group: string, email: string) {
        this._name = name;
        this._age = age;
        this._group = group;
        this._email = email;
    }


    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getAge(): string {
        return this._age;
    }

    setAge(value: string) {
        this._age = value;
    }

    getGroup(): string {
        return this._group;
    }

    setGroup(value: string) {
        this._group = value;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(value: string) {
        this._email = value;
    }
}