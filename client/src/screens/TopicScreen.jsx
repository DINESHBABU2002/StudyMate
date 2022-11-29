import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoDataFound from "../components/NoDataFound";
import Loading from "./Loading";

import "./SubjectScreen.css";

const TopicScreen = () => {
  const { courseId, streamId, subjectId, chapterId } = useParams();
  const navigate = useNavigate();

  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `/api/v1/list/${streamId}/${courseId}/${subjectId}/${chapterId}`
      );
      const json = await response.json();

      console.log(json.data);

      let datas = [];
      json.data.map((data) =>
        datas.push({
          id: data.topicID,
          name: data.topicName,
          totalChapters: 16,
        })
      );
      setSubjectList(datas);
      setLoading(false);
    };

    fetchData();
  }, [courseId, streamId]);

  const handleClick = (id) => {
    console.log(id);
  };

  if (loading) {
    return <Loading />;
  }

  if (subjectList.length <= 0) {
    return <NoDataFound />;
  }

  return (
    <div className="subject-page">
      <h2 className="subject-page-title">{chapterId} Topic's</h2>
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
                {subject.totalChapters} Question's
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicScreen;
