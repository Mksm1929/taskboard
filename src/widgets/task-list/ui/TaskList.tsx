import {
  addTask,
  delTask,
  setTask,
} from "../../../entities/task/model/taskSlice";
import type { Task } from "../../../shared/types/task";
import { useRef, useState } from "react";
import { Modal } from "../../../shared/ui/modal/Modal";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/redux-hooks";
import { TaskItem } from "../../../entities/task/ui/TaskItem";

export const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const task = useAppSelector((state) => state.tasks.task);
  const categories = useAppSelector((state) => state.tasks.categories);
  const id = useRef(1);

  const dispatch = useAppDispatch();

  const handleSetTask = (field: keyof Task, value: string) => {
    dispatch(setTask({ [field]: value }));
  };

  const handleAddTask = () => {
    id.current++;

    const action = addTask({ ...task, id: id.current});

    dispatch(action);
  };

  const handleDeleteTask = (task: Task) => {
    const action = delTask(task.id);

    dispatch(action);
  };

  const [isOpen, setIsOpen] = useState(false);

  function clickOpenModal() {
    setIsOpen(true);
  }

  function clickCloseModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <TaskItem task={task} onDelete={handleDeleteTask} />
        ))}
      </div>
      <button onClick={clickOpenModal}>Добавить задачу</button>
      <ul>

      </ul>
      <Modal isOpen={isOpen} onClose={() => {}}>
        <div>
          <h1>{"Спланирую день!"}</h1>
          <div>
            <input
              value={task.title}
              onChange={(e) => handleSetTask("title", e.target.value)}
              placeholder="введите  задачу"
            />

            <select
              defaultValue={categories[0]}
              value={task.category}
              onChange={(e) => handleSetTask("category", e.target.value)}
            >
              {categories.map((e) => (
                <option>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={handleAddTask}>сохранить</button>
            <button onClick={clickCloseModal}>отмена</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

/* 
  Сделать добавление таски в модальном окне <Modal>
  На главном экране должны остаться только список задач и кнопка "Добавить задачу"
  В модальном окне должны быть поля для создания задача и кнопка "Сохранить" и "Отмена" - закрывает модальное окно

  Категорию переделать на выпадающий список, там должны быть "Дом", "Работа", "Гараж"
  использовать <select> и <option> 
  */
