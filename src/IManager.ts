export interface IManager {
    addInfo(data: any): void;
    showAllInfo(): void;
    findInfoByName(data: string): void;
    findInfoByGroup(data: string): void;
    sortByAgeIncrease(): void;
    sortByAgeDecrease(): void;
}