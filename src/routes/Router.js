import { lazy } from "react";

const FirstDashboard = lazy(() => import("../views/dashboards/Dashboard"));
const UserManager = lazy(() => import("../views/user-manager/index"));

var ThemeRoutes = [
  {
    navlabel: true,
    name: "Personal",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/sys/dashboard",
    name: "Dashboards",
    state: "dashboardpages",
    icon: "mdi mdi-gauge",
    child: [
      {
        path: "/sys/dashboard/one",
        name: "Dashboard",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: FirstDashboard,
      },
      {
        path: "/sys/dashboard/manager",
        name: "User Manager",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: UserManager,
      }
    ],
  },
  {
    path: "/sys/user/management",
    name: "User Manager",
    state: "usermanager",
    icon: "mdi mdi-comment-multiple-outline",
    component: UserManager,
  }
];
export default ThemeRoutes;
