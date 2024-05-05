import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import MainLayout from './layouts/MainLayout';
import JobsScreen from './screens/JobsScreen';
import AddJobsScreen from './screens/AddJobsScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomeScreen />} />
      <Route path='/jobs' element={<JobsScreen />} />
      {/*<Route path='/add-job' element={<AddJobsScreen />} />*/}
      <Route path='*' element={<NotFoundScreen />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App