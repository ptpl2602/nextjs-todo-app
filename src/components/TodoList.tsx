import { ITask } from "@/api/api"
import Task from "./Task";

interface TodoListProps {
    tasks: ITask[]
}

export default function TodoList({tasks}: TodoListProps) {
    return (
        <div className="flex justify-center relative overflow-y-auto">
            <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-2xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-4/6 px-6 py-3 rounded-s-lg">
                            Task
                        </th>
                        <th scope="col" className="w-2/6 px-6 py-3 rounded-e-lg">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}