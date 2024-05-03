import { ITask } from "@/api/api"
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";

interface TaskProps {
    task: ITask
}

export default function Task ({task}: TaskProps) {
  return (
    <tr key={task.id} className="bg-white dark:bg-gray-800">
      <th
        scope="row"
        className="px-6 py-2 font-medium text-balance text-gray-900 whitespace-nowrap dark:text-white"
      >
        {task.text}
      </th>
      <td className="px-6 py-2">
        <button
          type="button"
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1 mb-2"
        >
          <BsPencilSquare />
          <span className="sr-only">Icon description</span>
        </button>
        <button
          type="button"
          className="text-[#050708] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1 mb-2"
        >
          <BsTrash3Fill className="text-[#050708]" />
          <span className="sr-only">Icon description</span>
        </button>
      </td>
    </tr>
  );
}