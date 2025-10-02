import { useState } from "react";
import "./TaskList.css";
import { useNavigate } from "react-router-dom";
import { TaskListComponent } from "./TaskListComponent";
import { AddTasksModal } from "./AddTasksModal";

export const TaskList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickCategories = () => navigate("/categories");

  const clickOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  return (
    <div>
      <div className="header-button">
        <button onClick={clickOpenModal}>Добавить задачу</button>
        <button onClick={handleClickCategories}>Категории</button>
      </div>
      <TaskListComponent />
      <AddTasksModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};
