export interface ITask {
    id: number,
    text: string
}

const baseUrl = 'http://localhost:3001';

export const getData = async (): Promise<ITask[]> => {
    const response = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'});
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const todoList = await response.json();
    return todoList;
};