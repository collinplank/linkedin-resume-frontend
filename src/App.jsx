import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { UsersPage } from "./UsersPage";
import { UsersShow } from "./UsersShow";
import { UsersIndexPage } from "./UsersIndexPage";
import { UsersShowPage } from "./UsersShowPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <UsersPage />,
      },
      {
        path: "/show/:id",
        element: <UsersShow />,
      },
      {
        path: "/users",
        element: <UsersIndexPage />,
        loader: () => axios.get("/users").then((response) => response.data),
      },
      {
        path: "/users/:id",
        element: <UsersShowPage />,
        loader: ({ params }) => axios.get(`/users/${params.id}`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
