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
  const [state, setState] = useState(initialState);

  const initialParticipants = {
    interviewers: [],
    interviewees: [],
  };

  const [participants, setParticipants] = useState(initialParticipants);

  useEffect(() => {
    var sampleInterview = {
      name: "Interview 1",
      date: "2022-12-12",
      startTime: "12:05",
      endTime: "02:50",
      id: "xyz",
      interviewers: [
        {
          name: "Interviewer 1",
          email: "interviewer1@gmail.com",
        },
        {
          name: "Interviewer 2",
          email: "interviewer2@gmail.com",
        },
        {
          name: "Interviewer 3",
          email: "interviewer3@gmail.com",
        },
        {
          name: "Interviewer 4",
          email: "interviewer4@gmail.com",
        },
      ],
      interviewees: [
        {
          name: "Interviewer 1",
          email: "interviewee1@gmail.com",
        },
        {
          name: "Interviewer 2",
          email: "interviewee2@gmail.com",
        },
        {
          name: "Interviewer 3",
          email: "interviewee3@gmail.com",
        },
        {
          name: "Interviewer 4",
          email: "interviewee4@gmail.com",
        },
      ],
    };
    // setState({ interviews: sampleInterview });
    setParticipants({
      interviewees: sampleInterview.interviewees,
      interviewers: sampleInterview.interviewers,
    });
  }, []);

  const handleOnSubmit = (interview) => {
    console.log(interview);
  };

  const handleDiscard = () => {
    console.log("Deleted!");
    navigate("/");
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
              action="Schedule"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
