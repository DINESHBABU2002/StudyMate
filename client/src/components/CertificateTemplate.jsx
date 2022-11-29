import React from "react";

const CertificateTemplate = () => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
        padding: "20px",
        textAlign: "center",
        border: "10px solid #787878",
      }}
    >
      <div
        style={{
          width: "750px",
          height: "550px",
          padding: "20px",
          textAlign: "center",
          border: "5px solid #787878",
        }}
      >
        <span style={{ fontSize: "50px", fontWeight: "bold" }}>
          Certificate of Completion
        </span>
        <br />
        <br />
        <span style={{ fontSize: "25px" }}>
          <i>This is to certify that</i>
        </span>
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>
          <b>$student.getFullName()</b>
        </span>
        <br />
        <br />
        <span style={{ fontSize: "25px" }}>
          <i>has completed the course</i>
        </span>
        <br />
        <br />
        <span style={{ fontSize: "30px" }}>$course.getName()</span> <br />
        <br />
        <span style={{ fontSize: "20px" }}>
          with score of <b>$grade.getPoints()%</b>
        </span>
        <br />
        <br />
        <br />
        <br />
        <span style={{ fontSize: "25px" }}>
          <i>dated</i>
        </span>
        <br />
        #set ($dt = $DateFormatter.getFormattedDate($grade.getAwardDate(), "MMMM
        dd, yyyy"))
        <span style={{ fontSize: "30px" }}>$dt</span>
      </div>
    </div>
  );
};

export default CertificateTemplate;
