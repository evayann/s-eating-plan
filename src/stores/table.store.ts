import { writable, type Writable } from 'svelte/store';

export type Table = {
    id: number;
    numberOfSit: number;
}

let tableIdGenerator = 0;
export const tableList: Writable<Table[]> = writable([]);

export function addTable(numberOfSit: number): void {
    tableList.update((tableList) => [...tableList, { id: ++tableIdGenerator, numberOfSit}])
}

export function deleteTableById(id: number): void {
    tableList.update((tableList) => tableList.filter(table => table.id !== id));
}

export function addSitToTable(tableId: number): void {
    tableList.update(tableList => tableList.map(table => table.id === tableId ? { ...table, numberOfSit: table.numberOfSit + 1 } : table));
}

export function removeSitToTable(tableId: number): void {
    tableList.update(tableList => tableList.map(table => table.id === tableId ? { ...table, numberOfSit: Math.max(table.numberOfSit - 1, 0) } : table));
}

addTable(5)
addTable(4)