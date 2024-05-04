import { postData, putData } from "@/api/api";
import React from "react"
import { useRouter } from "next/navigation";
import { uuid } from "uuidv4";

interface ModalProps {
    modalOpen: boolean,
    setModalOpen: (open: boolean) => void,
    taskValue: string,
    setTaskValue: (open: string) => void,
    isEditing: boolean,
    taskId : string
}

export default function ModalAddTask({modalOpen, setModalOpen, taskValue, setTaskValue, isEditing, taskId} : ModalProps) {    
    
    const { uuid } = require('uuidv4');
    const router = useRouter();

    async function handleSubmitTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(isEditing && taskId) {
            await putData( {
                id: taskId,
                text: taskValue
            })
        } else {
            await postData( {
                id: uuid,
                text: taskValue
            })
            setTaskValue('');
        }

        setModalOpen(true);
        console.log(taskValue);
        router.refresh();
    }

    function handleCloseModal() {
        setModalOpen(false)
        if(!isEditing) {
            setTaskValue('')
        }
    }

    return (
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          modalOpen ? "flex" : "hidden"
        } fixed inset-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {isEditing ? "Update task" : "Add new task"}
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-3 md:p-5">
              <form className="space-x-3 flex items-center justify-between" onSubmit={handleSubmitTask}>
                <input
                  value={taskValue}
                  onChange={(e) => setTaskValue(e.target.value)}
                  type="text"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Ex: to cook for lunch"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
                >
                  <span className="font-semibold uppercase">
                    {isEditing ? "Update" : "Submit"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}