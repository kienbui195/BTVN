import {IManager} from "./IManager";
import {Student} from "./Student";

export class Manager implements IManager {
    protected list: Student[] = [];

    addInfo(data: Student) {
        this.list.push(data);
    }

    showAllInfo() {
        console.table(this.list);
    }

    findInfoByName(data: string): any {
        let getIndex: number = 0;
        let flag = -1;
        let newarr: Student[] = [];
        this.list.forEach((value, index) => {
            if (value.getName() == data) {
                newarr.push(this.list[index]);
                flag++;
            }
        })
        if (flag == -1) {
            return null;
        } else {
            return newarr
        }
    }

    findInfoByGroup(data: string) {
        let getIndex: number = 0;
        let flag = -1;
        let newarr: Student[] = [];
        this.list.forEach((value, index) => {
            if (value.getGroup() == data) {
                newarr.push(this.list[index]);
                flag++;
            }
        })
        if (flag == -1) {
            return null;
        } else {
            return newarr;
        }
    }

    sortByAgeIncrease(): void {
        for (let i = 0; i < this.list.length; i++) {
            for (let j = i + 1; j < this.list.length - i - 1; j++) {
                if (+this.list[j].getAge() > +this.list[j+1].getAge()) {
                    this.swap(j);
                }
            }
        }
        this.showAllInfo();
    }

    sortByAgeDecrease(): void {
        for (let i = 0; i < this.list.length; i++) {
            for (let j = 0; j < this.list.length - i - 1; j++) {
                if (+this.list[j].getAge() < +this.list[j+1].getAge()) {
                    this.swap(j);
                }
            }
        }
        this.showAllInfo();
    }

    private swap(j: number) {
        let temp = this.list[j];
        this.list[j] = this.list[j + 1];
        this.list[j + 1] = temp;
    }

    deleteInfo(index: number): void {
        this.list.splice(index,1)
    }
}