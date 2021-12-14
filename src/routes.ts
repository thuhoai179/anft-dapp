import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const RealEstateDetailsView = React.lazy(() => import('./views/realEstateManagement/shared/RealEstateDetailsView'))

const RegisterReward = React.lazy(() => import('./views/realEstateManagement/shared/RegisterReward'))

const ActivityLogs = React.lazy(() => import('./views/realEstateManagement/shared/ActivityLogs'))

const WorkerManagement = React.lazy(() => import('./views/realEstateManagement/owner/WorkerManagement'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {
    path: "/cms/:id/realestate_details_view",
    name: "RealEstateDetailsView",
    component: RealEstateDetailsView,
    exact: true,
  },
  {
    path: "/cms/register_reward",
    name: "RegisterReward",
    component: RegisterReward,
    exact: true,
  },
  {
    path: "/cms/activity_logs",
    name: "ActivityLogs",
    component: ActivityLogs,
    exact: true,
  },
  {
    path: "/cms/worker_management",
    name: "WorkerManagement",
    component: WorkerManagement,
    exact: true,
  },
]

export default routes
