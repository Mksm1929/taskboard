import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/redux-hooks";
import {
  addCategory,
  setCategory,
} from "../../entities/category/model/actions";
import { Field } from "../../shared/ui/field/Field";
import { Modal } from "../../shared/ui/modal/Modal";

interface ModalCategoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCategoryModal: React.FC<ModalCategoryProps> = (props) => {  
  const category = useAppSelector((state) => state.categories.category);
  const dispatch = useAppDispatch();

  const handleClickAddCategory = () => {
    const action = addCategory(category);

    if (category !== "") {
      dispatch(action);
      props.onClose();
    }
  };
  
  return (
    <div>
      <Modal
        heading="Добавить категорию"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div>
          <Field isRequiredField={!category} title="Категория">
            <input
              value={category}
              onChange={(e) => dispatch(setCategory(e.target.value))}
              placeholder="Введите  категорию"
            />
          </Field>
        </div>
        <div className="modal-categories-button">
          <button onClick={handleClickAddCategory} disabled={category === ""}>
            Сохранить
          </button>
          <button onClick={props.onClose}>Отмена</button>
        </div>
      </Modal>
    </div>
  );
};
