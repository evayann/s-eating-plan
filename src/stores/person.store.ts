import { writable, type Writable } from 'svelte/store';

export type Person = {
    id: number;
    name: string;
    linkWith?: number;
}

let personIdGenerator = 0;
export const personList: Writable<Person[]> = writable([]);

export function addPerson(personName?: string): void {
    const id = ++personIdGenerator;
    const name = personName ?? `Person ${id}`; 
    personList.update((personList) => [...personList, { id, name}])
}

export function changePersonName(personId: number, newName: string): void {
    personList.update((personList) => personList.map(person => person.id === personId ? {...person, name: newName} : person));
}

export function deletePersonById(personId: number): void {
    personList.update((personList) => personList.filter(person => person.id !== personId));
}