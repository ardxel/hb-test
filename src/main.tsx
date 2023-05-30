import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import {AppRouter} from "./app/providers/AppRouter";
import {RouterProvider} from "react-router-dom";
import {AppTheme} from "./app/providers/AppTheme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <AppTheme>
        <RouterProvider router={AppRouter}/>
      </AppTheme>
    </React.StrictMode>,
)
