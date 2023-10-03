import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import App from "./App";
  import Test from "./pages/Test";
  import Folders from "./pages/Folders";
  import { folderContentLoader, usersLoader } from "./loader";
  import { createFolder, renameFolder, sendMessage } from "./action";
  import "./App.css";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      
        <Route path="/" element={<App/>}>
          <Route path="" element={<Test/>} />
          <Route
            path="users"
            element={<Folders />}
            loader={usersLoader}
          />
          <Route path="createFolder" action={createFolder} />
          <Route path="renameFolder/:id" action={renameFolder} />
          <Route path="sendMessage/:id" action={sendMessage}></Route>
        </Route>
     
    )
  );
  
  export default router;