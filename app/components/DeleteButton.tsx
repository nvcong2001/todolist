"use client";
import React from "react";

interface DeleteButtonProps {
  onDeleteDone: () => void;
  onDeleteAll: () => void;
}

const DeleteButton = ({ onDeleteDone, onDeleteAll }: DeleteButtonProps) => {
  return (
    <div className="ml-auto mr-auto w-5/6 pb-11 pt-3 flex justify-between">
      <button
        className="rounded-xs w-[45%] leading-10 bg-red-700 text-white cursor-pointer"
        onClick={onDeleteDone}
      >
        Delete done tasks
      </button>
      <button
        className="rounded-xs w-[45%] leading-10 bg-red-700 text-white cursor-pointer"
        onClick={onDeleteAll}
      >
        Delete all tasks
      </button>
    </div>
  );
};

export default DeleteButton;
