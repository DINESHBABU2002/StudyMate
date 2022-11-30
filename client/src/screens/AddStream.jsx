import React from "react";
import { useState } from "react";
import "./AddCourse.css";
import ButtonPrimary from "../components/ButtonPrimary";
const AddStream = () => {
  const [cname, setCName] = useState("");
  const [cid, setCId] = useState("");
  const [cDescription, setCDescription] = useState("");

  const [ispopup, setIsPopup] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    message: "",
    color: "red",
  });

  const clickHandler = async () => {
    setIsPopup(false);
    setMessage({ type: "", message: "", color: "" });
    const response = await fetch("api/v1/customer/12345/admin/stream/add", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        streamID: cid,
        streamName: cname,
        streamDescription: cDescription,
        streamStatus: "ACTIVE",
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
        <h1>Add Stream</h1>
      </div>
      <div className="add-course-container">
        <div>
          <div>
            <img
              src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={300}
            />
          </div>
          <div className="form-container">
            <div className="input-field-container">
              <h2 className="course-label">Stream Id : </h2>
              <input
                type="text"
                placeholder="Stream Id"
                className="course-input course-name"
                onChange={(e) => {
                  setCId(e.target.value);
                }}
              />
            </div>
            <div className="input-field-container">
              <h2 className="course-label">Stream Name : </h2>
              <input
                type="text"
                placeholder="Stream Name"
                className="course-input course-name"
                onChange={(e) => {
                  setCName(e.target.value);
                }}
              />
            </div>
            <div className="input-field-container">
              <h2 className="course-label">Stream Description : </h2>
              <textarea
                type="text"
                placeholder="Stream Description"
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

export default AddStream;
