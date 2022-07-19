"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const Manager_1 = require("./Manager");
const Student_1 = require("./Student");
let list = new Manager_1.Manager();
let choice = -1;
let choose = -1;
var Choice;
(function (Choice) {
    Choice[Choice["ADD"] = 1] = "ADD";
    Choice[Choice["SHOW"] = 2] = "SHOW";
    Choice[Choice["FIND"] = 3] = "FIND";
})(Choice || (Choice = {}));
var Choose;
(function (Choose) {
    Choose[Choose["FINDBYNAME"] = 1] = "FINDBYNAME";
    Choose[Choose["FINDBYGROUP"] = 2] = "FINDBYGROUP";
    Choose[Choose["BACK"] = 0] = "BACK";
})(Choose || (Choose = {}));
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
function addFuture() {
    console.log('');
    console.log(`=== Them hoc sinh ===`);
    let name = rl.question(`Nhap ten hoc sinh:`);
    let age = rl.question(`Nhap tuoi hoc sinh:`);
    let group = rl.question(`Nhap nhom lop hoc sinh:`);
    let email = rl.question(`Nhap email hoc sinh:`);
    let student = new Student_1.Student(name, age, group, email);
    list.addInfo(student);
}
function showFuture() {
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
            addFuture();
            break;
        case Choice.SHOW:
            showFuture();
            break;
        case Choice.FIND:
            subMenu();
            chooseSubMenu();
            break;
    }
}
