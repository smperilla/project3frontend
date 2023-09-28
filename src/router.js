import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Test from "./pages/Test"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Test></Test>}></Route>
        </Route>
    )
)

export default router