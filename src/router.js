import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import App from "./App";
  import Test from "./pages/Test";
  import Folders from "./pages/Folders";
  import { usersLoader } from "./loader";
  import { createFolder, renameFolder } from "./action";
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
        </Route>
     
    )
  );
  
  export default router;