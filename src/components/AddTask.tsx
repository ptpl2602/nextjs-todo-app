'use client'

import { useState } from 'react';
import ModalAddTask from './Modal';

export default function AddTask() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');

    function handleClickModal(open: boolean) {
        setModalOpen(open);
    }

    return (
        <>
            <div className='mb-2'>
                <button type="button" onClick={() => handleClickModal(true)} data-modal-target="authentication-modal" className="w-64 inline-flex justify-center items-center text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                    <span className="font-semibold">Add new task</span>
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>

            <ModalAddTask modalOpen={modalOpen} setModalOpen={() => handleClickModal(false)} taskValue={newTaskValue} setTaskValue={setNewTaskValue} isEditing={false} taskId={''}/>
        </>
    )
}