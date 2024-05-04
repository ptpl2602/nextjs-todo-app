'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteData, ITask, putData } from "@/api/api"
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import ModalAddTask from "./Modal";

interface TaskProps {
    task: ITask
}

export default function Task ({task}: TaskProps) {
    const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
    const [isTaskDone, setIsTaskDone] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.text);
    const router = useRouter();

    const handleClickModal = (open: boolean) => {
        setModalOpenEdit(open);
    };

    const handleSubmitDeleteTask = async (id: string) => {
        await deleteData(id);
        router.refresh();
    };

    const handleDoneTask = async () => {
        const updateStatus = !isTaskDone;
        setIsTaskDone(updateStatus);

        try {
            await putData( {
                    id: task.id,
                    text: task.text,
                    isDone: updateStatus
                })
        } catch(error) {
            console.error("Failed to update task status:", error);
            setIsTaskDone(!updateStatus)
        }
    }

  return (
    <tr key={task.id} className="bg-white dark:bg-gray-800">
      <td
        scope="row"
        className="w-9/12 px-6 py-2 font-medium text-base text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex gap-2 items-center">
            <input
                type="checkbox"
                checked={isTaskDone}
                id={`check-done-${task.id}`}
                className="appearance-none w-4 h-4 border checkbox checkbox-xs mr-5 rounded-full bg-white border-black checked:bg-gray-800 checked:border-0 relative peer shrink-0"
                onChange={handleDoneTask}
            />
            <label htmlFor={`check-done-${task.id}`} className={`${isTaskDone ? "line-through" : ""}`}>
                {" "}{task.text}{" "}
            </label>
            <svg
                className="
                    absolute text-white
                    w-3.5 h-3.5 p-0.5
                    hidden peer-checked:block
                    pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>  
        </div>
      </td>
      <td className="flex justify-center items-center px-6 py-2">
        <button
          type="button"
          onClick={() => handleClickModal(true)}
          data-modal-target="authentication-modal"
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1"
        >
          <BsPencilSquare className="text-[#050708]" size={15} />
          <span className="sr-only">Icon description</span>
        </button>
        <ModalAddTask
          modalOpen={modalOpenEdit}
          setModalOpen={() => handleClickModal(false)}
          taskValue={editTask}
          setTaskValue={setEditTask}
          isEditing={true}
          taskId={task.id}
        />

        <button
          type="button"
          onClick={() => handleSubmitDeleteTask(task.id)}
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          <BsTrash3Fill className="text-[#050708]" size={15} />
          <span className="sr-only">Icon description</span>
        </button>
      </td>
    </tr>
  );
}