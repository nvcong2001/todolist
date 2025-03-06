"use client";
import React, { useState } from "react";
import taskList from "./Data"; // file Data chứa danh sách task ban đầu
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import DeleteButton from "./DeleteButton";

const TodoForm = () => {
  // Khởi tạo tasks từ dữ liệu trong file Data
  const [tasks, setTasks] = useState(taskList);
  // State lưu bộ lọc: 'all' (tất cả), 'done' (hoàn thành), 'todo' (chưa hoàn thành)
  const [filter, setFilter] = useState<"all" | "done" | "todo">("all");

  // Callback thêm task mới
  const handleAddTask = (taskTitle: string) => {
    if (!taskTitle.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), title: taskTitle, isDone: false },
    ]);
  };

  // Callback thay đổi bộ lọc
  const handleFilterChange = (newFilter: "all" | "done" | "todo") => {
    setFilter(newFilter);
  };

  const handleToggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  // Chỉnh sửa title của task
  const handleEditTask = (id: string, newTitle: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  // Xóa một task
  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Xóa tất cả task
  const handleDeleteAll = () => {
    setTasks([]);
  };

  // Xóa các task đã hoàn thành (isDone là true)
  const handleDeleteDone = () => {
    setTasks(tasks.filter((task) => !task.isDone));
  };

  // Tính toán danh sách task cần hiển thị dựa trên bộ lọc
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.isDone;
    if (filter === "todo") return !task.isDone;
    return true;
  });

  return (
    <div className="bg-white max-w-1/2 ml-auto mr-auto">
      <h2 className="w-full h-20 text-center font-semibold text-4xl leading-[80px]">
        TodoInput
      </h2>
      {/* Truyền callback thêm task */}
      <TodoInput onSubmit={handleAddTask} />
      {/* Truyền danh sách task đã lọc và callback thay đổi bộ lọc */}
      <TodoList
        tasks={filteredTasks}
        onFilterChange={handleFilterChange}
        currentFilter={filter}
        onToggle={handleToggleTask}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
      <DeleteButton
        onDeleteDone={handleDeleteDone}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  );
};

export default TodoForm;
