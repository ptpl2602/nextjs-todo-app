import { ITask } from "@/api/api"
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import { useState } from "react";

interface TaskProps {
    task: ITask
}

export default function Task ({task}: TaskProps) {
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<string>(task.id);

  return (
    <tr key={task.id} className="bg-white dark:bg-gray-800">
      <td
        scope="row"
        className="w-9/12 px-6 py-2 font-medium text-balance text-gray-900 whitespace-nowrap dark:text-white"
      >
        {task.text}
      </td>
      <td className="px-6 py-2 flex items-center justify-center">
        <button
          type="button"
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1 mb-2"
        >
          <BsPencilSquare className="text-[#050708]" size={18} />
          <span className="sr-only">Icon description</span>
        </button>
        <button
          type="button"
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1 mb-2"
        >
          <BsTrash3Fill className="text-[#050708]" size={18}/>
          <span className="sr-only">Icon description</span>
        </button>
      </td>
    </tr>
  );
}