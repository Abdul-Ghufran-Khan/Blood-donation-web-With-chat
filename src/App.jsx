import Home from './screens/Home';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import NotFound from './screens/NotFound';
import Blood from './screens/Blood';
import BloodDonationForm from './screens/Form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {

    const router = createBrowserRouter([
        { path: "/", element: <Loading/> },
        { path: "/*", element: <NotFound/> },
        { path: "/home", element: <Home/> },
        { path: "/chat", element: <Chat/> },
        { path: "/login", element: <Login/> },
        { path: "/form", element: <BloodDonationForm/> },
        { path: "/blood", element: <Blood/> },
        { path: "/signup", element: <Signup/> }

      ]);
      
 return  <RouterProvider router={router} />
}