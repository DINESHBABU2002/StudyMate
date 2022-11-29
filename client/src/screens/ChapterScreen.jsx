import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoDataFound from "../components/NoDataFound";
import Loading from "./Loading";
import ButtonPrimary from "../components/ButtonPrimary";

import "./SubjectScreen.css";

const ChapterScreen = () => {
  const { courseId, streamId, subjectId } = useParams();
  const navigate = useNavigate();

  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `/api/v1/list/${streamId}/${courseId}/${subjectId}`
      );
      const json = await response.json();

      let datas = [];
      json.data.map((data) =>
        datas.push({
          id: data.chapterID,
          name: data.chapterName,
          description: data.chapterDescription,
          totalChapters: 16,
        })
      );
      setSubjectList(datas);
      setLoading(false);
    };

    fetchData();
  }, [courseId, streamId]);

  const handleClick = (id) => {
    navigate(id + "/topics");
  };

  const takeTestHandler = () => {
    navigate(
      `/streams/${streamId}/courses/${courseId}/subjects/${subjectId}/taketest`
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (subjectList.length <= 0) {
    return <NoDataFound />;
  }

  return (
    <div className="subject-page">
      <div className="subject-title-flex">
        <h2 className="subject-page-title">{subjectId} Chapter's</h2>
        <ButtonPrimary
          style={{
            marginTop: "10px",
            width: "200px",
            height: "50px",
            fontSize: "1.6rem",
          }}
          onClick={takeTestHandler}
        >
          Take Test
        </ButtonPrimary>
      </div>
      <ul className="subjects-list">
        {subjectList.map((subject, index) => {
          console.log(subject);
          return (
            <li
              className="subject-list"
              key={subject.id}
              onClick={() => handleClick(subject.id)}
            >
              <span className="subject-name">
                {index + 1} . {subject.name}
                <p className="subject-description">
                  <span>{subject.description}</span>
                </p>
              </span>
              <span className="total-chapters">
                {subject.totalChapters} Topic's
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChapterScreen;
