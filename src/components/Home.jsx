import React, { useState, useEffect } from "react";
import { InterviewCard } from "./InterviewCard";
import { InterviewDetails } from "./InterviewDetails";
import { Navbar } from "./Navbar";

export const Home = () => {
  const initialState = {
    loading: true,
    interviews: [],
    allInterviews: [],
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

  const initialCandidates = {
    interviewers: [],
    interviewees: [],
  };

  const [candidates, setCandidates] = useState(initialCandidates);

  const fetchData = async () => {
    const response = await fetch(process.env.REACT_APP_API_URI + "/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data.success) {
      setState({ interviews: data.interviews, allInterviews: data.interviews });
      setDetailState({ ...data.interviews[0] });
    } else console.log(data.err);
  };

  const fetchCandidates = async () => {
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
    console.log(data);
    if (data.success) {
      console.log(data);
      setCandidates({
        ...candidates,
        interviewees: data.interviewees,
        interviewers: data.interviewers,
      });
    } else console.log(data.err);
  };

  useEffect(() => {
    fetchData();
    fetchCandidates();
  }, []);

  const changeDetailsView = (interview) => {
    setDetailState({ ...interview });
  };

  const handleFilter = (event) => {
    if (event.target.value === "") {
      setState({ ...state, interviews: state.allInterviews });
      return;
    }
    let filteredInterviews = [];
    for (let i = 0; i < state.allInterviews.length; i++) {
      let flag = false;
      for (let j = 0; j < state.allInterviews[i].interviewees.length; j++) {
        if (state.allInterviews[i].interviewees[j]._id === event.target.value) {
          flag = true;
          break;
        }
      }
      if (flag) {
        filteredInterviews.push(state.allInterviews[i]);
      }
    }
    setState({ ...state, interviews: filteredInterviews });
  };

  return (
    <div className="mx-lg-5 px-lg-5">
      <Navbar homeActive />
      <div id="top" className="mx-md-5">
        {state.loading ? (
          "Loading..."
        ) : state.interviews?.length ? (
          <div className="container">
            <div className="row mt-5 pt-5">
              <div className="col-md-5">
                <div className="row">
                  <div className="col m-2 mt-3">
                    <select
                      defaultValue=""
                      className="form-select"
                      onChange={handleFilter}
                    >
                      <option value="">Filter Candidates</option>
                      {candidates.interviewees.map((candidate, key) => (
                        <option key={key} value={candidate._id}>
                          {candidate.email}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <InterviewDetails {...detailState} />
                  </div>
                </div>
              </div>
              <div className="col-md-7 d-flex flex-wrap justify-content-center">
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
