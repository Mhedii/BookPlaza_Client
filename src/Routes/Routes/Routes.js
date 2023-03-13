import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import DisplayError from "../../shared/DisplayError/DisplayError";
import Login from "../../pages/Login/Login";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            }
        ],
    }
]);

export default router;