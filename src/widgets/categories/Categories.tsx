
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import { useAppDispatch, useAppSelector } from "../../app/providers/redux-hooks";
import { useState } from "react";
import { Modal } from "../../shared/ui/modal/Modal";
import { addCategory } from "../../entities/task/model/taskSlice";


export const Categories = () => {
    const categories = useAppSelector((state) => state.app.categories);
    const tasks = useAppSelector((state) => state.app.tasks);
    const dispatch = useAppDispatch();

    const getTask = (category: string) => tasks.find((e) => e.category === category);

    const filteredCategories = categories.filter((cat) => getTask(cat));

    const navigate = useNavigate();
    const handleClickBack = () => navigate(`/`);
    const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);

    function clickAddCategory() {
        setIsOpenAddCategory(true);
    }
    function clickCloseCategory() {
        setIsOpenAddCategory(false);
    }

    const [category, setCategory] = useState('');

    const handleClickAddCategory = () => {
        const action = addCategory(category);

        if (category !== '') {

            dispatch(action);
            setCategory('');
            clickCloseCategory();
        }
    }


    return <div>
        <div className="categories-button" >
            <button onClick={handleClickBack}>Назад</button>
            <button onClick={clickAddCategory}>Добавить категорию</button>
        </div>
        <Modal isOpen={isOpenAddCategory}>
            <div>
                <div className="modal-header">
                    Добавить категорию
                </div>
                <input
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    placeholder="Введите  категорию" />
            </div>
            <div className="modal-categories-button">
                <button onClick={handleClickAddCategory} disabled={category === ''}>сохранить</button>
                <button onClick={clickCloseCategory}>отмена</button>
            </div>
        </Modal>
        <div className="categories">
            {filteredCategories.map((e) => (
                <button onClick={() => navigate(`${e}`)}>{e}</button>
            ))}
        </div>
    </div>
}