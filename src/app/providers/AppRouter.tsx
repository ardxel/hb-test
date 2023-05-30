import {BrowserRouter, createBrowserRouter} from "react-router-dom";
import {RegistrationPage} from "../../pages";

export const AppRouter = createBrowserRouter([
  {
    element: <RegistrationPage/>,
    path: '/'
  }
])