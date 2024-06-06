import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';
import AddCraftItem from '../pages/AddCraftItem/AddCraftItem';
import AllArtCrafts from '../pages/AllArtCrafts/AllArtCrafts';
import CraftDetails from '../components/CraftDetails';
import MyArtCrafts from '../pages/MyArtCrafts/MyArtCrafts';
import UpdateCraftItem from '../pages/UpdateCraftItem/UpdateCraftItem';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoutes from './PrivateRoutes';
import SubCategoryCraft from '../pages/Home/ShopCategory/SubCategoryCraft';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoutes>
            <AddCraftItem></AddCraftItem>
          </PrivateRoutes>
        ),
      },
      {
        path: '/all-art-crafts',
        element: <AllArtCrafts></AllArtCrafts>,
      },
      {
        path: '/crafts/:id',
        element: (
          <PrivateRoutes>
            <CraftDetails></CraftDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE}/crafts/${params.id}`),
      },
      {
        path: '/my-art-craft-list',
        element: (
          <PrivateRoutes>
            <MyArtCrafts></MyArtCrafts>
          </PrivateRoutes>
        ),
      },
      {
        path: '/update-my-crafts/:id',
        element: <UpdateCraftItem></UpdateCraftItem>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE}/crafts/${params.id}`),
      },
      {
        path: '/sub-category/:category',
        element: <SubCategoryCraft></SubCategoryCraft>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_BASE}/crafts/subcategory/${
              params.category
            }`
          ),
      },
    ],
  },
]);
export default routes;
