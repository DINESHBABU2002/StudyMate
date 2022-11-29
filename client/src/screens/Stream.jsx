import React from "react";
import "./Stream.css";

import StreamCard from "../components/StreamCard";
import ErrorDisplay from "../components/ErrorDisplay";
import { useLayoutEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Stream = () => {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [streams, setStreams] = useState([]);

  const navigate = useNavigate();
  // let json;
  useLayoutEffect(() => {
    const fetchStreams = async () => {
      setLoading(true);
      const response = await fetch("/api/v1/customer/12345/view/stream/list");

      const json = await response.json();

      if (json.status === "failed") {
        setStatus(false);
        setMessage(json.message);
        setLoading(false);
        // return <ErrorDisplay message={json.message} />;
      } else {
        setStatus(true);
        setLoading(false);
        const data = [];
        json.data.forEach((d) => {
          data.push({ id: d.streamID, name: d.streamName, totalChapters: 5 });
        });

        setStreams(data);
      }
    };

    fetchStreams();
  }, []);

  const takeTestHandler = (id) => {
    navigate(id + "/courses");
  };

  if (loading) {
    return <Loading />;
  }

  if (!status) {
    return <ErrorDisplay message={message} />;
  }

  return (
    <div className="stream">
      <h2 className="stream-heading">Stream's</h2>
      <div className="cards">
        {streams.map((data) => {
          return (
            <StreamCard
              type={"Stream"}
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

export default Stream;
