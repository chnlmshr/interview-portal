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

  const fetchData = async () => {
    const response = await fetch(process.env.REACT_APP_API_URI + "/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data.success) {
      setState({ interviews: data.interviews });
      setDetailState({ ...data.interviews[0] });
    } else console.log(data.err);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeDetailsView = (interview) => {
    setDetailState({ ...interview });
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
                <InterviewDetails {...detailState} />
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
