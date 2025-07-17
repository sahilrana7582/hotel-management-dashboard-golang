import Layout from "../components/Layout/Layout";
import Dashboard from "../features/Dashboard/components/Dashboard/DashboardPage";
import Login from "../pages/login/Login";
import Room from "../pages/room/Room";


const appRoutes = [
  // 🔓 Public Route
  {
    path: '/login',
    element: <Login />,
  },

  // 🔒 Protected Routes (Layout with sidebar/header)
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Dashboard/>},
      { path: 'rooms', element: <Room/> },
      { path: 'housekeeping', element: <h1>HK</h1> },
      { path: 'messages', element: <h1>messages</h1> },
      { path: 'kitchen', element: <h1>kitchen</h1> },
      { path: 'frontdesk', element: <h1>frontdesk</h1> },
    ],
  },
];

export default appRoutes;
