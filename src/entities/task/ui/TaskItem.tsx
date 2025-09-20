import { useAppDispatch } from "../../../app/providers/redux-hooks";
import type { Task } from "../../../shared/types/task";

type Props = {
  task: Task;
  onDelete: (task: Task) => void;
};

export const TaskItem = (props: Props) => {
  const handleClick = () => props.onDelete(props.task);

  const dispatch = useAppDispatch();

  return (
    <div onClick={handleClick}>
      {props.task.title} {props.task.category}
    </div>
  );
};

