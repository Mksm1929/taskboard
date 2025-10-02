
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/providers/redux-hooks";
import type { Task } from "../../../shared/types/task";
import { changeTaskStatus } from "../model/actions";
import "./TaskItem.css";
import { Modal } from "../../../shared/ui/modal/Modal";
import { useState } from "react";


type Props = {
  task: Task;
  onDelete: (task: Task) => void;
  category?: string;
};


export const TaskItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const clickOpenModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  const clickCloseModal = () => setIsOpen(false);

  const navigate = useNavigate();

  const handleDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    props.onDelete(props.task);
  };

  const handleClickItem = () => navigate(`/${props.task.id}${props.category ? `?category=${props.category}` : ''}`);

  const handleChangeStatus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(changeTaskStatus(props.task.id));
  }

  const isDone = props.task.isDone;
  const displayTaskItem = `task-item ${isDone ? 'task-item-done': ''} `;


  return (
    <div onClick={handleClickItem} className={displayTaskItem}>
      <div className="task-item-header">
        <div className="task-item-header-title">
          {`${props.task.id}    ${props.task.title}`}
        </div>
        <div onClick={clickOpenModal} className="task-item-header-close">
          <span>×</span>
        </div>
        <Modal heading="Вы действительно хотите удалить задачу?" onClose={clickCloseModal} isOpen={isOpen}>
          <div className="modal-button">
            <button onClick={handleDelete}>Да</button>
            <button onClick={clickCloseModal}>Нет</button>
          </div>
        </Modal>
      </div>
      <div>{props.task.category}</div>
      <div className="task-item-checkbox">
        <input className="task-item-checkbox-pointer" onClick={handleChangeStatus} defaultChecked={isDone} type="checkbox"></input>
      </div>
    </div>
  );
};
