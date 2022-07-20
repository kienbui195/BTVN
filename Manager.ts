import {IManager} from "./IManager";
import {Student} from "./Student";

export class Manager implements IManager {
    protected list: Student[] = [];

    addInfo(data: Student) {
        this.list.push(data);
    }

    showAllInfo() {
        console.log(this.list);
    }

    findInfoByName(data: string) {
        let getIndex: number = 0;
        let flag = -1;
        this.list.forEach((value, index) => {
            if (value.getName() == data) {
                console.log(this.list[index]);
                flag++;
            }
        })
        if (flag == -1) {
            console.log(`Khong co hoc sinh nao o trong nhom ${data}`);
        }
    }

    findInfoByGroup(data: string) {
        let getIndex: number = 0;
        let flag = -1;
        this.list.forEach((value, index) => {
            if (value.getGroup() == data) {
                console.log(this.list[index]);
                flag++;
            }
        })
        if (flag == -1) {
            console.log(`Khong co hoc sinh nao o trong nhom ${data}`);
        }
    }
}