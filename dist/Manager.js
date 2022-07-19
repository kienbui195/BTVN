"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
class Manager {
    constructor() {
        this.list = [];
    }
    addInfo(data) {
        this.list.push(data);
    }
    showAllInfo() {
        console.log(this.list);
    }
    findInfoByName(data) {
        let getIndex = 0;
        this.list.forEach((value, index) => {
            if (value.getName() == data) {
                console.log(this.list[index]);
            }
            else {
                console.log(`Khong co hoc sinh nao ten ${data}`);
            }
        });
    }
    findInfoByGroup(data) {
        let getIndex = 0;
        this.list.forEach((value, index) => {
            if (value.getGroup() == data) {
                console.log(this.list[index]);
            }
            else
                console.log(`Khong co hoc sinh nao o trong nhom ${data}`);
        });
    }
}
exports.Manager = Manager;
