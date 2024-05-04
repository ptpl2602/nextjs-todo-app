'use client'

import { useState } from "react";
import { ITask } from "@/api/api"
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import ModalAddTask from "./Modal";

interface TaskProps {
    task: ITask
}

export default function Task ({task}: TaskProps) {
    const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
    const [modalDelete, setModalDelete] = useState<string>(task.id);
    const [editTask, setEditTask] = useState<string>(task.text);

    const handleClickModal = (open: boolean) => {
        setModalOpenEdit(open);
    }

  return (
    <tr key={task.id} className="bg-white dark:bg-gray-800">
      <td
        scope="row"
        className="w-9/12 px-6 py-2 font-medium text-balance text-gray-900 whitespace-nowrap dark:text-white"
      >
        {task.text}
      </td>
      <td className="flex justify-center items-center px-6 py-2">
        <button
          type="button"
          onClick={() => handleClickModal(true)}
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1 mb-2"
        >
          <BsPencilSquare />
          <span className="sr-only">Icon description</span>
        </button>
        <ModalAddTask modalOpen={modalOpenEdit} setModalOpen={() => handleClickModal(false)} taskValue={editTask} setTaskValue={setEditTask} isEditing={true} taskId={task.id}/>

        <button
          type="button"
          data-modal-target="authentication-modal" 
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1 mb-2"
        >
          <BsTrash3Fill className="text-[#050708]" />
          <span className="sr-only">Icon description</span>
        </button>
      </td>
    </tr>
  );
}