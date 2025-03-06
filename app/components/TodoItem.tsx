import React, { useState } from "react";
import { FaTrash, FaPencilAlt, FaSave } from "react-icons/fa";

export interface TodoItemProps {
  id: string;
  title: string;
  isDone: boolean;
}

interface TodoItemComponentProps {
  task: TodoItemProps;
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({
  task,
  onToggle,
  onEdit,
  onDelete,
}: TodoItemComponentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(task.title);

  // Toggle trạng thái isDone
  const handleToggle = () => {
    onToggle(task.id);
  };

  // Chuyển sang chế độ chỉnh sửa
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Lưu title đã chỉnh sửa và thoát chế độ chỉnh sửa
  const handleSaveClick = () => {
    onEdit(task.id, editingTitle);
    setIsEditing(false);
  };

  // Xóa task
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="border border-neutral-400 rounded-xs ml-auto p-4 mb-5 mr-auto w-5/6 flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="cursor-pointer"
        />
        {isEditing ? (
          <input
            type="text"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
            className="ml-3 border-b border-neutral-400"
          />
        ) : (
          <span className={`ml-3 ${task.isDone ? "line-through" : ""}`}>
            {task.title}
          </span>
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <FaSave
            onClick={handleSaveClick}
            className="cursor-pointer hover:opacity-80 mr-3 ml-3"
          />
        ) : (
          <FaPencilAlt
            onClick={handleEditClick}
            className="cursor-pointer hover:opacity-80 mr-3 ml-3"
          />
        )}
        <FaTrash
          onClick={handleDelete}
          className="cursor-pointer hover:opacity-80"
        />
      </div>
    </div>
  );
};

export default TodoItem;
