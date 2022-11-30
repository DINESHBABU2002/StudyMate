import React from "react";
import { useState } from "react";
import "./AddCourse.css";
import ButtonPrimary from "../components/ButtonPrimary";
const AddCourse = () => {
  const [cname, setCName] = useState("");
  const [cid, setCId] = useState("");
  const [cDescription, setCDescription] = useState("");
  const [sid, setSid] = useState("");
  const [ispopup, setIsPopup] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    message: "",
    color: "red",
  });

  const clickHandler = async () => {
    setIsPopup(false);
    setMessage({ type: "", message: "", color: "" });
    const response = await fetch("api/v1/customer/12345/admin/course/add", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        streamID: sid,
        courseID: cid,
        courseName: cname,
        courseDescription: cDescription,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setIsPopup(true);
      setMessage({ message: json.message, color: "red" });
    } else {
      setIsPopup(true);
      setMessage({ message: json.message, color: "green" });
    }
  };
  return (
    <div>
      <div className="page-heading">
        {ispopup && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="popup-container"
              style={{
                border: 1,
                borderColor: message.color,
                borderStyle: "solid",
                color: message.color,
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {message.message}
            </div>
          </div>
        )}
        <h1>Add Course</h1>
      </div>
      <div className="add-course-container">
        <div>
          <div>
            <img
              src="https://wallpaperaccess.com/full/4107295.png"
              alt=""
              width={500}
              height={300}
            />
          </div>
          <div className="form-container">
            <div className="input-field-container">
              <h2 className="course-label">Stream ID : </h2>
              <input
                type="text"
                placeholder="Stream ID"
                className="course-input course-name"
                onChange={(e) => {
                  setSid(e.target.value);
                }}
              />
            </div>
            <div className="input-field-container">
              <h2 className="course-label">Course Id : </h2>
              <input
                type="text"
                placeholder="Course Id"
                className="course-input course-name"
                onChange={(e) => {
                  setCId(e.target.value);
                }}
              />
            </div>

            <div className="input-field-container">
              <h2 className="course-label">Course Name : </h2>
              <input
                type="text"
                placeholder="Course Name"
                className="course-input course-name"
                onChange={(e) => {
                  setCName(e.target.value);
                }}
              />
            </div>
            <div className="input-field-container">
              <h2 className="course-label">Course Description : </h2>
              <textarea
                type="text"
                placeholder="Course Description"
                className="course-input course-name"
                onChange={(e) => {
                  setCDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="add-button">
            <ButtonPrimary onClick={clickHandler}>Add New</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
