import * as rl from 'readline-sync';
import {Manager} from "./src/Manager";
import {Student} from "./src/Student";
import {ChoiceMain} from "./enum/ChoiceMain";
import {ChoiceSub1} from "./enum/ChoiceSub_Find";
import {ChoiceSub2} from "./enum/ChoiceSub_Sort";


let manager = new Manager();
let choiceMain = -1;
let choiceSub1 = -1;
let choiceSub2 = -1;

function mainMenu() {
    console.log('');
    console.log(`==========  Menu  ==========`);
    console.log(`1. Them hoc sinh`);
    console.log(`2. Hien thi danh sach tat ca hoc sinh`);
    console.log(`3. Tim kiem hoc sinh`);
    console.log(`4. Sap xep danh sach hoc sinh`);
    console.log(`5. Xoa thong tin hoc sinh khoi danh sach`);
    console.log(`0. Thoat`);
}

function subMenuFind() {
    console.log('');
    console.log(`=== Tim kiem hoc sinh ===`);
    console.log(`1. Tim kiem theo ten`);
    console.log(`2. TIm kiem theo nhom`);
    console.log(`0. Tro ve`);
}

function subMenuSort() {
    console.log('');
    console.log(`=== Sap xep hoc sinh ===`);
    console.log(`1. Sap xep theo thu tu tang dan`);
    console.log(`2. Sap xep theo thu tu giam dan`);
    console.log(`0. Tro ve`);
}

function addFeature() {
    console.log('');
    console.log(`=== Them hoc sinh ===`);
    let name: string = rl.question(`Nhap ten hoc sinh: `);
    let age: string = rl.question(`Nhap tuoi hoc sinh: `);
    let group: string = rl.question(`Nhap nhom lop hoc sinh: `);
    let email: string = rl.question(`Nhap email hoc sinh: `);

    let student = new Student(name, age, group, email);
    manager.addInfo(student);
}

function showFeature() {
    console.log('');
    console.log(`=== Hien thi danh sach tat ca hoc sinh ===`);
    manager.showAllInfo();
}

function choiceSubMenuFind() {
    choiceSub1 = +rl.question(`Moi nhap lua chon: `);
    switch (choiceSub1) {
        case ChoiceSub1.FINDBYNAME:
            let findName = rl.question(`Nhap ten hoc sinh can tim kiem: `);
            let resultF = manager.findInfoByName(findName);
            if (resultF == null) {
                console.log(`Khong co hoc sinh nao o trong ten ${findName}`)
            } else console.table(resultF);
            break;
        case ChoiceSub1.FINDBYGROUP:
            let findByGroup = rl.question(`Nhap nhom hoc sinh can tim kiem: `);
            manager.findInfoByGroup(findByGroup);
            let resultG = manager.findInfoByName(findByGroup);
            if (resultG == null) {
                console.log(`Khong co hoc sinh nao o trong ten ${findByGroup}`)
            } else console.table(resultG);
            break;
        case ChoiceSub1.BACK:
            break;
        default:
            console.log(`Khong ton tai lua chon. Nhap lai!`);
            break;
    }
}

function choiceSubMenuSort() {
    choiceSub2 = +rl.question(`Moi nhap lua chon: `);
    switch (choiceSub2) {
        case ChoiceSub2.INCREASING:
            manager.sortByAgeIncrease();
            break;
        case ChoiceSub2.DECREASE:
            manager.sortByAgeDecrease();
            break;
        case ChoiceSub2.BACK:
            break;
        default:
            console.log(`Khong ton tai lua chon, moi nhap lai!`);
            break;
    }
}

function deleteFeature() {
    console.log('');
    console.log(`=== Xoa thong tin hoc sinh khoi danh sach ===`);
    manager.showAllInfo();
    let index = +rl.question(`Moi nhap STT hoc sinh muon xoa trong danh sach: `);
    manager.deleteInfo(index);
}

while (choiceMain !== 0) {
    mainMenu();
    choiceMain = +rl.question(`Moi ban nhap lua chon: `);
    switch (choiceMain) {
        case ChoiceMain.ADD:
            addFeature();
            break;
        case ChoiceMain.SHOW:
            showFeature();
            break;
        case ChoiceMain.FIND:
            subMenuFind();
            choiceSubMenuFind();
            break;
        case ChoiceMain.SORT:
            subMenuSort();
            choiceSubMenuSort();
            break;
        case ChoiceMain.DELETE:
            deleteFeature();
            break;
    }
}
