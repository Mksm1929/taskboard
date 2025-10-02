import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/redux-hooks";
import { addTask, setTask } from "../../../entities/task/model/actions";
import type { Task } from "../../../shared/types/task";
import { Field } from "../../../shared/ui/field/Field";
import { Modal } from "../../../shared/ui/modal/Modal";
import { Textarea } from "../../../shared/ui/textarea/Textarea";

type AddTasksModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddTasksModal = (props: AddTasksModalProps) => {
  const { id, task } = useAppSelector((state) => state.tasks);
  const { categories } = useAppSelector((state) => state.categories);

  const dispatch = useAppDispatch();

  const handleSetTask = (field: keyof Task, value: string) => {
    dispatch(setTask({ [field]: value }));
  };

  const handleAddTask = () => {
    const action = addTask({ ...task, id: id });
    if (task.title !== "") {
      dispatch(action);
      props.onClose();
    }
  };

  return (
    <Modal
      heading="Добавление задачи"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <div>
        <div className="container-fild">
          <Field isRequiredField={!task.title} title="Название">
            <input
              value={task.title}
              onChange={(e) => handleSetTask("title", e.target.value)}
              placeholder="Введите  задачу..."
            />
          </Field>

          <Field title="Категория">
            <select
              defaultValue={categories[0]}
              onChange={(e) => handleSetTask("category", e.target.value)}
            >
              {categories.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </Field>

          <Field title="Описание">
            <Textarea
              value={task.description}
              onChange={(v) => handleSetTask("description", v)}
            />
          </Field>
        </div>
        <div className="modal-buttons">
          <button disabled={task.title === ""} onClick={handleAddTask}>
            сохранить
          </button>
          <button onClick={props.onClose}>отмена</button>
        </div>
      </div>
    </Modal>
  );
};
