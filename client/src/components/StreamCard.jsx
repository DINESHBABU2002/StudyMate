import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

import "./StreamCard.css";

const StreamCard = ({
  type,
  id,
  name,
  chaptersWritten,
  totalChapters,
  takeTestHandler,
}) => {
  let image =
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80";

  const navigate = useNavigate();

  return (
    <div
      className="stream-card"
      onClick={() => {
        takeTestHandler(id);
      }}
    >
      <div className="image-wrapper">
        <img src={image} alt="course" />
      </div>
      <div className="stream-topics">
        <h2>{id}</h2>
        <p className="stream-name">{name}</p>
      </div>
      <div className="stream-topics">
        <p className="chapters">{totalChapters} chapters</p>
        <div className="btn-wrapper">
          <ButtonPrimary
            style={{ width: "100px", borderRadius: "2px" }}
            onClick={() => {
              takeTestHandler(id);
            }}
          >
            Take {type}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
