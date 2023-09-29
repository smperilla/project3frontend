import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Test from "./pages/Test"
import Folders from "./pages/Folders"
import { usersLoader } from "./loader"
import { createFolder, renameFolder } from "./action"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Test></Test>}></Route>
            <Route path="users" element={<Folders></Folders>} loader={usersLoader}></Route>
            <Route path="createFolder" action={createFolder}></Route>
            <Route path="renameFolder/:id" action={renameFolder}></Route>
        </Route>
    )
)

export default router