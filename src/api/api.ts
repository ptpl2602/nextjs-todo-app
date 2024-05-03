export interface ITask {
    id: string,
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

export const postData = async (newTask: ITask): Promise<ITask> => {
    const response = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    const todoList = await response.json();
    return todoList;
}