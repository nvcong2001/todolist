"use client";
import React, { useState } from "react";

interface TodoInputProps {
  onSubmit: (text: string) => void;
}

const TodoInput = ({ onSubmit }: TodoInputProps) => {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    if (!text.trim()) return; // Kiểm tra chuỗi rỗng
    onSubmit(text);
    setText(""); // Reset input sau khi thêm task
  };

  return (
    <div className="border border-neutral-400 rounded-xs ml-auto mr-auto p-6 w-5/6">
      <input
        className="rounded-xs w-full leading-10 block mb-5 border border-neutral-400 pl-3"
        type="text"
        placeholder="new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="rounded-xs w-full leading-10 block bg-[#3bb8ce] text-white cursor-pointer hover:opacity-80"
        onClick={handleAddClick}
      >
        Add new task
      </button>
    </div>
  );
};

export default TodoInput;
