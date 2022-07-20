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
        console.table(this.list);
    }
    findInfoByName(data) {
        let getIndex = 0;
        let flag = -1;
        this.list.forEach((value, index) => {
            if (value.getName() == data) {
                console.table(this.list[index]);
                flag++;
            }
        });
        if (flag == -1) {
            console.log(`Khong co hoc sinh nao o trong ten ${data}`);
        }
    }
    findInfoByGroup(data) {
        let getIndex = 0;
        let flag = -1;
        this.list.forEach((value, index) => {
            if (value.getGroup() == data) {
                console.table(this.list[index]);
                flag++;
            }
        });
        if (flag == -1) {
            console.log(`Khong co hoc sinh nao o trong nhom ${data}`);
        }
    }
}
exports.Manager = Manager;
