import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { Navbar } from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateInterview = () => {
  const navigate = useNavigate();
  const params = useParams();
  const initialState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    interviewers: [],
    interviewees: [],
  };
  const [state, setState] = useState(initialState);

  const initialParticipants = {
    interviewers: [],
    interviewees: [],
  };

  const [participants, setParticipants] = useState(initialParticipants);

  const fetchInterview = async (id) => {
    const response = await fetch(
      process.env.REACT_APP_API_URI + "/interview/" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.success) {
      return {
        ...data.interview,
        name: data.interview.name,
        date: data.interview.date?.split("T")[0],
        startTime: data.interview.startTime?.split("T")[1]?.split(":00")[0],
        endTime: data.interview.endTime?.split("T")[1]?.split(":00")[0],
      };
    } else {
      return state;
    }
  };

  const fetchCandidates = async (currentState) => {
    const response = await fetch(
      process.env.REACT_APP_API_URI + "/candidates",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.success) {
      let remainingParticipants = { interviewers: [], interviewees: [] };
      for (let i = 0; i < data.interviewers.length; i++) {
        let flag = true;
        for (let j = 0; j < currentState?.interviewers?.length; j++) {
          if (
            data.interviewers[i].email === currentState?.interviewers[j]?.email
          ) {
            flag = false;
            break;
          }
        }
        if (flag)
          remainingParticipants?.interviewers?.push(data.interviewers[i]);
      }
      for (let i = 0; i < data.interviewees?.length; i++) {
        let flag = true;
        for (let j = 0; j < currentState?.interviewees?.length; j++) {
          if (
            data.interviewees[i].email === currentState?.interviewees[j]?.email
          ) {
            flag = false;
            break;
          }
        }
        if (flag) remainingParticipants.interviewees.push(data.interviewees[i]);
      }
      setParticipants(remainingParticipants);
      setState(currentState);
    } else console.log(data.err);
  };

  useEffect(() => {
    const asyncFetch = async () => {
      let currentState = await fetchInterview(params.id);
      fetchCandidates(currentState);
    };
    asyncFetch();
  }, []);

  const handleOnSubmit = async (interview) => {
    if (interview.interviewers < 1 || interview.interviewees < 1) {
      alert("Number of interviewers and interviewees should at least one!");
      return;
    }
    const response = await fetch(
      process.env.REACT_APP_API_URI + "/updateinterview",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interview),
      }
    );
    const data = await response.json();

    if (data.success) {
      if (data.conflict) {
        alert("This Interview is conflicting with another interview");
      } else navigate("/");
    } else console.log(data.err);
  };

  const handleDiscard = async (id) => {
    const response = await fetch(
      process.env.REACT_APP_API_URI + "/deleteinterview/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.success) {
      navigate("/");
    } else {
      console.log(data.err);
    }
  };

  return (
    <div className="mx-5 px-5">
      <Navbar scheduleActive />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <Form
              currentState={state}
              allParticipants={participants}
              handleOnSubmit={handleOnSubmit}
              handleDiscard={handleDiscard}
              action="Update"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
