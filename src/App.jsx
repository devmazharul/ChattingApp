


import Registration from "./assets/component/Registration/Registration";
import Login from "./assets/component/Login/Login";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
function App() {


  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App
