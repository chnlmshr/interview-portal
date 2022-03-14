import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export const ScheduleInterview = () => {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    interviewers: [],
    interviewees: [],
  };

  const initialParticipants = {
    interviewers: [],
    interviewees: [],
  };

  const [participants, setParticipants] = useState(initialParticipants);

  const fetchData = async () => {
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
      setParticipants({
        interviewers: data.interviewers,
        interviewees: data.interviewees,
      });
    } else console.log(data.err);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnSubmit = async (interview) => {
    if (interview.interviewers < 1 || interview.interviewees < 1) {
      alert("Number of interviewers and interviewees should at least one!");
      return;
    }
    const response = await fetch(
      process.env.REACT_APP_API_URI + "/scheduleinterview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interview),
      }
    );
    const data = await response.json();

    if (data.success) {
      if (data.conflict) {
        console.log(data.conflict);
        alert("This Interview is conflicting with another interview");
      } else navigate("/");
    } else console.log(data.err);
  };

  const handleDiscard = () => {
    console.log("Discarded!");
    navigate("/");
  };

  return (
    <div className="mx-lg-5 px-lg-5">
      <Navbar scheduleActive />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Form
              currentState={initialState}
              allParticipants={participants}
              handleOnSubmit={handleOnSubmit}
              handleDiscard={handleDiscard}
              action="Schedule"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
