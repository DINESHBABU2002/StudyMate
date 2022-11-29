import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoDataFound from "../components/NoDataFound";
import Loading from "./Loading";

import "./SubjectScreen.css";

const SubjectsScreen = () => {
  const { courseId, streamId } = useParams();
  const navigate = useNavigate();

  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`/api/v1/list/${streamId}/${courseId}`);
      const json = await response.json();

      console.log(json.data);

      let datas = [];
      json.data.map((data) =>
        datas.push({
          id: data.subjectID,
          name: data.subjectName,
          totalChapters: 16,
        })
      );
      setSubjectList(datas);
      setLoading(false);
    };

    fetchData();
  }, [courseId, streamId]);

  const handleClick = (id) => {
    navigate(id + "/chapters");
  };

  if (loading) {
    return <Loading />;
  }
  if (subjectList.length <= 0) {
    return <NoDataFound />;
  }

  return (
    <div className="subject-page">
      <h2 className="subject-page-title">{courseId} Subject's</h2>
      <ul className="subjects-list">
        {subjectList.map((subject, index) => {
          return (
            <li
              className="subject-list"
              key={subject.id}
              onClick={() => handleClick(subject.id)}
            >
              <span className="subject-name">
                {index + 1} . {subject.name}
              </span>
              <span className="total-chapters">
                {subject.totalChapters} Chapters
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubjectsScreen;
