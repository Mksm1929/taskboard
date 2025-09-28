
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import { useAppDispatch, useAppSelector } from "../../app/providers/redux-hooks";
import { useState } from "react";
import { Modal } from "../../shared/ui/modal/Modal";
import { addCategory, setCategory } from "../../entities/category/model/actions";
import { Field } from "../../shared/ui/field/Field";



export const Categories = () => {
    const categories = useAppSelector((state) => state.categories.categories);
    const tasks = useAppSelector((state) => state.tasks.tasks);
    const category = useAppSelector((state) => state.categories.category);
    const dispatch = useAppDispatch();
    const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);
    const navigate = useNavigate();

    const getTask = (category: string) => tasks.find((e) => e.category === category);

    const filteredCategories = categories.filter((cat) => getTask(cat));

    const handleClickBack = () => navigate(`/`);

    function clickAddCategory() {
        setIsOpenAddCategory(true);
    }
    function clickCloseCategory() {
        setIsOpenAddCategory(false);
    }

    const handleClickAddCategory = () => {
        const action = addCategory(category);

        if (category !== '') {
            dispatch(action);
            clickCloseCategory();
        }
    }


    return <div>
        <div className="categories-button" >
            <button onClick={handleClickBack}>Назад</button>
            <button onClick={clickAddCategory}>Добавить категорию</button>
        </div>
        <Modal heading="Добавить категорию" onClose={clickCloseCategory} isOpen={isOpenAddCategory}>
            <div>
                <Field title="Категория">
                    <input
                        value={category}
                        onChange={e => dispatch(setCategory(e.target.value))}
                        placeholder="Введите  категорию" />
                </Field>
            </div>
            <div className="modal-categories-button">
                <button onClick={handleClickAddCategory} disabled={category === ''}>сохранить</button>
                <button onClick={clickCloseCategory}>отмена</button>
            </div>
        </Modal>
        <div className="categories">
            {filteredCategories.map((e) => (
                <button key={'key'} onClick={() => navigate(`${e}`)}>{e}</button>
            ))}
        </div>
    </div>
}
