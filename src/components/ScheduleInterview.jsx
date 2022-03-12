import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const ScheduleInterview = () => {
  const initialState = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    interviewers: [],
    interviewees: [],
  };
  const [state, setState] = useState(initialState);
  const handleOnChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mx-5 px-5">
      <Navbar scheduleActive />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <form className="p-3" onSubmit={handleOnSubmit}>
              <h5 className="pb-3">Schedule an Interview</h5>
              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={state.name}
                  onChange={handleOnChange}
                  placeholder="Interview Name"
                  required
                />
              </div>
              <div className="form-group py-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Date</div>
                  </div>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    id="date"
                    value={state.date}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group py-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Start Time</div>
                  </div>
                  <input
                    type="time"
                    className="form-control"
                    name="startTime"
                    id="startTime"
                    value={state.startTime}
                    onChange={handleOnChange}
                    placeholder="Start Time"
                    required
                  />
                </div>
              </div>
              <div className="form-group py-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">End Time</div>
                  </div>
                  <input
                    type="time"
                    className="form-control"
                    name="endTime"
                    id="endTime"
                    value={state.endTime}
                    onChange={handleOnChange}
                    placeholder="End Time"
                    required
                  />
                </div>
              </div>
              <div className="input-group py-2">
                <select
                  name="interviewers"
                  className="form-select"
                  value={state.value}
                  onChange={handleOnChange}
                >
                  <option value="Choose Interviewees">
                    Choose Interviewees
                  </option>
                </select>
              </div>
              <div className="form-group py-2">
                {/* <small id="error" className="form-text">
                  {state.errorMessage}
                </small> */}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
