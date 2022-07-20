import * as rl from 'readline-sync';
import {Manager} from "./Manager";
import {Student} from "./Student";

let list = new Manager();
let choice = -1;
let choose = -1;

enum Choice {
    ADD = 1,
    SHOW,
    FIND
}

enum Choose {
    FINDBYNAME = 1,
    FINDBYGROUP,
    BACK = 0
}

function mainMenu() {
    console.log('');
    console.log(`==========  Menu  ==========`);
    console.log(`1. Them hoc sinh`);
    console.log(`2. Hien thi danh sach tat ca hoc sinh`);
    console.log(`3. Tim kiem hoc sinh`);
    console.log(`0. Thoat`);
}

function subMenu() {
    console.log('');
    console.log(`=== Tim kiem hoc sinh ===`);
    console.log(`1. Tim kiem theo ten`);
    console.log(`2. TIm kiem theo nhom`);
    console.log(`0. Tro ve`);
}

function addFeature() {
    console.log('');
    console.log(`=== Them hoc sinh ===`);
    let name: string = rl.question(`Nhap ten hoc sinh:`);
    let age: string = rl.question(`Nhap tuoi hoc sinh:`);
    let group: string = rl.question(`Nhap nhom lop hoc sinh:`);
    let email: string = rl.question(`Nhap email hoc sinh:`);

    let student = new Student(name, age, group, email);
    list.addInfo(student);
}

function showFeature() {
    console.log('');
    console.log(`=== Hien thi danh sach tat ca hoc sinh ===`);
    list.showAllInfo();
}

function chooseSubMenu() {
    choose = +rl.question(`Moi nhap lua chon: `);
    switch (choose) {
        case Choose.FINDBYNAME:
            let findName = rl.question(`Nhap ten hoc sinh can tim kiem:`);
            list.findInfoByName(findName);
            break;
        case Choose.FINDBYGROUP:
            let findByGroup = rl.question(`Nhap nhom hoc sinh can tim kiem:`);
            list.findInfoByGroup(findByGroup);
            break;
        case Choose.BACK:
            break;
    }
}

while (choice !== 0) {
    mainMenu();
    choice = +rl.question(`Moi ban nhap lua chon: `);
    switch (choice) {
        case Choice.ADD:
            addFeature();
            break;
        case Choice.SHOW:
            showFeature();
            break;
        case Choice.FIND:
            subMenu();
            chooseSubMenu();
            break;
    }
}

