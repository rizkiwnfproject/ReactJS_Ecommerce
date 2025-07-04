import MainLayouts from "../layouts/MainLayouts";
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
const AuthRoutes = {
  path: "/auth",
  element: <MainLayouts />,
  children: [
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
  ],
};
export default AuthRoutes