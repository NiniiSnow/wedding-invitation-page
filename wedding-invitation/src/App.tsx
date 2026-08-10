import './App.css'
import { Outlet } from 'react-router-dom'
import { NotificationContainer } from './components/NotificationContainer'

function App() {

  return (
    <>
      <Outlet />
      <NotificationContainer />
      {/* <Footer /> */}
    </>
  )
}

export default App
