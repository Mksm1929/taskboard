import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/providers/redux-hooks";
import { delTask } from "../../../entities/task/model/actions";
import { TaskItem } from "../../../entities/task/ui/TaskItem";
import type { Task } from "../../../shared/types/task";
import "./TaskList.css";


export const TaskListComponent = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    const { category } = useParams();

    const filteredTasks = tasks.filter((e) => e.category === category);

    const dispatch = useAppDispatch();

    const handleDeleteTask = (task: Task) => {
        const action = delTask(task.id);

        dispatch(action);
    };

    return <div className="task-list">
        {(category ? filteredTasks : tasks).map((task) => (
            <TaskItem key={'key1'} category={category} task={task} onDelete={handleDeleteTask} />
        ))}
    </div>
}
