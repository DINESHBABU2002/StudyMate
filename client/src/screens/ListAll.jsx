import React from "react";
import "./ListAll.css";
import { useNavigate } from "react-router-dom";
const ListAll = () => {
  const navigate = useNavigate();
  const lists = [
    {
      name: "Add New Stream",
      url: "/addstream",
      backgroundColor: "#5f3dc4",
    },
    {
      name: "Add New Course",
      url: "/addcourse",
      backgroundColor: "#4263eb",
    },
    {
      name: "Add New Subject",
      url: "/addsubject",
      backgroundColor: "#1971c2",
    },
    {
      name: "Add New Chapter",
      url: "/addchapter",
      backgroundColor: "#0ca678",
    },
    {
      name: "Add New Topic",
      url: "/addtopic",
      backgroundColor: "#f08c00",
    },
    {
      name: "Add New Question",
      url: "/addquestions",
      backgroundColor: "#e03131",
    },
  ];

  return (
    <div>
      <div className="list-container">
        {lists.map((m) => {
          return (
            <div
              className="lists"
              style={{ backgroundColor: m.backgroundColor }}
              onClick={() => {
                navigate(m.url);
              }}
            >
              <p>{m.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAll;
