import { lazy } from "react";

const FirstDashboard = lazy(() => import("../views/dashboards/Dashboard"));
const UserManager = lazy(() => import("../views/user-manager/index"));

var IndexRoutes = [
  {
    path: "/home",
    component: FirstDashboard,
  },
  {
    path: "/users",
    component: UserManager,
  },
];
export default IndexRoutes;
