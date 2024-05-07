import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
import User from "./pages/User";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Admin from "./pages/Admin";
import AdminLayout from "./Layouts/AdminLayout";
import TeacherLayout from "./Layouts/TeacherLayout";
import Teacher from "./pages/Teacher";
import NotFoundPage from "./404/NotFoundPage";
import Course from "./pages/Course/Course";
import Player from "./pages/Player/Player";
import AnalyticsPage from "./pages/Teacher/_components/AnalyticsPage";
import AllUsers from "./pages/Admin/_components/AllUsers";
import AllCourses from "./pages/User/_components/AllCourses";
import AllCoursesTable from "./pages/Teacher/_components/AllCoursesTable";
import Profile from "./pages/Profile";
import ProfileLayout from "./Layouts/ProfileLayout";
import CourseDetailsLayout from "./Layouts/CourseDetailsLayout";
import CourseDetails from "./pages/Course/Edit/CourseDetails";
import AddCourse from "./pages/Course/add-course/AddCourse";
import { Toaster } from "react-hot-toast";


const App = () => {
  
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<User />} />
          <Route path="/course/:id" element={<Course />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="all-courses" element={<AllCoursesTable />} />
          <Route path="course-details/:id" element={<CourseDetails />} />
        </Route>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Teacher />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="course-details/:id" element={<CourseDetails />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/course-details/:id" element={<CourseDetailsLayout />}>
          <Route index element={<CourseDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="player/:id" element={<Player />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="add-course" element={<AddCourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
