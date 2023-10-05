import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";
import Folders from "./pages/Folders";
import { folderContentLoader, usersLoader } from "./loader";
import { createFolder, newChat, renameFolder, sendMessage } from "./action";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Test />} />
      <Route path="users" element={<Folders />} loader={usersLoader} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="createFolder" action={createFolder} />
      <Route path="renameFolder/:id" action={renameFolder} />
      <Route path="sendMessage/:id" action={sendMessage}></Route>
      <Route path="newChat" action={newChat}></Route>
    </Route>
  )
);

export default router;
