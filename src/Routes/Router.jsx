import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Header></Header>,
  },
  { 
    path: "auth",
    element: <div>Auth Layout</div>,
  },
  {
    path: "news",
    element: <div>News Layout</div>,
  },
  {
    path: "*",
    element: <div>Error404</div>,
  },
  
]);

export default router;
