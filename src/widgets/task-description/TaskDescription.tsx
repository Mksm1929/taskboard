import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../app/providers/redux-hooks";
import "./TaskDescription.css";


export const TaskDescription = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const tasks = useAppSelector((state) => state.app.tasks);
    const task = tasks.find((e) => e.id === Number(id));
    const category = searchParams.get('category'); // 'Дом' || null
    const handleClickBack = () => category ? navigate(`/categories/${category}`) : navigate('/');

    return <div className="task">
        <button onClick={handleClickBack}>Назад</button>
        <div className="task-description">
            <div>
                <span>{task?.category}</span>
            </div>
            <div>
                <span>{task?.title}</span>
            </div>
            <span>{task?.description}</span>
        </div>
    </div>
}
