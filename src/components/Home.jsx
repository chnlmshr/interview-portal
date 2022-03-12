import React, { useState, useEffect } from "react";
import { InterviewCard } from "./InterviewCard";
import { InterviewDetails } from "./InterviewDetails";
import { Navbar } from "./Navbar";

export const Home = () => {
  const initialState = {
    loading: true,
    interviews: [],
  };
  const [state, setState] = useState(initialState);
  const initialDetailState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    id: "",
    interviewers: [],
    interviewees: [],
  };
  const [detailState, setDetailState] = useState(initialDetailState);

  useEffect(() => {
    var sampleInterviews = [
      {
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
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
        interviewees: [
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
      },
      {
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
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
        interviewees: [
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
      },
      {
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
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
        interviewees: [
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
      },
      {
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
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
        interviewees: [
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
      },
      {
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
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
        interviewees: [
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
          {
            name: "Interviewer 1",
            email: "interviewer1@gmail.com",
          },
        ],
      },
    ];
    setState({ interviews: sampleInterviews });
    setDetailState({ ...sampleInterviews[0] });
  }, []);

  const changeDetailsView = (interview) => {
    setDetailState({ ...interview });
  };

  return (
    <div className="mx-5 px-5">
      <Navbar homeActive />
      <div className="mx-5">
        {state.loading ? (
          "Loading..."
        ) : state.interviews?.length ? (
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6">
                <InterviewDetails {...detailState} />
              </div>
              <div className="col-md-6 d-flex flex-wrap justify-content-center">
                {state.interviews.map((interview, key) => (
                  <InterviewCard
                    key={key}
                    interview={interview}
                    changeDetailsView={changeDetailsView}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          "Nothing Here!"
        )}
      </div>
    </div>
  );
};
