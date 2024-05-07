import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import MainLayout from "./layouts/MainLayout";
import JobsScreen from "./screens/JobsScreen";
import AddJobsScreen from "./screens/AddJobsScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import JobScreen, { jobLoader } from "./screens/JobScreen";
import EditJobScreen from "./screens/EditJobScreen";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/jobs" element={<JobsScreen />} />
        <Route
          path="/add-job"
          element={<AddJobsScreen addJobSubmit={addJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobScreen deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobScreen updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
