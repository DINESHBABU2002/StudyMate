import React, { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorDisplay from "../components/ErrorDisplay";
import NoDataFound from "../components/NoDataFound";
import StreamCard from "../components/StreamCard";
import Loading from "./Loading";
import "./Stream.css";

const CoursesScreen = () => {
  const { streamId } = useParams();

  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`/api/v1/list/${streamId}`);
      const json = await response.json();

      if (!response.ok || json.status !== "success") {
        <ErrorDisplay message={response.message} />;
      }

      if (response.ok) {
        // setCourseList(json.data);
        let datas = [];
        json.data.map((data) => {
          datas.push({
            id: data.courseID,
            name: data.courseName,
            totalChapters: 3,
          });
        });

        setCourseList(datas);
        setLoading(false);
      }
    };

    fetchData();
  }, [streamId]);

  const takeTestHandler = (id) => {
    navigate(id + "/subjects");
  };

  if (loading) {
    return <Loading />;
  }

  if (courseList.length <= 0) {
    return <NoDataFound />;
  }

  return (
    <div className="stream">
      <h2 className="stream-heading">Course's</h2>
      <div className="cards">
        {courseList.map((data) => {
          return (
            <StreamCard
              type={"Course"}
              key={data.id}
              id={data.id}
              name={data.name}
              totalChapters={data.totalChapters}
              takeTestHandler={takeTestHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoursesScreen;
