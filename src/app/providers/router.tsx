import { Route, Routes } from "react-router-dom";
import { TaskList } from "../../widgets/task-list/ui/TaskList";
import { TaskDescription } from "../../widgets/task-description/TaskDescription";
import { Categories } from "../../widgets/categories/Categories";
import { TaskListCategory } from "../../widgets/task-list-category/TaskListCategory";


export const Router = () => {

    return <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<TaskListCategory />} />
        <Route path="/:id" element={<TaskDescription />} />
    </Routes>
}
