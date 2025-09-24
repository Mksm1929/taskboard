import {
  addCategory,
  addTask,
  setTask,
} from "../../../entities/task/model/taskSlice";
import type { Task } from "../../../shared/types/task";
import { useState } from "react";
import { Modal } from "../../../shared/ui/modal/Modal";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/redux-hooks";
import "./TaskList.css"
import { Field } from "../../../shared/ui/field/Field";
import { useNavigate } from "react-router-dom";
import { TaskListComponent } from "./TaskListComponent";



export const TaskList = () => {
  const task = useAppSelector((state) => state.app.task);
  const categories = useAppSelector((state) => state.app.categories);
  const id = useAppSelector((state) => state.app.id);

  const dispatch = useAppDispatch();

  const handleSetTask = (field: keyof Task, value: string) => {
    dispatch(setTask({ [field]: value }));
  };

  const [isOpen, setIsOpen] = useState(false);

  function clickOpenModal() {
    setIsOpen(true);
  }
  function clickCloseModal() {
    setIsOpen(false);
  }

  const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);

  function clickAddCategory() {
    setIsOpenAddCategory(true);
  }
  function clickCloseCategory() {
    setIsOpenAddCategory(false);
  }

  const handleAddTask = () => {
    const action = addTask({ ...task, id: id });
    if (task.title !== "") {

      dispatch(action);
      clickCloseModal();
    }
  };

  const navigate = useNavigate();
  const handleClickCategories = () => navigate("/categories");


  return (
    <div>
      <div className="header-button">
        <button onClick={clickOpenModal}>Добавить задачу</button>
        
        <button onClick={handleClickCategories}>Категории</button>
      </div>
      <TaskListComponent />

      <Modal isOpen={isOpen}>
        <div>
          <div className="modal-header">Добавление задачи</div>

          <div>

            <Field title="Название">
              <input
                value={task.title}
                onChange={(e) => handleSetTask("title", e.target.value)}
                placeholder="Введите  задачу"
              />
            </Field>
            <Field title="Категория">
              <select
                defaultValue={categories[0]}
                value={task.category}
                onChange={(e) => handleSetTask("category", e.target.value)}
              >
                {categories.map((e) => (
                  <option>{e}</option>
                ))}
              </select>
            </Field>

            <Field title="Описание">
              <textarea
                value={task.description}
                onChange={(e) => handleSetTask("description", e.target.value)}
              />
            </Field>

          </div>
          <div className="modal-buttons">
            <button disabled={task.title === ''} onClick={handleAddTask}>сохранить</button>
            <button onClick={clickCloseModal}>отмена</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

/* 
  
*/
