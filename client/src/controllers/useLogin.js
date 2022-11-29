import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userID: email, userPassword: password }),
      });
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json);
        console.log("Error");
      }

      console.log("json", json.status);

      if (!response.ok) {
        setError(json);
      }

      if (response.ok) {
        // update the auth context
        const uid = json.userID;
        console.log("user id", uid);
        // update loading state
        setIsLoading(false);
        navigate("/streams");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { login, error, isLoading };
};

export default useLogin;
