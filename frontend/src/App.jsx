import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/navbar'
import { Home } from 'lucide-react'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
