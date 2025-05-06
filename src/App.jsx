import Header from './components/Header'
import Footer from './components/Footer'
import { useLocation,Outlet } from 'react-router'

function App() {

  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return(
    <>
      {showHeader && <Header />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
