import React from "react";

import ButtonPrimary from "../components/ButtonPrimary";
import "./EditUser.css";
import avatar from "../assets/avatar.jpg";

const EditUser = () => {
  const user = {
    fname: "Thomas",
    lname: "Harrison",
    depts: ["Department 1", "Department 2", "Department 3"],
    role: ["Role 1", "Role 2", "Role 3"],
    email: "thomas@example.com",
    password: "test123",
    mobile: "+91 987654321",
  };
  return (
    <div className="edit-user">
      <h1 className="heading-page">Edit Profile</h1>
      <div className="avatar-wrapper">
        <div className="image-icon-contianer">
          <img src={avatar} alt="user-avatar" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="edit-icon icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
      </div>
      <section className="user-details">
        <div className="form-fields">
          <p className="labels">First Name</p>
          <input type="text" className="inputs" value={user.fname} />
        </div>
        <div className="form-fields">
          <p className="labels">Last Name</p>
          <input type="text" className="inputs" value={user.lname} />
        </div>
        <div className="form-fields">
          <p className="labels">Departments</p>
          <ul className="lists">
            {user.depts.map((department) => (
              <li key={department}>{department}</li>
            ))}
          </ul>
        </div>
        <div className="form-fields">
          <p className="labels">Departments</p>
          <ul className="lists">
            {user.role.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div className="form-fields">
          <p className="labels">Email</p>
          <input type="email" className="inputs" value={user.email} />
        </div>
        <div className="form-fields">
          <p className="labels">Password</p>
          <input type="password" className="inputs" value={user.password} />
        </div>
        <div className="form-fields">
          <p className="labels">Mobile</p>
          <input type="text" className="inputs" value={user.mobile} />
        </div>
        <div className="button-groups">
          <ButtonPrimary style={{ width: "10rem", height: "5rem" }}>
            Save
          </ButtonPrimary>
          <button
            style={{ width: "10rem", height: "5rem" }}
            className="btn-secondary"
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
