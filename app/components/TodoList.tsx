import React from "react";
import TodoItem, { TodoItemProps } from "./TodoItem";

interface TodoListProps {
  tasks: TodoItemProps[];
  onFilterChange: (filter: "all" | "done" | "todo") => void;
  currentFilter: "all" | "done" | "todo";
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({
  tasks,
  onFilterChange,
  currentFilter,
  onToggle,
  onEdit,
  onDelete,
}: TodoListProps) => {
  const renderTasks = () => {
    return tasks.map((task) => (
      <TodoItem
        key={task.id}
        task={task}
        onToggle={onToggle}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ));
  };

  return (
    <div>
      <h2 className="w-full h-20 text-center font-semibold text-4xl leading-[80px]">
        TodoList
      </h2>
      <div className="ml-auto mr-auto w-5/6 mb-12 flex justify-between">
        <button
          className={`rounded-xs w-[30%] leading-10 bg-[#3bb8ce] text-white cursor-pointer hover:opacity-80 ${
            currentFilter === "all" ? "opacity-80" : ""
          }`}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={`rounded-xs w-[30%] leading-10 bg-[#3bb8ce] text-white cursor-pointer hover:opacity-80 ${
            currentFilter === "done" ? "opacity-80" : ""
          }`}
          onClick={() => onFilterChange("done")}
        >
          Done
        </button>
        <button
          className={`rounded-xs w-[30%] leading-10 bg-[#3bb8ce] text-white cursor-pointer hover:opacity-80 ${
            currentFilter === "todo" ? "opacity-80" : ""
          }`}
          onClick={() => onFilterChange("todo")}
        >
          Todo
        </button>
      </div>
      <ul className="h-[400px] overflow-auto">{renderTasks()}</ul>
    </div>
  );
};

export default TodoList;
