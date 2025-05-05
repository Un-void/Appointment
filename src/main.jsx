import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import appRouter from './utils/appRouter'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={appRouter} />
    </AuthProvider>
)
