import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';
import AddCraftItem from '../pages/AddCraftItem/AddCraftItem';
import AllArtCrafts from '../pages/AllArtCrafts/AllArtCrafts';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/add-craft-item',
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: '/all-art-crafts',
        element: <AllArtCrafts></AllArtCrafts>,
      },
    ],
  },
]);
export default routes;
