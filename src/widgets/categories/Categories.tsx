import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/providers/redux-hooks";
import { useState } from "react";
import { AddCategoryModal } from "./AddCategoryModal";
import "./Categories.css";

export const Categories = () => {
  const categories = useAppSelector((state) => state.categories.categories);
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  const getTask = (category: string) =>
    tasks.find((e) => e.category === category);

  const filteredCategories = categories.filter((cat) => getTask(cat));

  const handleClickBack = () => navigate(`/`);

  const handleCloseModal = () => setIsOpenAddCategory(false);

  function clickAddCategory() {
    setIsOpenAddCategory(true);
  }

  return (
    <div>
      <div className="categories-header">
        <div className="categories-header-button">
          <button onClick={handleClickBack}>Назад</button>
          <button onClick={clickAddCategory}>Добавить категорию</button>
        </div>
        <div className="categories-header-checkbox">
          Все категории
          <input
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
            type="checkbox"
          ></input>
        </div>
      </div>
      <AddCategoryModal isOpen={isOpenAddCategory} onClose={handleCloseModal} />
      <div className="categories">
        {(checkbox ? categories : filteredCategories).map((e) => (
          <button key={"key"} onClick={() => navigate(`${e}`)}>
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};
