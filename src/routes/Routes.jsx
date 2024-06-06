import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';
import AddCraftItem from '../pages/AddCraftItem/AddCraftItem';
import AllArtCrafts from '../pages/AllArtCrafts/AllArtCrafts';
import CraftDetails from '../components/CraftDetails';

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
      {
        path: '/crafts/:id',
        element: <CraftDetails></CraftDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE}/crafts/${params.id}`),
      },
    ],
  },
]);
export default routes;
