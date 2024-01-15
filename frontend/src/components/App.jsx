import '../index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Profile from './Profile'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Root from './Root'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
