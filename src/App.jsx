import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Signup from './screens/Signup';

export default function App() {

    const router = createBrowserRouter([
        { path: "/", element: <Loading/> },
        { path: "/*", element: <NotFound/> },
        { path: "/home", element: <Home/> },
        { path: "/login", element: <Login/> },
        { path: "/signup", element: <Signup/> }
      ]);
      
 return  <RouterProvider router={router} />
}