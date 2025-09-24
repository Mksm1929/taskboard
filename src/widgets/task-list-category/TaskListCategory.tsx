import { useNavigate } from "react-router-dom";
import { TaskListComponent } from "../task-list/ui/TaskListComponent";

export const TaskListCategory = () => {

const navigate = useNavigate();
const handleClickBack = () => navigate('/categories')

    return <div>
        <button onClick={handleClickBack}>Назад</button>
        <TaskListComponent />
    </div>
};
