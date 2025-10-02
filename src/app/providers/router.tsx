import { Route, Routes } from "react-router-dom";
import { TasksListPage } from "../../pages/TasksList/TasksListPage";
import { TaskDescription } from "../../widgets/task-description/TaskDescription";
import { CategoriesPage } from "../../pages/CategoriesPage/CategoriesPage";
import { TaskListCategory } from "../../widgets/task-list-category/TaskListCategory";


export const Router = () => {
    return <Routes>
        <Route path="/" element={<TasksListPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<TaskListCategory />} />
        <Route path="/:id" element={<TaskDescription />} />
    </Routes>
}
