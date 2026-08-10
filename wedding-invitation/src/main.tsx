import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'
import { NotificationProvider } from './context/NotificationContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </LanguageProvider>
  </StrictMode>,
)
