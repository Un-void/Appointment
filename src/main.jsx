import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import appRouter from './utils/appRouter'

createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={appRouter} />
    </>
)
