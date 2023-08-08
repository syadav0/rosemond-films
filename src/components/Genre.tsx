'use client'
import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface GenreProps {
  title: string;
}

const GenreCard: React.FC<GenreProps> = ({ title }) => {
  let [isOpen, setIsOpen] = useState(false);
  
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type='button' onClick={openModal}>
        <div className="flex flex-col-reverse h-96 group bg-slate-400 hover:bg-indigo-300 duration-300 object-cover">
          <div className='h-1/4 bg-slate-700 text-white text-3xl flex justify-center items-center
            group-hover:h-1/3 duration-300'>
            <p className="font-jost font-white">{title}</p>
          </div>
        </div>
      </button>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child as={Fragment} enter='ease-out duration-300' 
            enterFrom='opacity-0' enterTo='opacity-100'
            leave='ease-in duration-300' leaveFrom='opacity-100' 
            leaveTo='opacity-0'>
            
              <div className='fixed inset-0 bg-black bg-opacity-50'/>

          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto font-jost">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"enterTo="opacity-100 scale-100"
                leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" 
                leaveTo="opacity-0 scale-95">
                
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-slate-925 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                    {title}
                  </Dialog.Title>
                  <div className="mt-2 text-white">
                    Load data for this specific genre.
                  </div>

                  <div className="mt-4">
                    <button className="p-2 hover:bg-white hover:text-slate-925 ease-in-out duration-500 border-[2px] text-white" type="button" 
                    onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>
    </>
  );
};

export default GenreCard;

