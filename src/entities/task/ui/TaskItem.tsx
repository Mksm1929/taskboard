
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/providers/redux-hooks";
import type { Task } from "../../../shared/types/task";
import { changeTaskStatus } from "../model/taskSlice";
import "./TaskItem.css";

type Props = {
  task: Task;
  onDelete: (task: Task) => void;
  category?: string;
};

export const TaskItem = (props: Props) => {
  const navigate = useNavigate();
  const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    props.onDelete(props.task);
  };

  const handleClickItem = () => navigate(`/${props.task.id}${props.category ? `?category=${props.category}` : ''}`);

  const dispatch = useAppDispatch();

  const handleChangeStatus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    dispatch(changeTaskStatus(props.task.id));
  }

  const isDone = props.task.isDone;
  const styleTaskItem = () => isDone ? 'rgba(0, 248, 95, 1)' : 'white';

  return (
    <div style={{ backgroundColor: styleTaskItem() }} onClick={handleClickItem} className="task-item">
      <div className="task-item-header">
        <div className="task-item-header-title">
          <div>{props.task.id}</div>
          <div>{props.task.title}</div>
        </div>
        <div onClick={handleDelete} className="task-item-header-close">
          <span>x</span>
        </div>
      </div>
      <div>{props.task.category}</div>
      <div className="task-item-checkbox">
        <input className="task-item-checkbox-pointer" onClick={handleChangeStatus} checked={isDone} type="checkbox"></input>
      </div>
    </div>
  );
};
