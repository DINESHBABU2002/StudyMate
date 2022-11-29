import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EditUser from "./screens/EditUser";

import LoginScreen from "./screens/LoginScreen";
import ViewProfile from "./screens/ViewProfile";
import TestScreen from "./screens/TestScreen";
import ViewChapters from "./screens/ViewChapters";
import Signup from "./screens/Signup";
import CertificateTemplate from "./components/CertificateTemplate";
import Stream from "./screens/Stream";
import Loading from "./screens/Loading";
import TakeTest from "./screens/TestScreen";
import SuccessScreen from "./screens/SuccessScreen";
import { useDispatch } from "react-redux";
import ErrorDisplay from "./components/ErrorDisplay";
import CoursesScreen from "./screens/CoursesScreen";
import SubjectsScreen from "./screens/SubjectsScreen";
import ChapterScreen from "./screens/ChapterScreen";
import TopicScreen from "./screens/TopicScreen";
import ScoreScreen from "./screens/ScoreScreen";
import ScoreListScreen from "./screens/ScoreListScreen";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />}></Route>
      <Route
        path="/login"
        element={!user ? <LoginScreen /> : <Navigate to={"/streams"} />}
      ></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/edituser"
        element={
          <Sidebar>
            <Navbar />
            <EditUser />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/streams"
        element={
          <Sidebar>
            <Stream />
          </Sidebar>
        }
      />
      <Route
        path="streams/:streamId/courses"
        element={
          <Sidebar>
            <CoursesScreen />
          </Sidebar>
        }
      ></Route>
      <Route
        path="streams/:streamId/courses/:courseId/subjects"
        element={
          <Sidebar>
            <SubjectsScreen />
          </Sidebar>
        }
      ></Route>
      <Route
        path="streams/:streamId/courses/:courseId/subjects/:subjectId/chapters"
        element={
          <Sidebar>
            <ChapterScreen />
          </Sidebar>
        }
      ></Route>
      <Route
        path="streams/:streamId/courses/:courseId/subjects/:subjectId/taketest"
        element={
          <Sidebar>
            <TestScreen />
          </Sidebar>
        }
      ></Route>
      <Route
        path="streams/:streamId/courses/:courseId/subjects/:subjectId/chapters/:chapterId/topics"
        element={
          <Sidebar>
            <TopicScreen />
          </Sidebar>
        }
      ></Route>
      <Route path="/completed" element={<SuccessScreen />}></Route>
      <Route
        path="/scores"
        element={
          <Sidebar>
            <ScoreScreen />
          </Sidebar>
        }
      />
      <Route path="/getCertificate" element={<CertificateTemplate />}></Route>
      <Route
        path="*"
        element={<ErrorDisplay message={"Page Not Found"} />}
      ></Route>
    </Routes>
  );
};

export default App;
